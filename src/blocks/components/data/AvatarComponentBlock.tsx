import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaAvatarProps } from '@aracna/react'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'

export function AvatarComponentBlock() {
  return (
    <ComponentBlock
      attributes={[...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES, { name: 'children', type: 'string' }]}
      component={(props: AracnaAvatarProps) => <AracnaAvatar {...props} className='bg-slate-800' />}
      defaultProps={{
        children: 'A',
        shape: 'squircle',
        size: 32
      }}
    />
  )
}
