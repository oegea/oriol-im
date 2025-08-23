import { NextRequest } from 'next/server'
import { getAllPages } from '@/lib/pages-markdown'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get('search')

    let pages = getAllPages()

    // Filter pages based on search query
    if (search && search.trim()) {
      const query = search.toLowerCase()
      pages = pages.filter(page => 
        page.title.toLowerCase().includes(query) ||
        page.excerpt.toLowerCase().includes(query) ||
        page.slug.toLowerCase().includes(query)
      )
    }

    return Response.json({
      pages,
      total: pages.length,
      searchQuery: search || ''
    })
  } catch (error) {
    console.error('Error fetching pages:', error)
    return Response.json({ error: 'Failed to fetch pages' }, { status: 500 })
  }
}