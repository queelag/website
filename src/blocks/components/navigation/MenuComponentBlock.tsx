import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import { omitObjectProperties } from '@aracna/core'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down'
import { IconFeatherChevronRight } from '@aracna/icons-feather-react/components/chevron-right'
import { useObservableElementComponent } from '@aracna/react'
import { type AracnaMenuItemProps, type AracnaMenuProps } from '@aracna/react-components'
import { AracnaMenu, AracnaMenuButton, AracnaMenuItem, AracnaMenuSubMenu } from '@aracna/react-components/components/navigation/menu'
import { jec } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import { Fragment, useMemo } from 'react'

interface Item {
  headline?: string
  href?: string
  items?: Item[]
  text?: string
}

const BAR_ITEMS: Item[] = [
  {
    headline: 'Home',
    href: '/'
  },
  {
    headline: 'Products',
    items: [
      {
        headline: 'Product 1',
        href: '/product-1'
      },
      {
        headline: 'Product 2',
        href: '/product-2',
        items: [
          {
            headline: 'Product 2.1',
            href: '/product-2-1'
          },
          {
            headline: 'Product 2.2',
            href: '/product-2-2'
          },
          {
            headline: 'Product 2.3',
            href: '/product-2-3'
          }
        ]
      },
      {
        headline: 'Product 3',
        href: '/product-3'
      }
    ]
  },
  {
    headline: 'About Us',
    href: '/about-us'
  },
  {
    headline: 'Contact Us',
    href: '/contact-us'
  }
]

const BUTTON_ITEMS: Item[] = BAR_ITEMS[1].items ?? []

function MenuItem(props: AracnaMenuItemProps & { deep?: boolean }) {
  const { element, ref } = useObservableElementComponent<'aracna-menu-item'>()
  const deep = useMemo(() => props.deep ?? element?.deep, [element?.deep, props.deep])
  const shallow = useMemo(() => !deep, [deep])

  return (
    <AracnaMenuItem
      {...omitObjectProperties(props, ['deep'])}
      className={jec(
        'p-3 outline-none transition [&[depth="0"]]:rounded',
        '[&[focused]]:bg-slate-900 [&[depth="0"]]:[&[focused]]:bg-slate-800',
        '[&[submenu-expanded]]:bg-slate-900 [&[depth="0"]]:[&[submenu-expanded]]:bg-slate-800'
      )}
      ref={ref}
    >
      <a className='w-full flex justify-between items-center gap-2 no-underline outline-none text-xs' suppressHydrationWarning>
        <span>{props.headline}</span>
        {props.items && (
          <Fragment>
            {shallow && <IconFeatherChevronDown size={12} stroke='white' stroke-width={3} />}
            {deep && <IconFeatherChevronRight size={12} stroke='white' stroke-width={3} />}
          </Fragment>
        )}
      </a>
      {props.items && (
        <AracnaMenuSubMenu
          className={jec(
            'w-48 flex flex-col rounded border-2 divide-y-2 divide-slate-800 border-slate-800 bg-black',
            'pointer-events-none [&[expanded]]:pointer-events-auto opacity-0 [&[expanded]]:opacity-100'
          )}
          middlewares={[offset(8)]}
          placement={shallow ? 'bottom-start' : 'right-start'}
        >
          {props.items.map((item: Item) => (
            <MenuItem key={item.headline} {...item} />
          ))}
        </AracnaMenuSubMenu>
      )}
    </AracnaMenuItem>
  )
}

export function MenuComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'collapse-debounce-time', type: 'number' },
        { name: 'collapse-on-mouse-leave', type: 'boolean' },
        { name: 'expand-on-mouse-enter', type: 'boolean' },
        { name: 'typeahead-debounce-time', type: 'number' }
        // { name: 'typeahead-function', type: 'function' },
      ]}
      component={(props: ComponentBlockComponentProps<AracnaMenuProps>) => (
        <AracnaMenu {...props} className='flex'>
          {props._variant === 'bar' && (
            <Fragment>
              {BAR_ITEMS.map((item) => (
                <MenuItem key={item.headline} {...item}></MenuItem>
              ))}
            </Fragment>
          )}
          {props._variant === 'button' && (
            <Fragment>
              <AracnaMenuButton
                className={jec(
                  'w-64 flex justify-between items-center p-3 rounded transition border-2 border-slate-800',
                  'hover:border-slate-700 focus:border-slate-700 aria-expanded:border-slate-700 focus:outline-none'
                )}
              >
                <span className='text-xs font-medium text-white'>Products</span>
                <IconFeatherChevronDown size={12} stroke='white' stroke-width={3} />
              </AracnaMenuButton>
              <AracnaMenuSubMenu
                className={jec(
                  'w-64 flex flex-col rounded border-2 divide-y-2 divide-slate-800 border-slate-800 bg-black',
                  'pointer-events-none [&[expanded]]:pointer-events-auto opacity-0 [&[expanded]]:opacity-100'
                )}
                middlewares={[offset(8)]}
                placement='bottom-start'
              >
                {BUTTON_ITEMS.map((item) => (
                  <MenuItem key={item.headline} deep {...item} />
                ))}
              </AracnaMenuSubMenu>
            </Fragment>
          )}
        </AracnaMenu>
      )}
      defaultProps={{}}
      variants={[
        { label: 'Bar', value: 'bar' },
        { label: 'Button', value: 'button' }
      ]}
    />
  )
}
