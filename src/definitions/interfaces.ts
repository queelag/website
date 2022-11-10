import type { MDXInstance } from 'astro'

export interface DocsPageMDXInstance extends MDXInstance<DocsPageMDXInstanceFrontmatter> {}

export interface DocsPageMDXInstanceFrontmatter {
  title: string
}
