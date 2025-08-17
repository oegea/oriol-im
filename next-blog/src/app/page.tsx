import { getPosts } from '@/lib/wordpress'
import PostCard from '@/components/PostCard'

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Últimas entradas
        </h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}