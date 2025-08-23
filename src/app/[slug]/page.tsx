import { notFound } from 'next/navigation'
import { getPage, getPost } from '@/lib/wordpress'
import { config } from '@/lib/config'
import { WordPressPage, WordPressPost } from '@/types/wordpress'

interface DynamicPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first, then as post
  let content: WordPressPage | WordPressPost | null = await getPage(slug)
  if (!content) {
    content = await getPost(slug)
  }
  
  if (!content) {
    return {}
  }

  return {
    title: content.title.rendered,
    description: content.excerpt?.rendered ? 
      content.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) :
      `${content.title.rendered} - ${config.site.title}`,
  }
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first
  let content: WordPressPage | WordPressPost | null = await getPage(slug)
  let isPost = false
  
  // If not found as page, try as post
  if (!content) {
    content = await getPost(slug)
    isPost = true
  }

  // If still not found, return 404
  if (!content) {
    notFound()
  }

  // Type guard to check if content has _embedded (only posts have this)
  const featuredImage = (content as any)._embedded?.['wp:featuredmedia']?.[0]

  return (
    <div className="min-h-screen bg-gray-50 md:py-12">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white md:rounded-lg md:shadow-lg p-4 md:p-8">
            <header className="mb-8">
              <h1 
                className="mb-4"
                style={{ 
                  color: 'var(--text-dark)', 
                  fontSize: '1.7em', 
                  fontWeight: 600 
                }}
              >
                {content.title.rendered}
              </h1>
              
              {isPost && (
                <div className="flex items-center text-sm mb-6" style={{ color: 'var(--text-meta)' }}>
                  <time dateTime={content.date}>
                    {new Date(content.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
              
              {featuredImage && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || content.title.rendered}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              style={{ color: 'var(--text-light)' }}
              dangerouslySetInnerHTML={{ __html: content.content.rendered }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}