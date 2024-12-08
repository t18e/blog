import Link from 'next/link'
import type { Post } from '@/lib/posts'

export function PostList({ posts }: { posts: Post[] }) {
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, Post[]>)

  const sortedYears = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="space-y-8">
      {sortedYears.map((year) => (
        <section key={year}>
          <h2 className="text-2xl font-bold mb-4">{year}</h2>
          <div className="space-y-4">
            {postsByYear[year]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post) => (
                <article key={post.slug} className="flex justify-between items-center">
                  <div>
                    <Link 
                      href={`/blog/${year}/${post.slug}`}
                      className="text-lg font-medium hover:underline"
                    >
                      {post.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.views?.toLocaleString()} views</span>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

