import MESH_SEANCE from '@/assets/meshes/seance.jpeg'
import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaImageProps } from '@aracna/react'
import { AracnaImage } from '@aracna/react-components/components/data/image'
import colors from 'tailwindcss/colors'

export function ImageComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'alt', type: 'string' },
        { name: 'cache', type: 'boolean' },
        { name: 'cache-quality', type: 'number' },
        {
          name: 'cache-type',
          options: [
            { label: 'jpeg', value: 'image/jpeg' },
            { label: 'png', value: 'image/png' },
            { label: 'webp', value: 'image/webp' }
          ],
          type: 'enum'
        },
        { name: 'cross-origin', options: [{ value: 'anonymous' }, { value: 'use-credentials' }], type: 'enum' },
        { name: 'eager', type: 'boolean' },
        { name: 'lazy', type: 'boolean' },
        { name: 'placeholder', type: 'string' },
        { name: 'src', type: 'string' }
      ]}
      component={(props: AracnaImageProps) => <AracnaImage {...props} className='aspect-square max-w-[192px]' />}
      defaultProps={{
        background: colors.slate[800],
        shape: 'squircle',
        'shape-squircle-curvature': '1',
        size: 192,
        src: MESH_SEANCE.src
      }}
    />
  )
}
