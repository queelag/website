import type { SidebarItemProps } from '@/definitions/props'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down.js'
import { IconFeatherChevronUp } from '@aracna/icons-feather-react/components/chevron-up.js'
import { ComponentLifeCycle, useLifeCycle } from '@aracna/react'
import { useObservable } from '@aracna/state-manager-react'
import { SessionStorage, joinElementClasses } from '@aracna/web'
import { Fragment } from 'react'

export function SidebarItem(props: SidebarItemProps) {
  const life = useLifeCycle()
  const store = useObservable({ active: props.active ?? false, expanded: props.expanded ?? false })
  const expandable = (props.href.match(/\//g)?.length ?? 0) > 1

  if (life.current === ComponentLifeCycle.CONSTRUCTED) {
    // SessionStorage.copy(props.href, store)
  }

  const onClick = () => {
    if (!props.items) {
      return
    }

    if (!expandable) {
      return
    }

    store.expanded = !store.expanded
    SessionStorage.set(props.href, store, ['expanded'])
  }

  return (
    <div className='flex flex-col font-medium'>
      <a
        className={joinElementClasses('flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:bg-slate-700', props.active && 'bg-slate-800')}
        href={props.items ? undefined : props.href}
        onClick={onClick}
      >
        <span className='flex items-center gap-2'>
          <span>{props.title}</span>
        </span>
        {props.items && expandable && (
          <Fragment>{store.expanded ? <IconFeatherChevronUp stroke='white' /> : <IconFeatherChevronDown stroke='white' />}</Fragment>
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
