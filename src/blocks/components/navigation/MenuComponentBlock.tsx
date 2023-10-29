import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import type { AracnaMenuItemProps, AracnaMenuProps } from '@aracna/react'
import { AracnaMenu, AracnaMenuItem } from '@aracna/react-components/components/navigation/menu'
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
  return <AracnaMenuItem {...props}>{props.items && props.items.map((item) => <MenuItem key={item.href} {...item} />)}</AracnaMenuItem>
}

export function MenuComponentBlock() {
  return (
    <ComponentBlock
      attributes={[]}
      component={(props: ComponentBlockComponentProps<AracnaMenuProps>) => (
        <AracnaMenu {...props}>
          {props._variant === 'bar' && (
            <Fragment>
              {BAR_ITEMS.map((item) => (
                <AracnaMenuItem key={item.href} {...item}></AracnaMenuItem>
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
