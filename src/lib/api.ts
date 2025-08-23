// Client-side API functions to fetch data from our API routes

export async function fetchPosts(params?: {
  search?: string
  page?: number
  perPage?: number
}) {
  const searchParams = new URLSearchParams()
  
  if (params?.search) searchParams.set('search', params.search)
  if (params?.page) searchParams.set('page', params.page.toString())
  if (params?.perPage) searchParams.set('perPage', params.perPage.toString())
  
  const url = `/api/posts?${searchParams.toString()}`
  
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return response.json()
}

export async function fetchPostBySlug(slug: string) {
  const response = await fetch(`/api/posts/${slug}`)
  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }
  
  return response.json()
}