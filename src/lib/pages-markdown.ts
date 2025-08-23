import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Page, PageMetadata, PageSummary } from '@/types/page'

const pagesDirectory = path.join(process.cwd(), 'pages')

// Get all page filenames
export function getAllPageFilenames(): string[] {
  if (!fs.existsSync(pagesDirectory)) {
    return []
  }
  
  return fs.readdirSync(pagesDirectory)
    .filter(filename => filename.endsWith('.md'))
    .sort((a, b) => {
      // Sort by filename alphabetically
      return a.localeCompare(b)
    })
}

// Get all pages metadata
export function getAllPages(): PageSummary[] {
  const filenames = getAllPageFilenames()
  
  return filenames.map(filename => {
    const fullPath = path.join(pagesDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      ...data,
      filename,
    } as PageSummary & { filename: string }
  }).sort((a, b) => {
    // Sort by menu order first, then by title
    if (a.menu_order !== b.menu_order) {
      return a.menu_order - b.menu_order
    }
    return a.title.localeCompare(b.title)
  })
}

// Get a single page by slug
export function getPageBySlug(slug: string): Page | null {
  const filenames = getAllPageFilenames()
  
  // Find the file that contains this slug
  for (const filename of filenames) {
    const fullPath = path.join(pagesDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    if (data.slug === slug) {
      return {
        ...data,
        content,
        filename,
      } as Page
    }
  }
  
  return null
}

// Get all page slugs for static generation
export function getAllPageSlugs(): string[] {
  const allPages = getAllPages()
  return allPages.map(page => page.slug)
}

// Re-export utility functions
export { formatDate, stripHtml } from './utils'

// Helper function to get pages count
export function getTotalPagesCount(): number {
  return getAllPages().length
}

// Convert Markdown to HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// Get a single page with HTML content
export async function getPageBySlugWithHtml(slug: string): Promise<(Page & { htmlContent: string }) | null> {
  const page = getPageBySlug(slug)
  if (!page) return null
  
  const htmlContent = await markdownToHtml(page.content)
  return {
    ...page,
    htmlContent
  }
}