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
    // For 5 or fewer pages, show all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // For more than 5 pages, use smart truncation
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

  const getMobileVisiblePages = () => {
    // For 5 or fewer pages, show all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // For mobile with many pages, show: [prev] [current] [next] and optionally first/last
    const pages = []
    
    // Always include current page
    pages.push(currentPage)
    
    // Add previous page if exists
    if (currentPage > 1) {
      pages.unshift(currentPage - 1)
    }
    
    // Add next page if exists  
    if (currentPage < totalPages) {
      pages.push(currentPage + 1)
    }

    // Add first page if not already included and there's a gap (more than 1 page gap)
    if (!pages.includes(1) && currentPage > 3) {
      pages.unshift(1, '...')
    } else if (!pages.includes(1)) {
      pages.unshift(1)
    }

    // Add last page if not already included and there's a gap (more than 1 page gap)
    if (!pages.includes(totalPages) && currentPage < totalPages - 2) {
      pages.push('...', totalPages)
    } else if (!pages.includes(totalPages)) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <nav className={className || 'mt-12'}>
      {/* Desktop/Tablet version */}
      <div className="hidden sm:flex items-center justify-start space-x-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 pagination-glassmorphism"
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
                      : 'text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 pagination-glassmorphism'
                  }`}
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
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 pagination-glassmorphism"
        >
          Siguiente
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Mobile version - adaptive design */}
      <div className="flex sm:hidden items-center justify-center space-x-1">
        {/* Previous button - compact */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 pagination-glassmorphism"
          aria-label="Página anterior"
        >
          <ChevronLeft size={14} />
        </button>

        {/* Page numbers - adaptive based on total pages */}
        <div className="flex items-center space-x-1">
          {getMobileVisiblePages().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="text-xs text-gray-400 px-1">...</span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={`flex items-center justify-center w-8 h-8 text-xs font-medium rounded-lg transition-all duration-300 ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg font-bold'
                      : 'text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 pagination-glassmorphism'
                  }`}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Next button - compact */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-8 h-8 text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 pagination-glassmorphism"
          aria-label="Página siguiente"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </nav>
  )
}