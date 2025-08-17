'use client'

import { useState } from 'react'

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
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
            ✅ ¡Gracias por suscribirte!
          </h3>
          <p style={{ color: 'var(--text-light)' }}>
            Recibirás las últimas entradas directamente en tu email.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
          📬 ¡Mantente al día!
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-light)' }}>
          Suscríbete para recibir las últimas entradas directamente en tu email
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu dirección de email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            required
          />
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacy-policy"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
            required
          />
          <label htmlFor="privacy-policy" className="text-sm" style={{ color: 'var(--text-light)' }}>
            Acepto la{' '}
            <a 
              href="/politica-de-privacidad" 
              className="underline"
              style={{ color: 'var(--link-color)' }}
            >
              política de privacidad
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={!email || !privacyAccepted || isSubmitting}
          className="w-full px-6 py-3 text-black font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: 'var(--primary-color)',
            border: '2px solid var(--primary-color)'
          }}
        >
          {isSubmitting ? 'Suscribiendo...' : 'Suscríbete'}
        </button>
      </form>
    </div>
  )
}