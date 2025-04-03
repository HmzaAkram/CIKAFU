import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"

import CommentSection from "@/components/comment-section"
import Sidebar from "@/components/sidebar"

// Sample blog post data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications simple and efficient. In this comprehensive guide, we'll explore the key features that make Next.js stand out and walk through the process of creating your first Next.js application.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li>Server-side rendering for improved performance and SEO</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple client-side routing</li>
        <li>API routes to build your API alongside your app</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Setting Up Your First Project</h2>
      <p>Getting started with Next.js is straightforward. You can create a new project using the following command:</p>
      <pre><code>npx create-next-app my-next-app</code></pre>
      
      <p>This command sets up a new Next.js project with all the necessary configurations. Once the installation is complete, navigate to your project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <h2>Understanding the File Structure</h2>
      <p>Next.js uses a file-based routing system. Each file in the pages directory automatically becomes a route. For example:</p>
      <ul>
        <li><code>pages/index.js</code> → <code>/</code></li>
        <li><code>pages/about.js</code> → <code>/about</code></li>
        <li><code>pages/blog/[slug].js</code> → <code>/blog/:slug</code></li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js simplifies the process of building React applications by providing a structured framework with powerful features out of the box. Whether you're building a simple blog or a complex web application, Next.js offers the tools you need to create fast, SEO-friendly, and user-friendly experiences.</p>
    `,
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "April 1, 2025",
    author: "Jane Doe",
    category: "Development",
    image: "/placeholder.svg?height=400&width=800",
    slug: "getting-started-with-nextjs",
    featured: true,
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <article className="md:w-2/3">
          <Link
            href="/"
            className="inline-flex items-center text-navy-800 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-64 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <h1 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">{post.title}</h1>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-navy-800 dark:text-navy-300">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  <Link
                    href={`/category/${post.category.toLowerCase()}`}
                    className="hover:text-navy-900 dark:hover:text-white transition-colors"
                  >
                    {post.category}
                  </Link>
                </div>
              </div>

              <div
                className="prose prose-navy dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          <CommentSection postId={post.id} />
        </article>

        <Sidebar />
      </div>
    </div>
  )
}

