import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left section - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-dark)' }}>
                Oriol Egea
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-light)' }}>
              Senior Frontend Engineer apasionado por JavaScript, React y crear productos digitales que aporten valor.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/oegea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/oriolegea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/OriolEgea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center section - Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2" style={{ color: 'var(--text-dark)' }}>
              <span className="text-xl">⚡</span>
              <span>Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full border border-yellow-300">
                JavaScript
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-300">
                React
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full border border-green-300">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full border border-purple-300">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full border border-cyan-300">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* Right section - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center space-x-2" style={{ color: 'var(--text-dark)' }}>
              <span className="text-xl">🔗</span>
              <span>Enlaces</span>
            </h3>
            <div className="space-y-2 text-sm">
              <Link 
                href="/about"
                className="block hover:text-yellow-600 transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                Sobre mí
              </Link>
              <Link 
                href="/contact"
                className="block hover:text-yellow-600 transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                Contacto
              </Link>
              <a 
                href="/rss" 
                target="_blank"
                className="block hover:text-yellow-600 transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                RSS Feed
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and Legal */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Copyright */}
            <div className="flex items-center space-x-2 text-sm">
              <span style={{ color: 'var(--text-meta)' }}>
                © {currentYear} Oriol Egea
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span style={{ color: 'var(--text-meta)' }}>
                <a 
                  href="https://creativecommons.org/licenses/by-sa/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-yellow-600 transition-colors"
                >
                  CC BY-SA 4.0
                </a>
              </span>
            </div>

            {/* Right - Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/aviso-legal"
                className="flex items-center space-x-1 hover:text-yellow-600 transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                <span>⚖️</span>
                <span>Aviso legal</span>
              </Link>
              <Link 
                href="/politica-de-privacidad"
                className="flex items-center space-x-1 hover:text-yellow-600 transition-colors"
                style={{ color: 'var(--text-light)' }}
              >
                <span>🔒</span>
                <span>Política de privacidad</span>
              </Link>
            </div>
          </div>
        </div>

        {/* JS Easter Egg */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Hecho con{' '}
            <span className="text-red-500 animate-pulse">❤️</span>
            {' '}y mucho JavaScript
          </p>
        </div>
      </div>
    </footer>
  )
}