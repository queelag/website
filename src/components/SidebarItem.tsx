import { QIcon } from '@queelag/react-components/components/data/Icon'
import { useObservable } from '@queelag/state-manager-react'
import { joinElementClasses } from '@queelag/web'
import type { SidebarItemProps } from '../definitions/props'

export function SidebarItem(props: SidebarItemProps) {
  const store = useObservable({ active: props.active ?? false, expanded: props.expanded ?? false })

  const onClick = () => {
    if (!props.items) {
      return
    }

    store.expanded = !store.expanded
  }

  return (
    <div className='flex flex-col text-sm'>
      <a
        className={joinElementClasses('flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:bg-slate-800', props.active && 'bg-slate-900')}
        href={props.items ? undefined : props.href}
        onClick={onClick}
      >
        <span>{props.title}</span>
        {props.items && (
          <QIcon
            fill='none'
            size={16}
            src={
              store.expanded
                ? 'https://raw.githubusercontent.com/feathericons/feather/master/icons/chevron-up.svg'
                : 'https://raw.githubusercontent.com/feathericons/feather/master/icons/chevron-down.svg'
            }
            stroke='white'
            stroke-width={2}
          />
        )}
      </a>
      {props.items && store.expanded && (
        <div className='flex flex-col ml-2'>
          {props.items.map((props: SidebarItemProps, index: number) => (
            <SidebarItem {...props} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
