'use client'

import { useState } from 'react'
import { Mail, Check, Loader2 } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !privacyAccepted) return

    setIsSubmitting(true)
    
    // MailerLite integration would go here
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div 
        className="relative backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 p-6 text-center newsletter-success-glassmorphism"
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Check size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            ¡Gracias por suscribirte!
          </h3>
          <p className="text-slate-700 dark:text-slate-200 text-sm">
            Recibirás las últimas entradas directamente en tu email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="relative backdrop-blur-sm rounded-2xl border border-white/30 dark:border-slate-700/30 p-6 newsletter-glassmorphism"
      style={{ 
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-10 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(252,203,11,0.3) 0%, transparent 50%)',
        }}
      />
      
      <div className="relative text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-3">
          <Mail size={20} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
          ¡Mantente al día!
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Recibe las últimas entradas directamente en tu inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 text-slate-900 dark:text-slate-50 placeholder-gray-500 dark:placeholder-gray-400"
            required
          />
        </div>

        <div className="flex items-start space-x-3 relative z-10">
          <input
            type="checkbox"
            id="privacy-checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 text-yellow-400 focus:ring-yellow-400 focus:ring-2 cursor-pointer relative z-20"
            required
          />
          <label htmlFor="privacy-checkbox" className="text-xs text-slate-700 dark:text-slate-200 cursor-pointer relative z-20">
            Acepto la{' '}
            <a 
              href="/politica-de-privacidad" 
              className="text-yellow-600 hover:text-yellow-700 underline transition-colors"
            >
              política de privacidad
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!email || !privacyAccepted || isSubmitting}
          className="group relative w-full px-6 py-3 gradient-primary text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-yellow-400/25"
        >
          <div className="flex items-center justify-center space-x-2">
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Suscribiendo...</span>
              </>
            ) : (
              <span>Suscríbete</span>
            )}
          </div>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 rounded-xl blur-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
        </button>
      </form>
    </div>
  )
}