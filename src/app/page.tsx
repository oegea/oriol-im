import { getPosts } from '@/lib/markdown'
import PostCard from '@/components/PostCardMarkdown'
import NewsletterForm from '@/components/NewsletterForm'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function HomePage() {
  const posts = getPosts(1, 6) // Get first 6 posts for homepage

  return (
    <div className="min-h-screen">
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
            className="mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 700,
              lineHeight: 1.1
            }}
          >
            ¡Hola! Soy Oriol 👋
          </h1>
          
          <p 
            className="mb-8 text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-light)' }}
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
            className="mb-4 text-3xl font-bold"
            style={{ color: 'var(--text-dark)' }}
          >
            Últimas entradas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 150}ms`,
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
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