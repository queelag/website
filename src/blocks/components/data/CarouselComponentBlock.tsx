import MESH_BLUE from '@/assets/meshes/blue.jpeg'
import MESH_MINT from '@/assets/meshes/mint.jpeg'
import MESH_ROSE from '@/assets/meshes/rose.jpeg'
import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import { ICON_F_CHEVRON_LEFT, ICON_F_CHEVRON_RIGHT, ICON_F_PAUSE, ICON_F_PLAY } from '@aracna-icons/feather'
import { omitObjectProperties } from '@aracna/core'
import type { AracnaCarouselProps } from '@aracna/react-components'
import {
  AracnaCarousel,
  AracnaCarouselNextSlideControl,
  AracnaCarouselPreviousSlideControl,
  AracnaCarouselRotationControl,
  AracnaCarouselSlide,
  AracnaCarouselSlides,
  AracnaCarouselTab,
  AracnaCarouselTabs
} from '@aracna/react-components/components/data/carousel'
import type { ImageMetadata } from 'astro'

export function CarouselComponentBlock() {
  const images = [MESH_BLUE, MESH_MINT, MESH_ROSE, MESH_SEANCE]

  return (
    <ComponentBlock
      attributes={[
        { name: 'automatic-rotation', type: 'boolean' },
        { name: 'automatic-rotation-interval-time', type: 'number' },
        { name: 'infinite-rotation', type: 'boolean' },
        { name: 'reverse-rotation', type: 'boolean' }
      ]}
      component={(props: ComponentBlockComponentProps<AracnaCarouselProps>) => (
        <AracnaCarousel {...omitObjectProperties(props, ['_variant'])} className='group not-prose relative w-full h-full'>
          <AracnaCarouselSlides className='relative w-full h-full'>
            {images.map((image: ImageMetadata, index: number) => (
              <AracnaCarouselSlide
                active={index <= 0}
                className='group absolute inset-0 w-full h-full opacity-0 [&[active]]:opacity-100 transition'
                key={image.src}
              >
                <img alt='' className='w-full h-full object-cover rounded' src={image.src} />
              </AracnaCarouselSlide>
            ))}
            <AracnaCarouselRotationControl className='absolute top-2 left-2'>
              <div className='w-6 h-6 flex justify-center items-center rounded backdrop-blur-3xl bg-opacity-25 hover:bg-opacity-75 bg-black transition'>
                <IconFeather className='group-[[live=polite]]:hidden' src={ICON_F_PLAY} stroke='white' />
                <IconFeather className='group-[[live=off]]:hidden' src={ICON_F_PAUSE} stroke='white' />
              </div>
            </AracnaCarouselRotationControl>
            {props._variant === 'buttons' && (
              <div className='absolute top-2 right-2 flex gap-1'>
                <AracnaCarouselPreviousSlideControl className='w-6 h-6 flex justify-center items-center rounded backdrop-blur-3xl bg-opacity-25 hover:bg-opacity-75 bg-black transition'>
                  <IconFeather src={ICON_F_CHEVRON_LEFT} stroke='white' />
                </AracnaCarouselPreviousSlideControl>
                <AracnaCarouselNextSlideControl className='w-6 h-6 flex justify-center items-center rounded backdrop-blur-3xl bg-opacity-25 hover:bg-opacity-75 bg-black transition'>
                  <IconFeather src={ICON_F_CHEVRON_RIGHT} stroke='white' />
                </AracnaCarouselNextSlideControl>
              </div>
            )}
            {props._variant === 'tabs' && (
              <AracnaCarouselTabs className='absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-2'>
                {images.map((image: ImageMetadata, index: number) => (
                  <AracnaCarouselTab
                    active={index <= 0}
                    className='w-3 h-3 rounded-full backdrop-blur-3xl bg-opacity-25 [&[active]]:bg-opacity-75 bg-white transition'
                    key={image.src}
                  />
                ))}
              </AracnaCarouselTabs>
            )}
          </AracnaCarouselSlides>
        </AracnaCarousel>
      )}
      defaultProps={{
        'automatic-rotation': true,
        'infinite-rotation': true
      }}
      variants={[
        { label: 'Buttons', value: 'buttons' },
        { label: 'Tabs', value: 'tabs' }
      ]}
    />
  )
}
