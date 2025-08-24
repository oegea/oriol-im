import { getPosts } from '@/lib/markdown'
import PostCard from '@/components/PostCardMarkdown'
import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function HomePage() {
  const posts = getPosts(1, 4) // Get first 4 posts for homepage

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Hero Section with background image */}
      <section className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url(/contact-hero-bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: '75% center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Subtle animated overlay */}
        <div 
          className="absolute inset-0 opacity-5 animate-float"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(252,203,11,0.2) 0%, transparent 50%), 
                              radial-gradient(circle at 80% 70%, rgba(245,158,11,0.2) 0%, transparent 50%)`,
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 
            className="mb-8"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-50 dark:to-slate-300">
              ¡Hola! Soy Oriol
            </span>{' '}
            <span className="inline-block">👋</span>
          </h1>
          
          <p 
            className="mb-8 text-xl leading-relaxed max-w-3xl mx-auto text-slate-600 dark:text-slate-300"
          >
            Escribo sobre desarrollo, liderazgo tecnológico y aprendizajes del día a día. 
            En este sitio web encontrarás experiencias personales, reflexiones, 
            elementos divulgativos y todo lo que voy descubriendo en el mundo del desarrollo y la tecnología.
          </p>
          
          
          {/* Newsletter form - moved to hero */}
          <div className="max-w-md mx-auto mb-12">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Posts section */}
      <section className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 
            className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-50"
          >
            Últimas entradas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {/* Featured post - full width card for the first/most recent post */}
          {posts.length > 0 && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <PostCard post={posts[0]} featured={true} />
            </div>
          )}
          
          {/* Regular grid for the rest of posts */}
          {posts.length > 1 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in-up"
                  style={{ 
                    animationDelay: `${(index + 1) * 150}ms`,
                  }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* View all posts link */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-medium rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Ver todos los posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      
    </div>
  )
}