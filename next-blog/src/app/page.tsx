import { getPosts } from '@/lib/wordpress'
import PostCard from '@/components/PostCard'
import NewsletterForm from '@/components/NewsletterForm'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 
        className="mb-8 text-center"
        style={{ 
          color: 'var(--text-dark)', 
          fontSize: '2rem', 
          fontWeight: 600 
        }}
      >
        Últimas entradas
      </h1>
      
      {/* Newsletter form */}
      <NewsletterForm />
      
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}