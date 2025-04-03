"use client"

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

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-navy-950 shadow-md transition-transform hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex-1 p-4">
        <div className="flex items-center text-xs mb-2">
          <Link
            href={`/category/${post.category.toLowerCase()}`}
            className="bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-navy-100 px-2 py-1 rounded-md hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {post.category}
          </Link>
        </div>

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="font-bold text-lg mb-2 text-navy-900 dark:text-white group-hover:text-navy-700 dark:group-hover:text-navy-300 transition-colors">
            {post.title}
          </h3>

          <p className="text-navy-800 dark:text-navy-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center text-xs text-navy-700 dark:text-navy-400 space-x-3 mt-auto">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {post.author}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

