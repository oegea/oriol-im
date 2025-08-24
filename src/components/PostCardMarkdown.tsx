import Link from 'next/link'
import Image from 'next/image'
import { PostSummary } from '@/types/post'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'

interface PostCardProps {
  post: PostSummary
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  // Clean up excerpt - remove any HTML entities
  const cleanExcerpt = post.excerpt
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8230;/g, "...")
    .replace(/&hellip;/g, "...")
    .replace(/<[^>]*>/g, '')
    .trim()

  if (featured) {
    return (
      <article className="group relative w-full">
        <div 
          className="relative backdrop-blur-sm rounded-3xl border-0 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) group-hover:shadow-2xl featured-post-glassmorphism"
          style={{ 
            boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.3)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/5 to-orange-400/5" />
          
          {/* Background category badge */}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute bottom-2 right-2 w-[240px] h-[240px] opacity-[0.065] pointer-events-none flex items-end justify-end">
              <div className="text-[240px] leading-none select-none">
                📝
              </div>
            </div>
          )}
          
          <div className="flex flex-col md:flex-row">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative md:w-1/2">
                <div className="relative h-64 md:h-full overflow-hidden md:rounded-l-3xl">
                  <Image
                    src={post.featured_image}
                    alt={post.featured_image_alt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            )}
            
            {/* Content */}
            <div className={`p-8 relative z-10 ${post.featured_image ? 'md:w-1/2' : 'w-full'}`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                  <Calendar size={16} />
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
                {post.categories && post.categories.length > 0 && (
                  <span className="px-3 py-1 gradient-primary text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
                    {post.categories[0]}
                  </span>
                )}
              </div>
              
              <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
                <Link 
                  href={`/${post.slug}`}
                  className="hover:text-yellow-600 transition-colors duration-300"
                >
                  {post.title.replace(/&#8217;/g, "'")}
                </Link>
              </h3>
              
              <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed mb-6">
                {cleanExcerpt.substring(0, 300)}{cleanExcerpt.length > 300 ? '...' : ''}
              </p>
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link 
                  href={`/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-base"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight 
                    size={16} 
                    className="transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group relative h-full">
      {/* Glassmorphism card */}
      <div 
        className="relative h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-600/30 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) post-card-glassmorphism"
        style={{ 
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.featured_image_alt || post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        
        {/* Content */}
        <div className="p-6 relative">
          {/* Date */}
          <div className="flex items-center space-x-2 mb-3 text-sm text-slate-600 dark:text-slate-300">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          
          {/* Title */}
          <h2 className="mb-3 text-xl font-bold leading-tight">
            <Link 
              href={`/${post.slug}`}
              className="text-slate-900 dark:text-slate-50 group-hover:text-yellow-600 transition-colors duration-300"
            >
              {post.title.replace(/&#8217;/g, "'")}
            </Link>
          </h2>
          
          {/* Excerpt */}
          {cleanExcerpt && (
            <p className="mb-4 text-slate-700 dark:text-slate-200 leading-relaxed line-clamp-3">
              {cleanExcerpt.substring(0, 150)}{cleanExcerpt.length > 150 ? '...' : ''}
            </p>
          )}
          
          {/* Read more link */}
          <Link 
            href={`/${post.slug}`}
            className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300"
          >
            <span>Leer más</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </div>

        {/* Category badge in bottom-right corner */}
        {post.categories && post.categories.length > 0 && (
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 gradient-primary text-white text-xs font-medium rounded-full shadow-lg backdrop-blur-sm">
              {post.categories[0]}
            </span>
          </div>
        )}
      </div>
      
    </article>
  )
}