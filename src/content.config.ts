import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const DocSchema = z.object({
  draft: z.optional(z.boolean()),
  order: z.optional(z.number()),
  title: z.string()
})

export const collections = {
  core: defineCollection({ loader: glob({ base: './src/content/core', pattern: '**/*.mdx' }), schema: DocSchema }),
  fcm: defineCollection({ loader: glob({ base: './src/content/fcm', pattern: '**/*.mdx' }), schema: DocSchema }),
  icons: defineCollection({ loader: glob({ base: './src/content/icons', pattern: '**/*.mdx' }), schema: DocSchema }),
  react: defineCollection({ loader: glob({ base: './src/content/react', pattern: '**/*.mdx' }), schema: DocSchema }),
  'state-manager': defineCollection({ loader: glob({ base: './src/content/state-manager', pattern: '**/*.mdx' }), schema: DocSchema }),
  web: defineCollection({ loader: glob({ base: './src/content/web', pattern: '**/*.mdx' }), schema: DocSchema })
}
