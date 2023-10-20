import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaBadgeProps } from '@aracna/react'
import { AracnaBadge } from '@aracna/react-components/components/data/badge'

export function BadgeComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'min', type: 'number' },
        { name: 'max', type: 'number' },
        { name: 'numeric', type: 'boolean' },
        { name: 'value', type: 'string' }
      ]}
      component={(props: AracnaBadgeProps) => <AracnaBadge {...props} className='text-xs font-bold pb-1 bg-red-700' />}
      defaultProps={{
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
