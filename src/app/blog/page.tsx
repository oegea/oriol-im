import { getAllPosts } from '@/lib/markdown'
import Breadcrumbs from '@/components/Breadcrumbs'
import PostCard from '@/components/PostCardMarkdown'
import BlogClient from '@/components/BlogClient'

// Dynamic posts per page: 10 on page 1 (1 featured + 9 regular), 9 on other pages
const getPostsPerPage = (page: number) => page === 1 ? 10 : 9

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

  // Calculate pagination with dynamic posts per page
  const postsPerPage = getPostsPerPage(currentPage)
  
  // Calculate total pages considering first page has 10 posts, others have 9
  let totalPages = 1
  let remainingPosts = filteredPosts.length
  if (remainingPosts > 10) {
    remainingPosts -= 10 // First page takes 10 posts
    totalPages += Math.ceil(remainingPosts / 9) // Remaining pages take 9 posts each
  }
  
  // Calculate start and end indices
  let startIndex = 0
  if (currentPage === 1) {
    startIndex = 0
  } else {
    startIndex = 10 + (currentPage - 2) * 9 // 10 from first page + (currentPage-2) * 9 from previous pages
  }
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const breadcrumbItems = [
    { label: 'Blog' }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-50"
          >
            Blog
          </h1>
          <p 
            className="text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-300"
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

        {/* Bottom Breadcrumbs */}
        <div className="mt-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
    </div>
  )
}