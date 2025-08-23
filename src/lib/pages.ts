// Client-side pages library that uses our internal API routes
// to read pages from markdown files

import { PageSummary, Page } from '@/types/page'

const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://www.oriol.im/api' 
  : '/api'

export interface PagesResponse {
  pages: PageSummary[]
  total: number
  searchQuery: string
}

// Get all pages
export async function getPages(search?: string): Promise<PageSummary[]> {
  try {
    const params = new URLSearchParams()
    if (search && search.trim()) {
      params.set('search', search.trim())
    }
    
    const response = await fetch(`${API_BASE}/pages?${params.toString()}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: PagesResponse = await response.json()
    return data.pages
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

// Get pages with full response data
export async function getPagesWithSearch(search?: string): Promise<PagesResponse> {
  try {
    const params = new URLSearchParams()
    if (search && search.trim()) {
      params.set('search', search.trim())
    }
    
    const response = await fetch(`${API_BASE}/pages?${params.toString()}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching pages with search:', error)
    return {
      pages: [],
      total: 0,
      searchQuery: search || ''
    }
  }
}

// Get a single page by slug
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await fetch(`${API_BASE}/pages/${slug}`)
    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

// Get all page slugs for static generation
export async function getAllPageSlugs(): Promise<string[]> {
  try {
    const pages = await getPages()
    return pages.map(page => page.slug)
  } catch (error) {
    console.error('Error fetching page slugs:', error)
    return []
  }
}

// Re-export utility functions for compatibility
export { formatDate, stripHtml } from './utils'