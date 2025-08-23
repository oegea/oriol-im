import { NextRequest } from 'next/server'
import { getAllPosts } from '@/lib/markdown'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1', 10)
    const perPage = parseInt(searchParams.get('perPage') || '10', 10)

    let posts = getAllPosts()

    // Filter posts based on search query
    if (search && search.trim()) {
      const query = search.toLowerCase()
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.categories?.some(cat => cat.toLowerCase().includes(query)) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Calculate pagination
    const totalPosts = posts.length
    const totalPages = Math.ceil(totalPosts / perPage)
    const startIndex = (page - 1) * perPage
    const endIndex = startIndex + perPage
    const paginatedPosts = posts.slice(startIndex, endIndex)

    return Response.json({
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts,
        perPage,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      searchQuery: search || ''
    })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}