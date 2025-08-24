import Link from 'next/link'
import Image from 'next/image'
import { PostSummary } from '@/types/post'
import { formatDate, stripHtml } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'

interface PostCardProps {
  post: PostSummary
}

export default function PostCard({ post }: PostCardProps) {
  const excerpt = stripHtml(post.excerpt)

  return (
    <article className="group relative h-full">
      {/* Glassmorphism card */}
      <div 
        className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) post-card-glassmorphism"
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
          <div className="flex items-center space-x-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          
          {/* Title */}
          <h2 className="mb-3 text-xl font-bold leading-tight">
            <Link 
              href={`/${post.slug}`}
              className="text-gray-900 dark:text-gray-100 group-hover:text-yellow-600 transition-colors duration-300"
            >
              {post.title}
            </Link>
          </h2>
          
          {/* Excerpt */}
          {excerpt && (
            <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              {excerpt}
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
      </div>
    </article>
  )
}