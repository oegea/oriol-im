import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPost } from '@/lib/wordpress'
import { formatDate } from '@/lib/wordpress'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]

  return (
    <div className="min-h-screen bg-gray-50 md:py-12">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white md:rounded-lg md:shadow-lg p-4 md:p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title.rendered}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>
              
              {featuredImage && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || post.title.rendered}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}