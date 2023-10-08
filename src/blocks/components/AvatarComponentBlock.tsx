import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar.js'
import { slate } from 'tailwindcss/colors'
import { ComponentBlock } from '../ComponentBlock'

export function AvatarComponentBlock() {
  return (
    <ComponentBlock
      attributes={[...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES, { name: 'children', type: 'string' }]}
      component={(props) => <AracnaAvatar {...props} />}
      defaultProps={{
        background: slate[800],
        children: 'A',
        shape: 'squircle',
        size: 32
      }}
    />
  )
}
