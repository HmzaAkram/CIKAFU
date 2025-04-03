import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
  featured?: boolean
}

interface FeaturedPostsProps {
  posts: Post[]
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (!posts.length) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`group overflow-hidden rounded-xl bg-white dark:bg-navy-950 shadow-md transition-transform hover:-translate-y-1 ${
            index === 0 ? "md:col-span-2 md:row-span-2" : ""
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-48"} w-full`}>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center text-xs mb-2">
                  <span className="bg-navy-600 px-2 py-1 rounded-md">{post.category}</span>
                </div>
                <h3 className={`font-bold mb-2 ${index === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>{post.title}</h3>
                <div className="flex items-center text-xs text-gray-200 space-x-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

