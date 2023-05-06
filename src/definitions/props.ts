export interface DocumentationSidebarItemProps {
  active?: boolean
  expanded?: boolean
  href: string
  items?: DocumentationSidebarItemProps[]
  order: number
  title: string
}
