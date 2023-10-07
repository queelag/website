import { AracnaAvatar } from '@aracna/react-components/components/data/avatar.js'
import { slate } from 'tailwindcss/colors'
import { ComponentBlock } from '../ComponentBlock'

export function AvatarBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'background', type: 'color' },
        { name: 'children', type: 'string' },
        { name: 'shape', type: 'enum', values: ['circle', 'rectangle', 'square', 'squircle'] },
        { name: 'shape-rectangle-radius', type: 'number', visible: [['shape', 'rectangle']] },
        { name: 'shape-square-radius', type: 'number', visible: [['shape', 'square']] },
        { name: 'shape-squircle-curvature', type: 'number', visible: [['shape', 'squircle']] },
        // { name: 'shape-squircle-size', type: 'number' },
        { name: 'height', type: 'string' },
        { name: 'width', type: 'string' },
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
