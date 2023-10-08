import type { MDXInstance } from 'astro'

export interface ComponentBlockAttribute {
  name: string
  type: 'color' | 'boolean' | 'enum' | 'number' | 'string'
  values?: string[]
  visible?: ComponentBlockAttributeVisible
}

export interface ComponentBlockAttributeVisible {
  [key: string]: any[]
}

export interface DocsPageMDXInstance extends MDXInstance<DocsPageMDXInstanceFrontmatter> {}

export interface DocsPageMDXInstanceFrontmatter {
  draft?: boolean
  order?: number
  title: string
}
