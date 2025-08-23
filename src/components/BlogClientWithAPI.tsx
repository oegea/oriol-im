'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getPostsWithPagination, PostsResponse } from '@/lib/posts'
import { PostSummary } from '@/types/post'
import PostCard from '@/components/PostCardMarkdown'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'

const POSTS_PER_PAGE = 9

export default function BlogClientWithAPI() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [data, setData] = useState<PostsResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const searchQuery = searchParams.get('search') || ''
  const currentPage = parseInt(searchParams.get('page') || '1', 10)

  // Fetch posts whenever URL params change
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const result = await getPostsWithPagination(currentPage, POSTS_PER_PAGE, searchQuery)
        setData(result)
      } catch (err) {
        setError('Error loading posts')
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, searchQuery])

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (query.trim()) {
      params.set('search', query.trim())
    } else {
      params.delete('search')
    }
    params.delete('page') // Reset page when searching
    router.push(`/blog?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page > 1) {
      params.set('page', page.toString())
    } else {
      params.delete('page')
    }
    router.push(`/blog?${params.toString()}`)
  }

  const handleClearSearch = () => {
    router.push('/blog')
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
        <p className="mt-4 text-gray-600">Cargando posts...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-yellow-600 hover:text-yellow-700 font-medium"
        >
          Reintentar
        </button>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se pudieron cargar los posts</p>
      </div>
    )
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

      {/* Results info */}
      <div className="mb-8">
        <p className="text-sm text-gray-600">
          {data.searchQuery ? (
            <>
              Mostrando {data.pagination.totalPosts} resultado{data.pagination.totalPosts !== 1 ? 's' : ''} para "{data.searchQuery}"
            </>
          ) : (
            <>
              Mostrando {data.pagination.totalPosts} post{data.pagination.totalPosts !== 1 ? 's' : ''} en total
            </>
          )}
        </p>
      </div>

      {/* Posts Grid */}
      {data.posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {data.searchQuery ? 
              `No se encontraron posts que coincidan con "${data.searchQuery}"` :
              'No hay posts disponibles'
            }
          </p>
          {data.searchQuery && (
            <button
              onClick={handleClearSearch}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Ver todos los posts
            </button>
          )}
        </div>
      )}

      {/* Pagination */}
      <Pagination 
        currentPage={data.pagination.currentPage}
        totalPages={data.pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}