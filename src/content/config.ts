import { defineCollection, z } from 'astro:content'

const DocSchema = z.object({
  draft: z.optional(z.boolean()),
  order: z.optional(z.number()),
  title: z.string()
})

export const collections = {
  core: defineCollection({ schema: DocSchema, type: 'content' }),
  fcm: defineCollection({ schema: DocSchema, type: 'content' }),
  icons: defineCollection({ schema: DocSchema, type: 'content' }),
  react: defineCollection({ schema: DocSchema, type: 'content' }),
  'state-manager': defineCollection({ schema: DocSchema, type: 'content' }),
  web: defineCollection({ schema: DocSchema, type: 'content' })
}
