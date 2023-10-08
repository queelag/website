import { AracnaBadge } from '@aracna/react-components/components/data/badge.js'
import { red } from 'tailwindcss/colors'
import { ComponentBlock } from '../ComponentBlock'

export function BadgeComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'background', type: 'color' },
        { name: 'min', type: 'number' },
        { name: 'max', type: 'number' },
        { name: 'value', type: 'string' },
        { name: 'shape', type: 'enum', values: ['circle', 'rectangle', 'square', 'squircle'] },
        { name: 'shape-rectangle-radius', type: 'number', visible: { shape: ['rectangle'] } },
        { name: 'shape-square-radius', type: 'number', visible: { shape: ['square'] } },
        { name: 'shape-squircle-curvature', type: 'number', visible: { shape: ['squircle'] } },
        { name: 'height', type: 'string' },
        { name: 'width', type: 'string' },
        { name: 'size', type: 'string' }
      ]}
      component={(props) => <AracnaBadge {...props} className='text-xs font-bold pb-1' />}
      defaultProps={{
        background: red[700],
        max: 9,
        min: 0,
        numeric: true,
        shape: 'circle',
        size: 20,
        value: 7
      }}
    />
  )
}
