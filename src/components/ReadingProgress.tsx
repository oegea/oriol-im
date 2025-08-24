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
        className="fixed left-0 z-40 transition-all duration-200"
        style={{
          top: '70px', // Below the header
          width: `${progress}%`,
          height: '3px',
          backgroundColor: 'var(--primary-color)',
          boxShadow: '0 0 10px rgba(252, 203, 11, 0.5)',
        }}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-50 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200 dark:border-slate-700"
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