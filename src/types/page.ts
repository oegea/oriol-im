// Types for markdown-based pages

export interface PageMetadata {
  title: string
  slug: string
  date: string  // YYYY-MM-DD format
  modified: string // YYYY-MM-DD format
  excerpt: string
  status: string
  type: string
  id: string
  parent: number
  menu_order: number
}

export interface Page extends PageMetadata {
  content: string  // Markdown content
  htmlContent?: string  // HTML content (when converted from markdown)
  filename: string
}

// For list views where we don't need the full content
export type PageSummary = PageMetadata