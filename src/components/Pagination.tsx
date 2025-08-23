'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  return (
    <nav className={`flex items-center justify-start space-x-2 ${className || 'mt-12'}`}>
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <ChevronLeft size={16} className="mr-1" />
        Anterior
      </button>

      {/* Page numbers */}
      <div className="flex items-center space-x-1">
        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-sm text-gray-400">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  page === currentPage
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg'
                    : 'text-gray-600 bg-white/80 backdrop-blur-sm border border-white/30 hover:bg-white/90 hover:text-yellow-600'
                }`}
                style={
                  page !== currentPage
                    ? {
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }
                    : {}
                }
              >
                {page}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        Siguiente
        <ChevronRight size={16} className="ml-1" />
      </button>
    </nav>
  )
}