import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AvatarProps } from '@aracna/react'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'
import colors from 'tailwindcss/colors'

export function AvatarComponentBlock() {
  return (
    <ComponentBlock
      attributes={[...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES, { name: 'children', type: 'string' }]}
      component={(props: AvatarProps) => <AracnaAvatar {...props} />}
      defaultProps={{
        background: colors.slate[800],
        children: 'A',
        shape: 'squircle',
        size: 32
      }}
    />
  )
}
