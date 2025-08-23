import { notFound } from 'next/navigation'
import { getPage } from '@/lib/wordpress'
import { getPostBySlugWithHtml, getAllPostSlugs } from '@/lib/markdown'
import { config } from '@/lib/config'
import { WordPressPage } from '@/types/wordpress'
import Breadcrumbs from '@/components/Breadcrumbs'

interface DynamicPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first, then as post
  let content: WordPressPage | null = await getPage(slug)
  let post = null
  
  if (!content) {
    post = await getPostBySlugWithHtml(slug)
  }
  
  if (!content && !post) {
    return {}
  }

  if (post) {
    return {
      title: post.title.replace(/&#8217;/g, "'"),
      description: post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160),
    }
  }

  return {
    title: content!.title.rendered,
    description: content!.excerpt?.rendered ? 
      content!.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) :
      `${content!.title.rendered} - ${config.site.title}`,
  }
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first
  let content: WordPressPage | null = await getPage(slug)
  let post = null
  
  // If not found as page, try as post
  if (!content) {
    post = await getPostBySlugWithHtml(slug)
  }

  // If still not found, return 404
  if (!content && !post) {
    notFound()
  }

  // If it's a post, render post layout
  if (post) {
    const breadcrumbItems = [
      { label: 'Blog', href: '/blog' },
      { label: post.title.replace(/&#8217;/g, "'") }
    ]

    return (
      <div className="min-h-screen bg-gray-50 md:py-12">
        <div className="max-w-6xl mx-auto px-2 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} />
            
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
                  {post.title.replace(/&#8217;/g, "'")}
                </h1>
                
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <time 
                    dateTime={post.date}
                    className="text-sm"
                    style={{ color: 'var(--text-meta)' }}
                  >
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category: string) => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-medium rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {post.featured_image && (
                  <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.featured_image_alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </header>
              
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: 'var(--text-light)' }}
                dangerouslySetInnerHTML={{ __html: post.htmlContent || post.content }}
              />
            </article>
          </div>
        </div>
      </div>
    )
  }

  // Otherwise render as WordPress page (content is guaranteed to exist here)
  const featuredImage = (content as any)._embedded?.['wp:featuredmedia']?.[0]
  
  const pageBreadcrumbItems = [
    { label: content!.title.rendered }
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:py-12">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs for pages */}
          <Breadcrumbs items={pageBreadcrumbItems} />
          
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
                {content!.title.rendered}
              </h1>
              
              {featuredImage && (
                <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
                  <img
                    src={featuredImage.source_url}
                    alt={featuredImage.alt_text || content!.title.rendered}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              style={{ color: 'var(--text-light)' }}
              dangerouslySetInnerHTML={{ __html: content!.content.rendered }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all posts and pages
export async function generateStaticParams() {
  // Get all post slugs from markdown files
  const postSlugs = getAllPostSlugs()
  
  // Note: We could also get page slugs from WordPress here if needed
  // For now, let's focus on posts
  
  return postSlugs.map(slug => ({
    slug: slug
  }))
}