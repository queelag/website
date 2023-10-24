import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaMeterProps } from '@aracna/react'
import { AracnaMeter } from '@aracna/react-components/components/feedback/meter'
import { getMeterElementPercentage, joinElementClasses } from '@aracna/web'

export function MeterComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'high', type: 'number', visible: { native: [true] } },
        { name: 'low', type: 'number', visible: { native: [true] } },
        { name: 'max', type: 'number' },
        { name: 'min', type: 'number' },
        { name: 'optimum', type: 'number', visible: { native: [true] } },
        { name: 'native', type: 'boolean' },
        { name: 'round', type: 'boolean' },
        { name: 'value', type: 'number' }
      ]}
      component={(props: AracnaMeterProps) => (
        <AracnaMeter {...props} className={joinElementClasses(!props.native && 'w-64 h-6 rounded-full bg-slate-800')}>
          <div className='h-full rounded-full bg-slate-700' style={{ width: `${getMeterElementPercentage(props.value, props.min, props.max)}%` }}></div>
        </AracnaMeter>
      )}
      defaultProps={{
        value: 0.25
      }}
    />
  )
}
