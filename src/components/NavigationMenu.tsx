import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down'
import { AracnaMenu, AracnaMenuItem, AracnaMenuSubMenu } from '@aracna/react-components/components/navigation/menu'
import { offset } from '@floating-ui/dom'
import './NavigationMenu.css'

interface Item {
  href?: string
  items?: Item[]
  text: string
}

const ITEMS: Item[] = [
  {
    items: [
      {
        href: '/docs/core/get-started',
        text: 'Core'
      },
      {
        href: '/docs/web/get-started',
        text: 'Web'
      },
      {
        href: '/docs/web-components/get-started',
        text: 'Web Components'
      },
      {
        href: '/docs/react/get-started',
        text: 'React'
      },
      {
        href: '/docs/react-components/get-started',
        text: 'React Components'
      },
      {
        href: '/docs/state-manager/get-started',
        text: 'State Manager'
      },
      {
        href: '/docs/icons-feather/get-started',
        text: 'Feather Icons'
      }
    ],
    text: 'Documentation'
  },
  {
    href: '/about',
    text: 'About'
  }
]

export function NavigationMenu() {
  return (
    <AracnaMenu className='hidden lg:flex gap-6'>
      {ITEMS.map((item: Item) => (
        <MenuItem {...item} key={item.text} />
      ))}
    </AracnaMenu>
  )
}

interface ItemProps extends Item {
  className?: string
}

export function MenuItem(props: ItemProps) {
  return (
    <AracnaMenuItem className={props.className}>
      {typeof props.href === 'string' && (
        <a className='text flex items-center gap-2' href={props.href}>
          <span>{props.text}</span>
          {props.items && <IconFeatherChevronDown size={24} stroke='white' stroke-width={1.5} />}
        </a>
      )}
      {typeof props.href === 'undefined' && (
        <div className='text flex items-center gap-2'>
          <span>{props.text}</span>
          {props.items && <IconFeatherChevronDown size={24} stroke='white' stroke-width={1.5} />}
        </div>
      )}
      {props.items && (
        <AracnaMenuSubMenu
          className='w-64 flex flex-col rounded border-2 divide-y backdrop-blur-2xl bg-opacity-50 transition bg-black border-slate-800 divide-slate-800'
          middlewares={[offset(24)]}
          placement='bottom-end'
        >
          {props.items.map((item: Item) => (
            <MenuItem {...item} className='p-4' key={item.text} />
          ))}
        </AracnaMenuSubMenu>
      )}
    </AracnaMenuItem>
  )
}
