import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Sample blog post data for recent posts
const recentPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "April 1, 2025",
    image: "/placeholder.svg?height=60&width=60",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    date: "March 28, 2025",
    image: "/placeholder.svg?height=60&width=60",
    slug: "mastering-tailwind-css",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    date: "March 25, 2025",
    image: "/placeholder.svg?height=60&width=60",
    slug: "future-of-web-development",
  },
]

// Sample categories
const categories = [
  { name: "Development", count: 12, slug: "development" },
  { name: "Design", count: 8, slug: "design" },
  { name: "Technology", count: 10, slug: "technology" },
  { name: "Accessibility", count: 5, slug: "accessibility" },
  { name: "Performance", count: 7, slug: "performance" },
]

// Sample tags
const tags = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "CSS",
  "Tailwind",
  "UI/UX",
  "Web Design",
  "Frontend",
  "Backend",
]

export default function Sidebar() {
  return (
    <aside className="md:w-1/3 space-y-8">
      {/* Search Widget */}
      <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-900 dark:text-white">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-600 dark:text-navy-300" />
          <Input type="search" placeholder="Search posts..." className="w-full pl-10" />
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-900 dark:text-white">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-start gap-3 group">
              <div className="relative h-[60px] w-[60px] rounded-md overflow-hidden flex-shrink-0">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium text-navy-900 dark:text-navy-100 group-hover:text-navy-700 dark:group-hover:text-navy-300 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-navy-700 dark:text-navy-400 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-900 dark:text-white">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center justify-between text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-navy-100 text-navy-900 dark:bg-navy-800 dark:text-navy-100 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Widget */}
      <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-navy-900 dark:text-white">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-navy-100 text-navy-800 dark:bg-navy-800 dark:text-navy-100 text-xs px-3 py-1.5 rounded-full hover:bg-navy-200 dark:hover:bg-navy-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-2 text-navy-900 dark:text-white">Newsletter</h3>
        <p className="text-navy-800 dark:text-navy-300 text-sm mb-4">
          Subscribe to our newsletter to get the latest updates.
        </p>
        <div className="space-y-3">
          <Input type="email" placeholder="Your email address" className="w-full" />
          <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white">Subscribe</Button>
        </div>
      </div>
    </aside>
  )
}

