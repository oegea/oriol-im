import Link from 'next/link'
import Image from 'next/image'
import { WordPressPost } from '@/types/wordpress'
import { formatDate, stripHtml } from '@/lib/wordpress'
import { Calendar, ArrowRight } from 'lucide-react'

interface PostCardProps {
  post: WordPressPost
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]
  const excerpt = stripHtml(post.excerpt.rendered)

  return (
    <article className="group relative h-full">
      {/* Glassmorphism card */}
      <div 
        className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px)"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Image */}
        {featuredImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        
        {/* Content */}
        <div className="p-6 relative">
          {/* Date */}
          <div className="flex items-center space-x-2 mb-3 text-sm text-gray-500">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          
          {/* Title */}
          <h2 className="mb-3 text-xl font-bold leading-tight">
            <Link 
              href={`/posts/${post.slug}`}
              className="text-gray-900 group-hover:text-yellow-600 transition-colors duration-300"
            >
              {post.title.rendered}
            </Link>
          </h2>
          
          {/* Excerpt */}
          {excerpt && (
            <p 
              className="mb-4 text-gray-600 leading-relaxed line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: post.excerpt.rendered.replace(/wp\.oriol/g, 'www.oriol').replace(/<[^>]*>/g, '') 
              }}
            />
          )}
          
          {/* Read more link */}
          <Link 
            href={`/posts/${post.slug}`}
            className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300"
          >
            <span>Leer más</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </div>
      </div>
      
    </article>
  )
}