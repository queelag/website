import { ComponentBlock } from '@/blocks/ComponentBlock'
import { ICON_F_FILM } from '@aracna/icons-feather/assets/film'
import { ICON_F_GLOBE } from '@aracna/icons-feather/assets/globe'
import { ICON_F_STAR } from '@aracna/icons-feather/assets/star'
import { ICON_F_TRENDING_UP } from '@aracna/icons-feather/assets/trending-up'
import type { AracnaNavigationBarProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components'
import { AracnaNavigationBar, AracnaNavigationBarItem } from '@aracna/react-components/components/navigation/navigation-bar'
import { useState } from 'react'

interface Item {
  icon: string
  text: string
}

const ITEMS: Item[] = [
  {
    icon: ICON_F_FILM,
    text: 'Movies'
  },
  {
    icon: ICON_F_GLOBE,
    text: 'Global'
  },
  {
    icon: ICON_F_STAR,
    text: 'Favorites'
  },
  {
    icon: ICON_F_TRENDING_UP,
    text: 'Trending'
  }
]

export function NavigationBarComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'items', type: 'json' }]}
      component={(props: AracnaNavigationBarProps) => {
        const [active, setActive] = useState<string>(props.items?.[0].text)

        return (
          <AracnaNavigationBar {...props} className='flex px-6 pt-5 pb-4 gap-6 rounded bg-slate-800'>
            {props.items?.map((item: Item) => (
              <AracnaNavigationBarItem
                active={item.text === active}
                key={item.text}
                className='cursor-pointer rounded transition hover:ring-8 hover:bg-slate-700 [&[active]]:ring-8 [&[active]]:bg-slate-700 ring-slate-700'
                onClick={() => setActive(item.text)}
              >
                <div className='flex flex-col items-center gap-1'>
                  <AracnaIcon fill='none' size={16} src={item.icon} stroke='white' stroke-width={2} />
                  <span className='text-xs font-medium'>{item.text}</span>
                </div>
              </AracnaNavigationBarItem>
            ))}
          </AracnaNavigationBar>
        )
      }}
      defaultProps={{
        items: JSON.stringify(ITEMS) as any
      }}
    />
  )
}
