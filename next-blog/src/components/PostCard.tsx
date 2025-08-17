import Link from 'next/link'
import Image from 'next/image'
import { WordPressPost } from '@/types/wordpress'
import { formatDate, stripHtml } from '@/lib/wordpress'

interface PostCardProps {
  post: WordPressPost
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]
  const excerpt = stripHtml(post.excerpt.rendered)

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title.rendered}
          </Link>
        </h2>
        
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}
        
        <Link 
          href={`/posts/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          Leer más
          <svg 
            className="ml-1 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}