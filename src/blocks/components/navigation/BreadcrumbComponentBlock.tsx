import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeatherChevronRight } from '@aracna/icons-feather-react/components/chevron-right'
import type { AracnaBreadcrumbProps } from '@aracna/react-components'
import { AracnaBreadcrumb, AracnaBreadcrumbItem, AracnaBreadcrumbList } from '@aracna/react-components/components/navigation/breadcrumb'

const ITEMS = [
  { href: '/', text: 'Home' },
  { href: '/web/get-started', text: 'Web' },
  { href: '/web/components/get-started', text: 'Components' },
  { href: '/web/components/navigation/breadcrumb', text: 'Breadcrumb' }
]

export function BreadcrumbComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'items', type: 'json' }]}
      component={(props: AracnaBreadcrumbProps) => (
        <AracnaBreadcrumb {...props}>
          <AracnaBreadcrumbList className='gap-2'>
            {ITEMS.map((item, index) => (
              <AracnaBreadcrumbItem className='flex items-center gap-1' current={item.href === location.pathname} key={item.href}>
                <a className='text-xs no-underline hover:underline aria-[current=page]:italic' href={item.href} suppressHydrationWarning>
                  {item.text}
                </a>
                {index < ITEMS.length - 1 && <IconFeatherChevronRight size={12} stroke='white' />}
              </AracnaBreadcrumbItem>
            ))}
          </AracnaBreadcrumbList>
        </AracnaBreadcrumb>
      )}
      defaultProps={{
        items: JSON.stringify(ITEMS) as any
      }}
    />
  )
}
