import { AracnaLogo } from '@/components/AracnaLogo'
import { OverlayController } from '@/controllers/overlay-controller'
import type { NavigationItem } from '@/definitions/interfaces'
import type { StorageItem } from '@aracna/core'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down'
import { IconFeatherChevronUp } from '@aracna/icons-feather-react/components/chevron-up'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { AracnaDialog } from '@aracna/react-components/components/feedback/dialog'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { useObservable, useObserver } from '@aracna/state-manager-react'
import { SessionStorage, jec } from '@aracna/web'
import { useMemo } from 'react'
import { createPortal } from 'react-dom'
import './OverlayMobileNavigation.css'

interface Props {
  items: NavigationItem[]
}

export function OverlayMobileNavigation(props: Props) {
  const onClose = () => {
    OverlayController.hide('mobile-navigation')
  }

  return useObserver(() =>
    createPortal(
      <AracnaDialog
        id='mobile-navigation'
        onDialogClose={onClose}
        visible={OverlayController.isVisible('mobile-navigation')}
        click-outside-deactivates
        lock-body-scroll
      >
        <div className='flex justify-between items-center px-6 pt-6'>
          <a className='outline-none' href='/'>
            <AracnaLogo hasText />
          </a>
          <IconFeatherX onClick={onClose} size={24} stroke='white' stroke-width={2} />
        </div>
        <div className='flex flex-col px-4 overflow-y-auto'>
          {props.items.map((item: NavigationItem) => (
            <Item {...item} key={item.slug} />
          ))}
        </div>
      </AracnaDialog>,
      document.body
    )
  )
}

export function Item(props: NavigationItem) {
  const isExpanded = (): boolean => {
    let item: StorageItem | Error

    item = SessionStorage.get(props.slug)
    if (item instanceof Error) return false

    return item.expanded ?? location.pathname.startsWith(props.slug)
  }

  const store = useObservable({ active: props.slug === location.pathname.replace(/\/$/, ''), expanded: isExpanded() })
  const expandable = useMemo(() => props.items?.length !== 0, [props.items])

  const onClick = () => {
    if (!props.items) {
      return
    }

    if (!expandable) {
      return
    }

    store.expanded = !store.expanded
    SessionStorage.set(props.slug, store, ['expanded'])
  }

  return (
    <div className={'flex flex-col gap-px font-medium'}>
      <a
        className={jec(
          'group flex justify-between items-center px-2 py-1 rounded cursor-pointer',
          'transition hover:bg-slate-700',
          store.active && 'bg-slate-800'
        )}
        href={props.items ? undefined : props.slug}
        onClick={onClick}
      >
        <span className='flex items-center gap-2'>
          <span>{props.title}</span>
        </span>
        {props.items && expandable && (
          <AracnaButton shape='squircle' size={16}>
            <div className='w-full h-full flex justify-center items-center transition bg-slate-800 group-hover:bg-black'>
              {store.expanded ? (
                <IconFeatherChevronUp size={10} stroke='white' stroke-width={3} />
              ) : (
                <IconFeatherChevronDown className='-mb-[1px]' size={10} stroke='white' stroke-width={3} />
              )}
            </div>
          </AracnaButton>
        )}
      </a>
      {props.items && store.expanded && (
        <div className='flex flex-col gap-px ml-3'>
          {props.items.map((props: NavigationItem, index: number) => (
            <Item {...props} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
