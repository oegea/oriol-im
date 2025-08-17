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
    <article className="border-b border-gray-200 pb-8 last:border-b-0">
      <header className="mb-4">
        <h2 className="mb-2" style={{ fontSize: '2rem', color: 'var(--text-dark)', fontWeight: 600 }}>
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:opacity-80 transition-opacity"
            style={{ color: 'var(--text-dark)' }}
          >
            {post.title.rendered}
          </Link>
        </h2>
        
        <div 
          className="text-sm mb-4" 
          style={{ color: 'var(--text-meta)', fontSize: '0.9em' }}
        >
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
      </header>
      
      {featuredImage && (
        <div className="mb-4">
          <Image
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || post.title.rendered}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      )}
      
      {excerpt && (
        <div 
          className="mb-4 leading-relaxed"
          style={{ color: 'var(--text-light)' }}
          dangerouslySetInnerHTML={{ 
            __html: post.excerpt.rendered.replace(/wp\.oriol/g, 'www.oriol') 
          }}
        />
      )}
      
      <Link 
        href={`/posts/${post.slug}`}
        className="inline-flex items-center font-medium hover:underline"
        style={{ color: 'var(--link-color)' }}
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
    </article>
  )
}