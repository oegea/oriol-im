import { NextRequest } from 'next/server'
import { getPostBySlugWithHtml } from '@/lib/markdown'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getPostBySlugWithHtml(params.slug)
    
    if (!post) {
      return Response.json({ error: 'Post not found' }, { status: 404 })
    }

    return Response.json({ post })
  } catch (error) {
    console.error('Error fetching post:', error)
    return Response.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}