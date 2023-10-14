import type { SidebarItemProps } from '@/definitions/props'
import type { StorageItem } from '@aracna/core'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down'
import { IconFeatherChevronUp } from '@aracna/icons-feather-react/components/chevron-up'
import { useObservable } from '@aracna/state-manager-react'
import { SessionStorage, joinElementClasses } from '@aracna/web'
import { useMemo } from 'react'

export function SidebarItem(props: SidebarItemProps) {
  const isExpanded = (): boolean => {
    let item: StorageItem | Error

    if (props.expanded) {
      return true
    }

    item = SessionStorage.get(props.href)
    if (item instanceof Error) return false

    return item.expanded
  }

  const store = useObservable({ active: props.active ?? false, expanded: isExpanded() })
  const expandable = useMemo(() => props.items?.length !== 0, [props.items])

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
    <div className={'flex flex-col gap-px font-medium'}>
      <a
        className={joinElementClasses('flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:bg-slate-700', props.active && 'bg-slate-800')}
        href={props.items ? undefined : props.href}
        onClick={onClick}
      >
        <span className='flex items-center gap-2'>
          <span className='text-sm'>{props.title}</span>
        </span>
        {props.items && expandable && (
          <div className='flex w-4 h-4 justify-center items-center rounded bg-slate-800'>
            {store.expanded ? <IconFeatherChevronUp size={12} stroke='white' /> : <IconFeatherChevronDown size={12} stroke='white' />}
          </div>
        )}
      </a>
      {props.items && store.expanded && (
        <div className='flex flex-col gap-px ml-3'>
          {props.items.map((props: SidebarItemProps, index: number) => (
            <SidebarItem {...props} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
