import type { SidebarItemProps } from '../definitions/props'

export function SidebarItem(props: SidebarItemProps) {
  return (
    <div className='flex flex-col'>
      <a href={props.href}>
        <div>{props.title}</div>
      </a>
      {props.items && (
        <div className='flex flex-col ml-2'>
          {props.items.map((props: SidebarItemProps) => (
            <SidebarItem {...props} />
          ))}
        </div>
      )}
    </div>
  )
}
