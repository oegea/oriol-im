'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      
      setProgress(Math.min(currentProgress, 100))
      setShowBackToTop(currentProgress > 0)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-50 transition-all duration-200"
        style={{
          width: `${progress}%`,
          height: '0.5em',
          backgroundColor: 'var(--primary-color)',
        }}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
          style={{
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          ☝️ Volver arriba ☝️
        </button>
      )}
    </>
  )
}