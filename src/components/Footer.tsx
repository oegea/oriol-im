import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Glassmorphism background */}
      <div 
        className="relative backdrop-blur-sm border-t border-white/30"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {/* Subtle background animation */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(252,203,11,0.3) 0%, transparent 50%), 
                              radial-gradient(circle at 20% 80%, rgba(245,158,11,0.3) 0%, transparent 50%)`,
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-12 relative">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left section - About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Oriol Egea
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 max-w-md">
                Desarrollo, liderazgo tecnológico y aprendizajes del día a día. 
                Experiencias reales en el mundo del desarrollo y la tecnología.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/oegea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 text-white rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/oriolegea/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/OriolEgea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-blue-400 text-white rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-105"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right section - Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Enlaces
              </h3>
              <div className="space-y-3 text-sm">
                <Link 
                  href="/about"
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  <span>Sobre mí</span>
                  <ExternalLink size={14} />
                </Link>
                <Link 
                  href="/contact"
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  <span>Contacto</span>
                  <ExternalLink size={14} />
                </Link>
                <a 
                  href="/rss.xml" 
                  target="_blank"
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors"
                >
                  <span>RSS Feed</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section - Copyright and Legal */}
          <div className="pt-8 border-t border-white/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Left - Copyright */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>© {currentYear} Oriol Egea</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <a 
                  href="https://creativecommons.org/licenses/by-sa/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-colors"
                >
                  CC BY-SA 4.0
                </a>
              </div>

              {/* Right - Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/aviso-legal"
                  className="text-gray-500 hover:text-yellow-600 transition-colors"
                >
                  Aviso legal
                </Link>
                <Link 
                  href="/politica-de-privacidad"
                  className="text-gray-500 hover:text-yellow-600 transition-colors"
                >
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}