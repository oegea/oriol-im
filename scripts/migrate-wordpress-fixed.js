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

function createFrontmatter(post) {
  const frontmatter = {
    title: post.title.rendered.replace(/"/g, '\\"'),
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: extractPlainText(post.excerpt?.rendered || '').replace(/"/g, '\\"'),
    status: post.status,
    type: post.type,
    id: post.id
  }
  
  // Add categories and tags if they exist
  if (post._embedded && post._embedded['wp:term']) {
    const categories = post._embedded['wp:term'][0] || []
    if (categories.length > 0) {
      frontmatter.categories = categories.map(cat => cat.name)
    }
    
    const tags = post._embedded['wp:term'][1] || []
    if (tags.length > 0) {
      frontmatter.tags = tags.map(tag => tag.name)
    }
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

async function migrateWordPressToMarkdown() {
  console.log('Starting WordPress to Markdown migration...')
  
  try {
    // Create posts directory
    const postsDir = path.join(process.cwd(), 'posts')
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true })
    }
    
    // Strategy 1: Try to get ALL posts at once with a very large per_page
    console.log('Attempting to fetch all posts...')
    let allPosts = []
    let allPostsSet = new Set() // To avoid duplicates
    
    // Try different approaches to get all posts
    const approaches = [
      `${WP_API_URL}/posts?per_page=100&_embed=true`, // Get up to 100 at once
      `${WP_API_URL}/posts?per_page=50&orderby=date&order=asc&_embed=true`, // Oldest first
      `${WP_API_URL}/posts?per_page=50&orderby=date&order=desc&_embed=true`, // Newest first
    ]
    
    for (const apiUrl of approaches) {
      try {
        const response = await makeRequest(apiUrl)
        const posts = response.data
        
        if (Array.isArray(posts)) {
          posts.forEach(post => {
            if (post.id && !allPostsSet.has(post.id)) {
              allPostsSet.add(post.id)
              allPosts.push(post)
            }
          })
        }
        
        console.log(`Approach yielded ${posts.length} posts, total unique: ${allPosts.length}`)
        
      } catch (error) {
        console.error(`Error with approach ${apiUrl}:`, error.message)
      }
    }
    
    // If we still don't have enough posts, try pagination
    if (allPosts.length < 20) {
      console.log('Trying paginated approach...')
      
      for (let page = 1; page <= 5; page++) { // Try up to 5 pages
        try {
          const response = await makeRequest(`${WP_API_URL}/posts?page=${page}&per_page=10&_embed=true`)
          const posts = response.data
          
          if (!Array.isArray(posts) || posts.length === 0) {
            break
          }
          
          posts.forEach(post => {
            if (post.id && !allPostsSet.has(post.id)) {
              allPostsSet.add(post.id)
              allPosts.push(post)
            }
          })
          
          console.log(`Page ${page} yielded ${posts.length} posts, total unique: ${allPosts.length}`)
          
        } catch (error) {
          console.error(`Error fetching page ${page}:`, error.message)
        }
      }
    }
    
    console.log(`Found ${allPosts.length} unique posts to migrate`)
    
    // Convert each post to Markdown
    const postIndex = []
    
    for (let i = 0; i < allPosts.length; i++) {
      const post = allPosts[i]
      console.log(`Converting post ${i + 1}/${allPosts.length}: ${post.title.rendered} (ID: ${post.id})`)
      
      try {
        // Convert HTML content to Markdown
        const markdownContent = turndownService.turndown(post.content.rendered)
        
        // Create frontmatter
        const frontmatter = createFrontmatter(post)
        
        // Combine frontmatter and content
        const fullMarkdown = frontmatter + markdownContent
        
        // Create filename from date and slug
        const date = formatDate(post.date)
        const cleanedSlug = cleanSlug(post.slug)
        const filename = `${date}-${cleanedSlug}.md`
        const filepath = path.join(postsDir, filename)
        
        // Check if file already exists
        if (fs.existsSync(filepath)) {
          console.log(`⚠️  File already exists, skipping: ${filename}`)
          continue
        }
        
        // Write markdown file
        fs.writeFileSync(filepath, fullMarkdown, 'utf8')
        
        // Add to index
        postIndex.push({
          title: post.title.rendered,
          slug: post.slug,
          date: formatDate(post.date),
          excerpt: extractPlainText(post.excerpt?.rendered || ''),
          filename: filename,
          id: post.id
        })
        
        console.log(`✓ Created: ${filename}`)
        
      } catch (error) {
        console.error(`✗ Error converting post "${post.title.rendered}":`, error.message)
      }
    }
    
    // Sort posts by date (newest first)
    postIndex.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    // Create posts index file
    const indexContent = `# Posts Index

This file contains an index of all blog posts migrated from WordPress.

Total posts: ${postIndex.length}

## Posts

${postIndex.map(post => `- **[${post.title}](./posts/${post.filename})** (${post.date})
  - Slug: \`${post.slug}\`
  - ID: ${post.id}
  - Excerpt: ${post.excerpt.substring(0, 150)}${post.excerpt.length > 150 ? '...' : ''}
`).join('\n')}

## Migration Info

- Migrated on: ${new Date().toISOString()}
- Total unique posts found: ${allPosts.length}
- Successfully converted: ${postIndex.length}
`
    
    fs.writeFileSync(path.join(process.cwd(), 'POSTS_INDEX.md'), indexContent, 'utf8')
    
    console.log('\n✅ Migration completed!')
    console.log(`📁 Posts directory: ${postsDir}`)
    console.log(`📋 Index file: POSTS_INDEX.md`)
    console.log(`📊 Posts migrated: ${postIndex.length}`)
    
    // List missing posts we might expect
    console.log('\n🔍 If posts are missing, check WordPress directly:')
    console.log(`Visit: https://wp.oriol.im/wp-json/wp/v2/posts?per_page=100`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateWordPressToMarkdown()