import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { BadgeProps } from '@aracna/react'
import { AracnaBadge } from '@aracna/react-components/components/data/badge.js'
import { red } from 'tailwindcss/colors'
import { ComponentBlock } from '../ComponentBlock'

export function BadgeComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'min', type: 'number' },
        { name: 'max', type: 'number' },
        { name: 'value', type: 'string' }
      ]}
      component={(props: BadgeProps) => <AracnaBadge {...props} className='text-xs font-bold pb-1' />}
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
