import { defineCollection, z } from 'astro:content'

const DocSchema = z.object({
  draft: z.optional(z.boolean()),
  order: z.optional(z.number()),
  title: z.string()
})

const coreCollection = defineCollection({ schema: DocSchema, type: 'content' })
const fcmCollection = defineCollection({ schema: DocSchema, type: 'content' })
const iconsCollection = defineCollection({ schema: DocSchema, type: 'content' })
const reactCollection = defineCollection({ schema: DocSchema, type: 'content' })
const stateManagerCollection = defineCollection({ schema: DocSchema, type: 'content' })
const webCollection = defineCollection({ schema: DocSchema, type: 'content' })

export const collections = {
  core: coreCollection,
  fcm: fcmCollection,
  icons: iconsCollection,
  react: reactCollection,
  'state-manager': stateManagerCollection,
  web: webCollection
}
