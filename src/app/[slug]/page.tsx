import { notFound } from 'next/navigation'
import { getPageBySlugWithHtml as getPage } from '@/lib/pages-markdown'
import { getPostBySlugWithHtml, getAllPostSlugs } from '@/lib/markdown'
import { config } from '@/lib/config'
import { Page } from '@/types/page'
import Breadcrumbs from '@/components/Breadcrumbs'

interface DynamicPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first, then as post
  let content: Page | null = await getPage(slug)
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
    title: content!.title,
    description: content!.excerpt ? 
      content!.excerpt.substring(0, 160) :
      `${content!.title} - ${config.site.title}`,
  }
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const slug = params.slug
  
  // Try to get as page first
  let content: Page | null = await getPage(slug)
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

  // Otherwise render as markdown page (content is guaranteed to exist here)
  const pageBreadcrumbItems = [
    { label: content!.title }
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
                {content!.title}
              </h1>
            </header>
            
            <div 
              className="prose prose-lg max-w-none"
              style={{ color: 'var(--text-light)' }}
              dangerouslySetInnerHTML={{ __html: content!.htmlContent || content!.content }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all posts and pages
export async function generateStaticParams() {
  const { getAllPageSlugs } = (await import('@/lib/pages-markdown'))
  
  // Get all post slugs from markdown files
  const postSlugs = getAllPostSlugs()
  
  // Get all page slugs from markdown files
  const pageSlugs = await getAllPageSlugs()
  
  // Combine all slugs
  const allSlugs = [...postSlugs, ...pageSlugs]
  
  return allSlugs.map(slug => ({
    slug: slug
  }))
}