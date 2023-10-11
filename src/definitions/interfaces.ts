import type { SelectOption } from '@aracna/web'
import type { MDXInstance } from 'astro'

export interface ComponentBlockAttribute {
  name: string
  options?: SelectOption[]
  type: 'color' | 'boolean' | 'enum' | 'number' | 'string'
  visible?: ComponentBlockAttributeVisible
}

export interface ComponentBlockAttributeVisible {
  [key: string]: any[]
}

export interface ComponentBlockVariant {
  label: string
  value: string
}

export interface DocsPageMDXInstance extends MDXInstance<DocsPageMDXInstanceFrontmatter> {}

export interface DocsPageMDXInstanceFrontmatter {
  draft?: boolean
  order?: number
  title: string
}
