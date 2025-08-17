import axios from 'axios'
import { WordPressPost, WordPressPage, WordPressMedia } from '@/types/wordpress'
import { config } from './config'

// Create axios instance with default config
const wpApi = axios.create({
  baseURL: config.wordpress.apiUrl,
  timeout: 10000,
})

export async function getPosts(page: number = 1, perPage: number = 10): Promise<WordPressPost[]> {
  try {
    const response = await wpApi.get('/posts', {
      params: {
        page,
        per_page: perPage,
        _embed: true,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await wpApi.get('/posts', {
      params: {
        slug,
        _embed: true,
      },
    })
    
    // Find the exact post by slug (WordPress might return multiple results)
    const exactPost = response.data.find((post: any) => post.slug === slug)
    
    return exactPost || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getPage(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await wpApi.get('/pages', {
      params: {
        slug,
        _embed: true,
      },
    })
    
    // Find the exact page by slug (WordPress might return multiple results)
    const exactPage = response.data.find((page: any) => page.slug === slug)
    
    return exactPage || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getPageById(id: number): Promise<WordPressPage | null> {
  try {
    const response = await wpApi.get(`/pages/${id}`, {
      params: {
        _embed: true,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching page by ID:', error)
    return null
  }
}

// Function to get all page slugs for static generation
export async function getAllPageSlugs(): Promise<string[]> {
  try {
    const response = await wpApi.get('/pages', {
      params: {
        per_page: 100,
        _fields: 'slug',
      },
    })
    return response.data.map((page: { slug: string }) => page.slug)
  } catch (error) {
    console.error('Error fetching page slugs:', error)
    return []
  }
}

export async function getMedia(id: number): Promise<WordPressMedia | null> {
  try {
    const response = await wpApi.get(`/media/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching media:', error)
    return null
  }
}

export function getImageUrl(media: WordPressMedia, size: string = 'full'): string {
  if (size === 'full') {
    return media.source_url
  }
  
  const sizeData = media.media_details?.sizes?.[size]
  return sizeData ? sizeData.source_url : media.source_url
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}