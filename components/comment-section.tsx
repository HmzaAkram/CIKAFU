"use client"

import type React from "react"

import { useState } from "react"
import { User, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "April 2, 2025",
    content: "This is a great article! I learned a lot about Next.js and how to get started with it.",
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "April 1, 2025",
    content:
      "Thanks for sharing this comprehensive guide. I've been looking for something like this to help me understand the basics of Next.js.",
  },
]

interface CommentSectionProps {
  postId: number
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const comment = {
      id: comments.length + 1,
      author: "Guest User",
      avatar: "/placeholder.svg?height=40&width=40",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content: newComment,
    }

    setComments([comment, ...comments])
    setNewComment("")
    setIsSubmitting(false)
  }

  return (
    <div className="bg-white dark:bg-navy-950 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6 text-navy-900 dark:text-white">Comments ({comments.length})</h2>

        <form onSubmit={handleSubmit} className="mb-8">
          <Textarea
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px] mb-3"
          />
          <Button
            type="submit"
            className="bg-navy-600 hover:bg-navy-700 text-white"
            disabled={isSubmitting || !newComment.trim()}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Posting...
              </span>
            ) : (
              <span className="flex items-center">
                Post Comment <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>

        <Separator className="my-6" />

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-navy-900 dark:text-white">{comment.author}</h4>
                  <span className="text-xs text-navy-700 dark:text-navy-400">{comment.date}</span>
                </div>
                <p className="text-navy-800 dark:text-navy-300">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

