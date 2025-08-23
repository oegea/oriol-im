import { NextRequest } from 'next/server'
import { getPageBySlugWithHtml } from '@/lib/pages-markdown'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const page = await getPageBySlugWithHtml(slug)

    if (!page) {
      return Response.json({ error: 'Page not found' }, { status: 404 })
    }

    return Response.json({ page })
  } catch (error) {
    console.error('Error fetching page:', error)
    return Response.json({ error: 'Failed to fetch page' }, { status: 500 })
  }
}