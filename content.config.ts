import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      // Define custom schema for docs collection
      schema: z.object({
        id: z.number(),
        image: z.string(),
        date: z.date(),
        description: z.string(),
        title: z.string(),
      })
    })
  }
})
