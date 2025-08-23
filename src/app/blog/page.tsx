import { getAllPosts } from '@/lib/markdown'
import Breadcrumbs from '@/components/Breadcrumbs'
import PostCard from '@/components/PostCardMarkdown'
import BlogClient from '@/components/BlogClient'

const POSTS_PER_PAGE = 9

interface BlogPageProps {
  searchParams: {
    search?: string
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts()
  const searchQuery = searchParams.search || ''
  const currentPage = parseInt(searchParams.page || '1', 10)

  // Filter posts based on search query
  const filteredPosts = searchQuery.trim() 
    ? allPosts.filter(post => {
        const query = searchQuery.toLowerCase()
        return post.title.toLowerCase().includes(query) ||
               post.excerpt.toLowerCase().includes(query) ||
               post.categories?.some(cat => cat.toLowerCase().includes(query)) ||
               post.tags?.some(tag => tag.toLowerCase().includes(query))
      })
    : allPosts

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const breadcrumbItems = [
    { label: 'Blog' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="mb-4 text-4xl font-bold"
            style={{ color: 'var(--text-dark)' }}
          >
            Blog
          </h1>
          <p 
            className="text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ color: 'var(--text-light)' }}
          >
            Todas las entradas del blog sobre desarrollo, tecnología y aprendizajes del día a día.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8" />
        </div>

        {/* Server-side rendered posts with client-side interactivity */}
        <BlogClient 
          allPosts={allPosts}
          currentPosts={currentPosts}
          filteredPosts={filteredPosts}
          currentPage={currentPage}
          totalPages={totalPages}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  )
}