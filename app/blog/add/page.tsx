'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'
import { addBlogPost } from './actions'

export default function BlogForm() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [content, setContent] = useState('')
  const [currentTag, setCurrentTag] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('title', title)
    formData.append('slug', slug)
    formData.append('tags', JSON.stringify(tags))
    formData.append('content', content)
    if (image) {
      formData.append('image', image)
    }

    const result = await addBlogPost(formData)
    if (result.success) {
      router.push('/blog') // Redirect to blog list or wherever appropriate
    } else {
      alert(result.error)
    }
  }

  const addTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      setTags([...tags, currentTag])
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
      </div>

      <div>
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="tags">Tags</Label>
        <div className="flex space-x-2">
          <Input
            id="tags"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            placeholder="Add a tag"
          />
          <Button type="button" onClick={addTag}>Add Tag</Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full text-sm flex items-center">
              {tag}
              <button type="button" onClick={() => removeTag(tag)} className="ml-1 text-red-500">
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[200px]"
        />
      </div>

      <Button type="submit">Submit Blog Post</Button>
    </form>
  )
}

