'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { PostSummary } from '@/types/post'
import PostCard from '@/components/PostCardMarkdown'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'

interface BlogClientProps {
  allPosts: PostSummary[]
  currentPosts: PostSummary[]
  filteredPosts: PostSummary[]
  currentPage: number
  totalPages: number
  searchQuery: string
}

export default function BlogClient({ 
  allPosts, 
  currentPosts, 
  filteredPosts, 
  currentPage, 
  totalPages, 
  searchQuery 
}: BlogClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    if (query.trim()) {
      params.set('search', query.trim())
    } else {
      params.delete('search')
    }
    params.delete('page') // Reset page when searching
    router.push(`/blog?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString() || '')
    if (page > 1) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    router.replace(`/blog?${params.toString()}`, { scroll: false })
  }

  const handleClearSearch = () => {
    router.push('/blog')
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Buscar por título, contenido, categoría..."
        />
      </div>

      {/* Results info and Top Pagination in same line */}
      <div className="flex items-center justify-between mb-6 gap-4 min-h-[40px]">
        <span className="text-sm text-gray-600 leading-none">
          {searchQuery ? (
            <>
              Mostrando {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} para "{searchQuery}"
            </>
          ) : (
            <>
              Mostrando {allPosts.length} post{allPosts.length !== 1 ? 's' : ''} en total
            </>
          )}
        </span>
        
        {/* Top Pagination - only show if there are multiple pages */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="m-0"
          />
        )}
      </div>

      {/* Posts Grid */}
      {currentPosts.length > 0 ? (
        <div className="space-y-8">
          {/* Featured post - full width card for the first/most recent post - only on page 1 */}
          {currentPage === 1 && currentPosts.length > 0 && (
            <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <PostCard post={currentPosts[0]} featured={true} />
            </div>
          )}
          
          {/* Regular grid for posts */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(currentPage === 1 ? currentPosts.slice(1) : currentPosts).map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in-up"
                style={{ 
                  animationDelay: `${(currentPage === 1 ? index + 1 : index) * 100}ms`,
                }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchQuery ? 
              `No se encontraron posts que coincidan con "${searchQuery}"` :
              'No hay posts disponibles'
            }
          </p>
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Ver todos los posts
            </button>
          )}
        </div>
      )}

      {/* Bottom Results info and Pagination - same structure as top */}
      <div className="flex items-center justify-between mt-12 gap-4 min-h-[40px]">
        <span className="text-sm text-gray-600 leading-none">
          {searchQuery ? (
            <>
              Mostrando {filteredPosts.length} resultado{filteredPosts.length !== 1 ? 's' : ''} para "{searchQuery}"
            </>
          ) : (
            <>
              Mostrando {allPosts.length} post{allPosts.length !== 1 ? 's' : ''} en total
            </>
          )}
        </span>
        
        {/* Bottom Pagination - only show if there are multiple pages */}
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="m-0"
          />
        )}
      </div>
    </>
  )
}