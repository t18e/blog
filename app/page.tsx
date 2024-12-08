import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-[#111] text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Guillermo Rauch</h1>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-sm hover:underline">About</Link>
            <a href="https://twitter.com/your_twitter" className="text-sm hover:underline">Follow me</a>
          </div>
        </header>
        <div className="grid grid-cols-[auto_1fr_auto] gap-x-8 text-sm">
          <div className="text-zinc-600 mb-4">date</div>
          <div className="text-zinc-600 mb-4">title</div>
          <div className="text-zinc-600 mb-4">views</div>
          
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <div className="font-mono text-zinc-600 py-2">{post.year}</div>
              <div className="py-2">
                <Link href={`/blog/${post.year}/${post.slug}`} className="hover:underline">{post.title}</Link>
              </div>
              <div className="font-mono text-zinc-600 py-2 text-right">{post.views.toLocaleString()}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

