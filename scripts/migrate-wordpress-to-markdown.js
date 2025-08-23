const fs = require('fs')
const path = require('path')
const https = require('https')
const { execSync } = require('child_process')

// WordPress API configuration
const WP_API_URL = 'https://wp.oriol.im/wp-json/wp/v2'

// Ensure required packages are installed
try {
  require('turndown')
  require('turndown-plugin-gfm')
} catch (e) {
  console.log('Installing required packages...')
  execSync('npm install turndown turndown-plugin-gfm', { stdio: 'inherit' })
}

const TurndownService = require('turndown')
const { gfm } = require('turndown-plugin-gfm')

// Configure Turndown for better Markdown conversion
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  strongDelimiter: '**',
})

// Add GitHub Flavored Markdown support
turndownService.use(gfm)

// Custom rules for better conversion
turndownService.addRule('prismCode', {
  filter: function (node, options) {
    return node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE'
  },
  replacement: function (content, node, options) {
    const codeElement = node.firstChild
    const className = codeElement.getAttribute('class') || ''
    const languageMatch = className.match(/language-(\w+)/)
    const language = languageMatch ? languageMatch[1] : ''
    
    return '```' + language + '\n' + codeElement.textContent + '\n```\n\n'
  }
})

// Helper function to make API requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => data += chunk)
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', reject)
  })
}

// Helper function to clean and format slug for filename
function cleanSlug(slug) {
  return slug.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()
}

// Helper function to format date for frontmatter
function formatDate(dateString) {
  return new Date(dateString).toISOString().split('T')[0]
}

// Helper function to extract plain text from HTML
function extractPlainText(html) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

// Helper function to create frontmatter
function createFrontmatter(post) {
  const frontmatter = {
    title: post.title.rendered,
    slug: post.slug,
    date: formatDate(post.date),
    excerpt: extractPlainText(post.excerpt.rendered || ''),
    status: post.status,
    type: post.type,
    id: post.id
  }
  
  // Add categories if they exist
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
  
  // Add featured image if exists
  if (post._embedded && post._embedded['wp:featuredmedia']) {
    const media = post._embedded['wp:featuredmedia'][0]
    if (media) {
      frontmatter.featured_image = media.source_url
      frontmatter.featured_image_alt = media.alt_text || ''
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

// Main migration function
async function migrateWordPressToMarkdown() {
  console.log('Starting WordPress to Markdown migration...')
  
  try {
    // Create posts directory
    const postsDir = path.join(process.cwd(), 'posts')
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true })
    }
    
    // First, get the total number of posts
    console.log('Getting total posts count...')
    const initialResponse = await makeRequest(`${WP_API_URL}/posts?page=1&per_page=1`)
    
    // Get total count from headers - we need to make a manual request to get headers
    const totalPostsResponse = await new Promise((resolve, reject) => {
      https.get(`${WP_API_URL}/posts?page=1&per_page=1`, (res) => {
        const totalPosts = parseInt(res.headers['x-wp-total'] || '0', 10)
        resolve(totalPosts)
      }).on('error', reject)
    })
    
    console.log(`Total posts to fetch: ${totalPostsResponse}`)
    
    // Calculate how many pages we need (WordPress typically limits to 100 per page)
    const perPage = 10  // Use smaller page size to be safe
    const totalPages = Math.ceil(totalPostsResponse / perPage)
    
    // Fetch all posts with proper pagination
    let allPosts = []
    
    for (let page = 1; page <= totalPages; page++) {
      console.log(`Fetching page ${page}/${totalPages}...`)
      try {
        const posts = await makeRequest(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed=true`)
        
        if (Array.isArray(posts) && posts.length > 0) {
          allPosts = allPosts.concat(posts)
        }
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`Error fetching page ${page}:`, error.message)
        // Continue with next page
      }
    }
    
    console.log(`Found ${allPosts.length} posts to migrate`)
    
    // Convert each post to Markdown
    const postIndex = []
    
    for (let i = 0; i < allPosts.length; i++) {
      const post = allPosts[i]
      console.log(`Converting post ${i + 1}/${allPosts.length}: ${post.title.rendered}`)
      
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
        
        // Write markdown file
        fs.writeFileSync(filepath, fullMarkdown, 'utf8')
        
        // Add to index
        postIndex.push({
          title: post.title.rendered,
          slug: post.slug,
          date: formatDate(post.date),
          excerpt: extractPlainText(post.excerpt.rendered || ''),
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

- Migrated from WordPress API: ${WP_API_URL}
- Migration date: ${new Date().toISOString()}
- Posts directory: \`./posts/\`
- Filename format: \`YYYY-MM-DD-slug.md\`

## Frontmatter Structure

Each post includes the following frontmatter:
- \`title\`: Post title
- \`slug\`: WordPress slug
- \`date\`: Publication date (YYYY-MM-DD)
- \`excerpt\`: Post excerpt/description
- \`status\`: Post status (usually 'publish')
- \`type\`: Content type (usually 'post')
- \`id\`: Original WordPress post ID
- \`categories\`: Array of category names (if any)
- \`tags\`: Array of tag names (if any)
- \`featured_image\`: Featured image URL (if any)
- \`featured_image_alt\`: Featured image alt text (if any)
`
    
    fs.writeFileSync(path.join(process.cwd(), 'POSTS_INDEX.md'), indexContent, 'utf8')
    
    console.log('\n✅ Migration completed successfully!')
    console.log(`📁 Posts saved to: ${postsDir}`)
    console.log(`📋 Index created: POSTS_INDEX.md`)
    console.log(`📊 Total posts migrated: ${postIndex.length}`)
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrateWordPressToMarkdown()