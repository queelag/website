import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { IconFeatherPause } from '@aracna/icons-feather-react/components/pause.js'
import { IconFeatherPlay } from '@aracna/icons-feather-react/components/play.js'
import {
  AracnaCarousel,
  AracnaCarouselRotationControl,
  AracnaCarouselSlide,
  AracnaCarouselSlides,
  AracnaCarouselTab,
  AracnaCarouselTabs
} from '@aracna/react-components/components/data/carousel.js'
import { ComponentBlock } from '../ComponentBlock'

interface Props {
  type: 'buttons' | 'tabs'
}

export function CarouselComponentBlock(props: Props) {
  const images = [MESH_BLUE, MESH_MINT, MESH_ROSE, MESH_SEANCE]

  return (
    <ComponentBlock
      attributes={[
        { name: 'automatic-rotation', type: 'boolean' },
        { name: 'automatic-rotation-interval-time', type: 'number' },
        { name: 'infinite-rotation', type: 'boolean' },
        { name: 'reverse-rotation', type: 'boolean' }
      ]}
      component={(p) => (
        <AracnaCarousel {...p} className='not-prose relative w-72 aspect-video'>
          <AracnaCarouselSlides className='relative w-full h-full'>
            {images.map((image: string, index: number) => (
              <AracnaCarouselSlide
                active={index <= 0}
                className='group absolute inset-0 w-full h-full opacity-0 [&[active]]:opacity-100 transition'
                key={image}
              >
                <img alt='' className='w-full h-full object-cover rounded' src={image} />
              </AracnaCarouselSlide>
            ))}
            {props.type === 'tabs' && (
              <AracnaCarouselTabs className='absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-2'>
                {images.map((image: string, index: number) => (
                  <AracnaCarouselTab active={index <= 0} className='w-3 h-3 rounded-full border-2 border-black [&[active]]:bg-white transition' key={image} />
                ))}
              </AracnaCarouselTabs>
            )}
            <AracnaCarouselRotationControl className='absolute top-1 left-1'>
              <IconFeatherPause className='aria-[label=Start Automatic Slide Show]:hidden' fill='white' stroke='black' />
              <IconFeatherPlay className='aria-[label=Stop Automatic Slide Show]:hidden' fill='white' stroke='black' />
            </AracnaCarouselRotationControl>
          </AracnaCarouselSlides>
        </AracnaCarousel>
      )}
      defaultProps={{
        'automatic-rotation': true,
        'infinite-rotation': true
      }}
    />
  )
}
