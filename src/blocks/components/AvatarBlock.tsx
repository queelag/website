import { AracnaAvatar } from '@aracna/react-components/components/data/avatar.js'
import { slate } from 'tailwindcss/colors'
import { ComponentBlock } from '../ComponentBlock'

export function AvatarBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'background', type: 'color' },
        { name: 'shape', type: 'enum', values: ['circle', 'rectangle', 'square', 'squircle'] },
        { name: 'size', type: 'string' }
      ]}
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
