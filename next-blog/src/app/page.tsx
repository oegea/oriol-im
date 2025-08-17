import { getPosts } from '@/lib/wordpress'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section with glassmorphism */}
      <section className="relative overflow-hidden">
        {/* Animated background patterns */}
        <div 
          className="absolute inset-0 opacity-5 animate-float"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(252,203,11,0.4) 0%, transparent 50%), 
                              radial-gradient(circle at 80% 70%, rgba(245,158,11,0.4) 0%, transparent 50%),
                              radial-gradient(circle at 40% 80%, rgba(252,203,11,0.3) 0%, transparent 50%)`,
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
      </section>
      
    </div>
  )
}