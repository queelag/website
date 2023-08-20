import type { EmbedOptions, OpenOptions, Project } from '@stackblitz/sdk'
import type { CodeRuntimeTemplate } from './types'

export interface SidebarItemProps {
  active?: boolean
  expanded?: boolean
  href: string
  items?: SidebarItemProps[]
  order: number
  title: string
}

export interface StackBlitzProps extends Partial<Omit<Project, 'template'>>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: EmbedOptions | OpenOptions
  template: CodeRuntimeTemplate
  type: 'embed' | 'open'
}
