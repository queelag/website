import type { SidebarItemProps } from '@/definitions/props'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down.js'
import { IconFeatherChevronUp } from '@aracna/icons-feather-react/components/chevron-up.js'
import { IconFeatherCpu } from '@aracna/icons-feather-react/components/cpu.js'
import { IconFeatherGlobe } from '@aracna/icons-feather-react/components/globe.js'
import { IconFeatherHome } from '@aracna/icons-feather-react/components/home.js'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import { ComponentLifeCycle, useLifeCycle } from '@aracna/react'
import { useObservable } from '@aracna/state-manager-react'
import { SessionStorage, joinElementClasses } from '@aracna/web'
import { Fragment, useMemo } from 'react'
import { IconReact } from 'src/icons/IconReact'

export function SidebarItem(props: SidebarItemProps) {
  const life = useLifeCycle()
  const store = useObservable({ active: props.active ?? false, expanded: props.expanded ?? false })
  const expandable = useMemo(() => props.items?.length !== 0, [props.items])

  if (life.current === ComponentLifeCycle.CONSTRUCTED) {
    SessionStorage.copy(props.href, store)
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

  const renderIcon = () => {
    switch (props.href) {
      case '/':
        return <IconFeatherHome stroke='white' />
      case '/core':
        return <IconFeatherCpu stroke='white' />
      case '/react':
        return <IconReact size={16} stroke='white' />
      case '/state-manager':
        return <IconFeatherZap stroke='white' />
      case '/web':
        return <IconFeatherGlobe stroke='white' />
    }
  }

  const hasIcon = () => {
    return typeof renderIcon() === 'object'
  }

  return (
    <div className={'flex flex-col gap-px font-medium'}>
      <a
        className={joinElementClasses(
          'flex justify-between items-center px-2 py-1 rounded cursor-pointer hover:bg-slate-700',
          !hasIcon() && 'ml-4',
          props.active && 'bg-slate-800'
        )}
        href={props.items ? undefined : props.href}
        onClick={onClick}
      >
        <span className='flex items-center gap-2'>
          {renderIcon()}
          <span>{props.title}</span>
        </span>
        {props.items && expandable && (
          <Fragment>{store.expanded ? <IconFeatherChevronUp stroke='white' /> : <IconFeatherChevronDown stroke='white' />}</Fragment>
        )}
      </a>
      {props.items && store.expanded && (
        <div className='flex flex-col gap-px ml-2'>
          {props.items.map((props: SidebarItemProps, index: number) => (
            <SidebarItem {...props} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
