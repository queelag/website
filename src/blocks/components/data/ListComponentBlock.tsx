import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaListProps } from '@aracna/react'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'
import { AracnaImage } from '@aracna/react-components/components/data/image'
import { AracnaList, AracnaListItem } from '@aracna/react-components/components/data/list'
import { joinElementClasses, type ListItemElementAttributes } from '@aracna/web'

interface Item extends ListItemElementAttributes {
  headline: string
  text: string
}

const ITEMS: Item[] = [
  {
    headline: 'New Product Launch',
    'leading-image': MESH_BLUE.src,
    text: 'We are excited to announce the launch of our new product line. Check it out now!'
  },
  {
    headline: 'Upcoming Event',
    'leading-image': MESH_MINT.src,
    text: 'Join us for our upcoming event on the latest trends in technology. Register now to secure your spot!'
  },
  {
    headline: 'Customer Testimonial',
    'leading-image': MESH_ROSE.src,
    text: 'We are thrilled to receive such positive feedback from our customers. Read their testimonials now!'
  },
  {
    headline: 'Industry News',
    'leading-image': MESH_SEANCE.src,
    text: 'Stay up-to-date with the latest news and trends in the industry. Read our latest articles now!'
  }
]

export function ListComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'items', type: 'json' }]}
      component={(props: AracnaListProps) => (
        <AracnaList {...props} className='w-full flex flex-col gap-2'>
          {props.items?.map((item: Item) => (
            <AracnaListItem
              className={joinElementClasses('flex items-center p-3 gap-3 cursor-pointer transition rounded border-2 border-slate-800', 'hover:bg-slate-900')}
              key={item.headline}
            >
              <AracnaAvatar shape='circle' size={32}>
                <AracnaImage size={32} src={item['leading-image']} />
              </AracnaAvatar>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-sm text-white'>{item.headline}</span>
                <span className='line-clamp-1 text-xs text-slate-400'>{item.text}</span>
              </div>
            </AracnaListItem>
          ))}
        </AracnaList>
      )}
      defaultProps={{
        items: JSON.stringify(ITEMS)
      }}
    />
  )
}
