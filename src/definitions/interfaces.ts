import type { MDXInstance } from 'astro'

export interface DocsPageMDXInstance extends MDXInstance<DocsPageMDXInstanceFrontmatter> {}

export interface DocsPageMDXInstanceFrontmatter {
  draft?: boolean
  order?: number
  title: string
}
