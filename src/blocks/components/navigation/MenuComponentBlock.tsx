import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import type { AracnaMenuItemProps, AracnaMenuProps } from '@aracna/react'
import { AracnaMenu, AracnaMenuItem, AracnaMenuSubMenu } from '@aracna/react-components/components/navigation/menu'
import { joinElementClasses } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import { Fragment } from 'react'

interface Item {
  headline?: string
  href?: string
  items?: Item[]
  text?: string
  [k: PropertyKey]: any
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
        href: '/product-2'
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

function MenuItem(props: AracnaMenuItemProps) {
  return (
    <AracnaMenuItem {...props}>
      <a className='no-underline' href={props.href}>
        {props.headline}
      </a>
      {props.items && (
        <AracnaMenuSubMenu
          className={joinElementClasses('flex flex-col', 'opacity-0 [&[expanded]]:opacity-100')}
          middlewares={[offset(8)]}
          placement='bottom-start'
        >
          {props.items.map((item: Item) => (
            <MenuItem key={item.href} {...item} />
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
        { name: 'collapse-on-mouse-leave', type: 'boolean' }
      ]}
      component={(props: ComponentBlockComponentProps<AracnaMenuProps>) => (
        <AracnaMenu {...props} className='flex gap-4'>
          {props._variant === 'bar' && (
            <Fragment>
              {BAR_ITEMS.map((item) => (
                <MenuItem key={item.href} {...item}></MenuItem>
              ))}
            </Fragment>
          )}
          {props._variant === 'button' && <Fragment></Fragment>}
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
