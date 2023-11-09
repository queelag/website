import type { MDXInstance } from 'astro'

export interface ComponentBlockAttribute {
  name: string
  options?: SelectOption[]
  type: 'color' | 'boolean' | 'enum' | 'json' | 'number' | 'string'
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

export interface RadioButton {
  label?: string
  value: any
}

export interface SelectOption {
  label?: string
  value: any
}
