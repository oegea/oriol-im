// Client-side posts library that mimics the WordPress API interface
// but uses our internal API routes that read from markdown files

import { PostSummary, Post } from '@/types/post'

const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://www.oriol.im/api' 
  : '/api'

export interface PostsResponse {
  posts: PostSummary[]
  pagination: {
    currentPage: number
    totalPages: number
    totalPosts: number
    perPage: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  searchQuery: string
}

// Get posts with pagination (replaces WordPress getPosts)
export async function getPosts(page: number = 1, perPage: number = 10): Promise<PostSummary[]> {
  try {
    const response = await fetch(`${API_BASE}/posts?page=${page}&perPage=${perPage}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: PostsResponse = await response.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Get posts with full response data (for pagination info)
export async function getPostsWithPagination(
  page: number = 1, 
  perPage: number = 10, 
  search?: string
): Promise<PostsResponse> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString()
    })
    
    if (search && search.trim()) {
      params.set('search', search.trim())
    }
    
    const response = await fetch(`${API_BASE}/posts?${params.toString()}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts with pagination:', error)
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
        perPage,
        hasNextPage: false,
        hasPrevPage: false
      },
      searchQuery: search || ''
    }
  }
}

// Get a single post by slug (replaces WordPress getPost)
export async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_BASE}/posts/${slug}`)
    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Re-export utility functions for compatibility
export { formatDate, stripHtml } from './utils'