import Link from "next/link"
import { ArrowRight } from "lucide-react"

import FeaturedPosts from "@/components/featured-posts"
import PostCard from "@/components/post-card"
import Sidebar from "@/components/sidebar"

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "April 1, 2025",
    author: "Jane Doe",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400",
    slug: "getting-started-with-nextjs",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Discover how to create beautiful designs efficiently with Tailwind CSS.",
    date: "March 28, 2025",
    author: "John Smith",
    category: "Design",
    image: "/placeholder.svg?height=200&width=400",
    slug: "mastering-tailwind-css",
    featured: true,
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "March 25, 2025",
    author: "Alex Johnson",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-web-development",
    featured: true,
  },
  {
    id: 4,
    title: "Building Accessible Websites",
    excerpt: "Best practices for creating websites that everyone can use.",
    date: "March 22, 2025",
    author: "Sam Wilson",
    category: "Accessibility",
    image: "/placeholder.svg?height=200&width=400",
    slug: "building-accessible-websites",
  },
  {
    id: 5,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to make your website lightning fast.",
    date: "March 20, 2025",
    author: "Taylor Brown",
    category: "Performance",
    image: "/placeholder.svg?height=200&width=400",
    slug: "optimizing-website-performance",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt: "Why TypeScript is becoming essential for modern web development.",
    date: "March 18, 2025",
    author: "Jamie Lee",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400",
    slug: "introduction-to-typescript",
  },
]

export default function Home() {
  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-navy-900 dark:text-white">Featured Posts</h2>
        <FeaturedPosts posts={featuredPosts} />
      </section>

      <div className="flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Latest Articles</h2>
            <Link
              href="/blog"
              className="flex items-center text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <Sidebar />
      </div>
    </div>
  )
}

