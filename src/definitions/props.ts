import type { EmbedOptions, OpenOptions, Project } from '@stackblitz/sdk'
import type { ReactNode } from 'react'
import type { CodeRuntimeTemplate } from './types'

export interface CodeWindowButton {
  icon: any
  onClick: () => any
}

export interface CodeWindowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeFile?: string
  buttons?: CodeWindowButton[]
  children?: ReactNode
  files?: Record<string, string>
  language?: string
}

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
