import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaTabsProps } from '@aracna/react'
import { AracnaImage } from '@aracna/react-components'
import { AracnaTabs, AracnaTabsTab } from '@aracna/react-components/components/navigation/tabs'
import type { ImageMetadata } from 'astro'
import { useState } from 'react'

interface Tab {
  headline: string
  image: ImageMetadata
}

const TABS: Tab[] = [
  {
    headline: 'Blue',
    image: MESH_BLUE
  },
  {
    headline: 'Mint',
    image: MESH_MINT
  },
  {
    headline: 'Rose',
    image: MESH_ROSE
  },
  {
    headline: 'Seance',
    image: MESH_SEANCE
  }
]

export function TabsComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'tabs', type: 'json' }]}
      component={(props: AracnaTabsProps<Tab>) => {
        const [selected, setSelected] = useState(props.tabs?.[0].headline)

        return (
          <AracnaTabs {...props} className='w-64 flex flex-col gap-3'>
            <div className='flex rounded border-2 divide-x-2 divide-slate-800 border-slate-800'>
              {props.tabs?.map((tab: Tab) => (
                <AracnaTabsTab
                  key={tab.headline}
                  className='flex-1 justify-center p-3 transition hover:bg-slate-900 aria-selected:bg-slate-900'
                  onClick={() => setSelected(tab.headline)}
                  selected={tab.headline === selected}
                >
                  <span className='font-medium text-xs text-white'>{tab.headline}</span>
                </AracnaTabsTab>
              ))}
            </div>
            <AracnaImage className='w-full h-64 rounded' src={props.tabs?.find((tab: Tab) => tab.headline === selected)?.image.src} />
          </AracnaTabs>
        )
      }}
      defaultProps={{ tabs: JSON.stringify(TABS) as any }}
    />
  )
}
