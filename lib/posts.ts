import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  views: number
  year: string
}

export function getAllPosts(): Post[] {
  const posts: Post[] = []

  // Read all files from the posts directory
  const years = fs.readdirSync(postsDirectory)

  years.forEach(year => {
    const yearPath = path.join(postsDirectory, year)
    if (!fs.statSync(yearPath).isDirectory()) return

    const files = fs.readdirSync(yearPath)

    files.forEach(filename => {
      const filePath = path.join(yearPath, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      posts.push({
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        views: data.views || 0,
        year
      })
    })
  })

  // Sort posts by date (most recent first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

