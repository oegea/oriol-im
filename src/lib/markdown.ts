import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post, PostMetadata, PostSummary } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'posts')

// Get all post filenames
export function getAllPostFilenames(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  return fs.readdirSync(postsDirectory)
    .filter(filename => filename.endsWith('.md'))
    .sort((a, b) => {
      // Sort by date (newest first) - extract date from filename
      const dateA = a.substring(0, 10)
      const dateB = b.substring(0, 10)
      return dateB.localeCompare(dateA)
    })
}

// Get all posts metadata
export function getAllPosts(): PostSummary[] {
  const filenames = getAllPostFilenames()
  
  return filenames.map(filename => {
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      ...data,
      filename,
    } as PostSummary & { filename: string }
  })
}

// Get posts with pagination
export function getPosts(page: number = 1, perPage: number = 10): PostSummary[] {
  const allPosts = getAllPosts()
  const startIndex = (page - 1) * perPage
  const endIndex = startIndex + perPage
  
  return allPosts.slice(startIndex, endIndex)
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
  const filenames = getAllPostFilenames()
  
  // Find the file that contains this slug
  for (const filename of filenames) {
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    if (data.slug === slug) {
      return {
        ...data,
        content,
        filename,
      } as Post
    }
  }
  
  return null
}

// Get all post slugs for static generation
export function getAllPostSlugs(): string[] {
  const allPosts = getAllPosts()
  return allPosts.map(post => post.slug)
}

// Re-export utility functions
export { formatDate, stripHtml } from './utils'

// Helper function to get posts count
export function getTotalPostsCount(): number {
  return getAllPosts().length
}

// Convert Markdown to HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// Get a single post with HTML content
export async function getPostBySlugWithHtml(slug: string): Promise<(Post & { htmlContent: string }) | null> {
  const post = getPostBySlug(slug)
  if (!post) return null
  
  const htmlContent = await markdownToHtml(post.content)
  return {
    ...post,
    htmlContent
  }
}