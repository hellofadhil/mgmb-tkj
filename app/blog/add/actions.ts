'use server'

import { revalidatePath } from 'next/cache'

export async function addBlogPost(formData: FormData) {
  try {
    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const tags = JSON.parse(formData.get('tags') as string)
    const content = formData.get('content') as string
    const image = formData.get('image') as File | null

    // Here you would typically save the blog post to your database
    // For this example, we'll just log the data
    console.log({ title, slug, tags, content, image })

    // Revalidate the blog list page
    revalidatePath('/blog')

    return { success: true }
  } catch (error) {
    console.error('Failed to add blog post:', error)
    return { success: false, error: 'Failed to add blog post' }
  }
}

