const fs = require('fs')
const path = require('path')
const https = require('https')

// WordPress API configuration
const WP_API_URL = 'https://wp.oriol.im/wp-json/wp/v2'

// Ensure required packages are installed
try {
  require('turndown')
  require('turndown-plugin-gfm')
} catch (e) {
  console.log('Installing required packages...')
  const { execSync } = require('child_process')
  execSync('npm install turndown turndown-plugin-gfm', { stdio: 'inherit' })
}

const TurndownService = require('turndown')
const { gfm } = require('turndown-plugin-gfm')

// Configure Turndown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  strongDelimiter: '**',
})
turndownService.use(gfm)

// Helper function to make API requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching: ${url}`)
    https.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => data += chunk)
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data)
          resolve({ data: parsed, headers: res.headers })
        } catch (e) {
          console.error('Parse error:', e.message)
          resolve({ data: [], headers: res.headers })
        }
      })
    }).on('error', reject)
  })
}

// Helper functions
function cleanSlug(slug) {
  return slug.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()
}

function formatDate(dateString) {
  return new Date(dateString).toISOString().split('T')[0]
}

function extractPlainText(html) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

function createFrontmatter(page) {
  const frontmatter = {
    title: page.title.rendered.replace(/"/g, '\\"'),
    slug: page.slug,
    date: formatDate(page.date),
    modified: formatDate(page.modified),
    excerpt: extractPlainText(page.excerpt?.rendered || '').replace(/"/g, '\\"'),
    status: page.status,
    type: page.type,
    id: page.id,
    parent: page.parent || 0,
    menu_order: page.menu_order || 0
  }
  
  let frontmatterString = '---\n'
  for (const [key, value] of Object.entries(frontmatter)) {
    if (Array.isArray(value)) {
      frontmatterString += `${key}:\n${value.map(v => `  - "${v}"`).join('\n')}\n`
    } else {
      frontmatterString += `${key}: "${value}"\n`
    }
  }
  frontmatterString += '---\n\n'
  
  return frontmatterString
}

async function migrateWordPressPagesToMarkdown() {
  console.log('Starting WordPress pages to Markdown migration...')
  
  try {
    // Create pages directory
    const pagesDir = path.join(process.cwd(), 'pages')
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true })
    }
    
    // Fetch all pages
    console.log('Fetching all pages...')
    let allPages = []
    let allPagesSet = new Set() // To avoid duplicates
    
    // Try different approaches to get all pages
    const approaches = [
      `${WP_API_URL}/pages?per_page=100&_embed=true`, // Get up to 100 at once
      `${WP_API_URL}/pages?per_page=50&orderby=date&order=asc&_embed=true`, // Oldest first
      `${WP_API_URL}/pages?per_page=50&orderby=date&order=desc&_embed=true`, // Newest first
      `${WP_API_URL}/pages?per_page=50&orderby=menu_order&order=asc&_embed=true`, // By menu order
    ]
    
    for (const apiUrl of approaches) {
      try {
        const response = await makeRequest(apiUrl)
        const pages = response.data
        
        if (Array.isArray(pages)) {
          pages.forEach(page => {
            if (page.id && !allPagesSet.has(page.id)) {
              allPagesSet.add(page.id)
              allPages.push(page)
            }
          })
        }
        
        console.log(`Approach yielded ${pages.length} pages, total unique: ${allPages.length}`)
        
      } catch (error) {
        console.error(`Error with approach ${apiUrl}:`, error.message)
      }
    }
    
    // If we still don't have enough pages, try pagination
    if (allPages.length < 10) {
      console.log('Trying paginated approach...')
      
      for (let page = 1; page <= 5; page++) { // Try up to 5 pages
        try {
          const response = await makeRequest(`${WP_API_URL}/pages?page=${page}&per_page=10&_embed=true`)
          const pages = response.data
          
          if (!Array.isArray(pages) || pages.length === 0) {
            break
          }
          
          pages.forEach(page => {
            if (page.id && !allPagesSet.has(page.id)) {
              allPagesSet.add(page.id)
              allPages.push(page)
            }
          })
          
          console.log(`Page ${page} yielded ${pages.length} pages, total unique: ${allPages.length}`)
          
        } catch (error) {
          console.error(`Error fetching page ${page}:`, error.message)
        }
      }
    }
    
    console.log(`Found ${allPages.length} unique pages to migrate`)
    
    // Convert each page to Markdown
    const pageIndex = []
    
    for (let i = 0; i < allPages.length; i++) {
      const page = allPages[i]
      console.log(`Converting page ${i + 1}/${allPages.length}: ${page.title.rendered} (ID: ${page.id})`)
      
      try {
        // Convert HTML content to Markdown
        const markdownContent = turndownService.turndown(page.content.rendered)
        
        // Create frontmatter
        const frontmatter = createFrontmatter(page)
        
        // Combine frontmatter and content
        const fullMarkdown = frontmatter + markdownContent
        
        // Create filename from slug
        const cleanedSlug = cleanSlug(page.slug)
        const filename = `${cleanedSlug}.md`
        const filepath = path.join(pagesDir, filename)
        
        // Check if file already exists
        if (fs.existsSync(filepath)) {
          console.log(`⚠️  File already exists, skipping: ${filename}`)
          continue
        }
        
        // Write markdown file
        fs.writeFileSync(filepath, fullMarkdown, 'utf8')
        
        // Add to index
        pageIndex.push({
          title: page.title.rendered,
          slug: page.slug,
          date: formatDate(page.date),
          modified: formatDate(page.modified),
          excerpt: extractPlainText(page.excerpt?.rendered || ''),
          filename: filename,
          id: page.id,
          parent: page.parent || 0,
          menu_order: page.menu_order || 0
        })
        
        console.log(`✓ Created: ${filename}`)
        
      } catch (error) {
        console.error(`✗ Error converting page "${page.title.rendered}":`, error.message)
      }
    }
    
    // Sort pages by menu order first, then by title
    pageIndex.sort((a, b) => {
      if (a.menu_order !== b.menu_order) {
        return a.menu_order - b.menu_order
      }
      return a.title.localeCompare(b.title)
    })
    
    // Create pages index file
    const indexContent = `# Pages Index

This file contains an index of all pages migrated from WordPress.

Total pages: ${pageIndex.length}

## Pages

${pageIndex.map(page => `- **[${page.title}](./pages/${page.filename})** 
  - Slug: \`${page.slug}\`
  - ID: ${page.id}
  - Parent: ${page.parent}
  - Menu Order: ${page.menu_order}
  - Last Modified: ${page.modified}
  - Excerpt: ${page.excerpt.substring(0, 150)}${page.excerpt.length > 150 ? '...' : ''}
`).join('\n')}

## Migration Info

- Migrated on: ${new Date().toISOString()}
- Total unique pages found: ${allPages.length}
- Successfully converted: ${pageIndex.length}
`
    
    fs.writeFileSync(path.join(process.cwd(), 'PAGES_INDEX.md'), indexContent, 'utf8')
    
    console.log('\n✅ Pages migration completed!')
    console.log(`📁 Pages directory: ${pagesDir}`)
    console.log(`📋 Index file: PAGES_INDEX.md`)
    console.log(`📊 Pages migrated: ${pageIndex.length}`)
    
    // List missing pages we might expect
    console.log('\n🔍 If pages are missing, check WordPress directly:')
    console.log(`Visit: https://wp.oriol.im/wp-json/wp/v2/pages?per_page=100`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateWordPressPagesToMarkdown()