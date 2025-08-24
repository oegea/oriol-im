'use client'

import ReadingProgress from '@/components/ReadingProgress'

export default function ContactPage() {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: '𝕏',
      url: 'https://www.twitter.com/OriolEgea',
      description: 'Sígueme en X para actualizaciones y pensamientos rápidos'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/oriolegea/',
      description: 'Conecta conmigo profesionalmente en LinkedIn'
    }
  ]

  return (
    <>
      <ReadingProgress />
      
      {/* Hero Section with background similar to homepage */}
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
            Hablemos 💬
          </h1>
          
          <p 
            className="mb-8 text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-light)' }}
          >
            Tanto si quieres preguntarme algo, charlar un rato, compartir algo interesante, 
            o proponerme un nuevo proyecto, me encantaría conocerte.
          </p>
        </div>
      </section>

      {/* Content section */}
      <section className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="mb-4 text-3xl font-bold"
            style={{ color: 'var(--text-dark)' }}
          >
            Formas preferidas de contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
        </div>

        {/* Social Media Cards with glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div 
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/30 hover:scale-105 transition-all duration-500 overflow-hidden group hover:border-yellow-400/50"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                {/* Yellow gradient overlay on hover - using your brand colors */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #f59e0b 100%)' }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{social.icon}</span>
                    <h3 
                      className="text-xl font-bold transition-colors duration-500"
                      style={{ color: 'var(--text-dark)' }}
                    >
                      {social.name}
                    </h3>
                  </div>
                  <p 
                    className="leading-relaxed mb-6 transition-colors duration-500"
                    style={{ color: 'var(--text-light)' }}
                  >
                    {social.description}
                  </p>
                  <div 
                    className="inline-flex items-center text-sm font-semibold transition-colors duration-500" 
                    style={{ color: 'var(--link-color)' }}
                  >
                    Contactar →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Email Alternative with glassmorphism */}
        <div 
          className="p-8 rounded-2xl backdrop-blur-xl border border-white/30 text-center animate-fade-in-up"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            animationDelay: '300ms'
          }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'var(--primary-color)' }}>
            <span className="text-2xl">📧</span>
          </div>
          <h2 
            className="text-2xl font-semibold mb-4"
            style={{ color: 'var(--text-dark)' }}
          >
            ¿Prefieres el email?
          </h2>
          <p 
            className="mb-8 leading-relaxed max-w-md mx-auto"
            style={{ color: 'var(--text-light)' }}
          >
            Si prefieres un contacto más directo, también puedes enviarme un email.
          </p>
          
          <a
            href="mailto:imoriol@duck.com?subject=Contacto desde oriol.im"
            className="inline-flex items-center px-8 py-4 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-color) 0%, #f59e0b 100%)',
            }}
          >
            <span className="mr-2">📧</span>
            Enviar email
          </a>
        </div>

        {/* Footer Note */}
        <div 
          className="text-center mt-12 p-6 rounded-xl border animate-fade-in-up"
          style={{ 
            backgroundColor: 'rgba(252, 203, 11, 0.1)',
            borderColor: 'rgba(252, 203, 11, 0.3)',
            animationDelay: '450ms'
          }}
        >
          <p style={{ color: 'var(--text-light)' }} className="leading-relaxed">
            <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>⚡ Tiempo de respuesta:</span> Intentaré responder a todos los mensajes relevantes y respetuosos, 
            aunque dependiendo de mi carga de trabajo, las respuestas pueden demorarse un poco.
          </p>
        </div>
      </section>
    </>
  )
}