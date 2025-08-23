// Types for markdown-based blog posts

export interface PostMetadata {
  title: string
  slug: string
  date: string  // YYYY-MM-DD format
  excerpt: string
  status: string
  type: string
  id: string
  categories?: string[]
  tags?: string[]
  featured_image?: string
  featured_image_alt?: string
}

export interface Post extends PostMetadata {
  content: string  // Markdown content
  htmlContent?: string  // HTML content (when converted from markdown)
  filename: string
}

export interface PostSummary extends PostMetadata {
  // For list views where we don't need the full content
}