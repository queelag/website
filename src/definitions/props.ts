export interface SidebarItemProps {
  active?: boolean
  expanded?: boolean
  href: string
  items?: SidebarItemProps[]
  order: number
  title: string
}
