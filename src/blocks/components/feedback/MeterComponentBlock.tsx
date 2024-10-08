import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaMeterProps } from '@aracna/react-components'
import { AracnaMeter } from '@aracna/react-components/components/feedback/meter'
import { getMeterElementPercentage } from '@aracna/web-components'

export function MeterComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        // { name: 'high', type: 'number',  },
        // { name: 'low', type: 'number', },
        { name: 'max', type: 'number' },
        { name: 'min', type: 'number' },
        // { name: 'optimum', type: 'number'},
        { name: 'round', type: 'boolean' },
        { name: 'value', type: 'number' }
      ]}
      component={(props: AracnaMeterProps) => (
        <AracnaMeter {...props} className='w-64 h-6 rounded-full bg-slate-800'>
          <div
            className='h-full rounded-full bg-slate-700'
            style={{ width: `${getMeterElementPercentage(props.value, { max: props.max, min: props.min })}%` }}
          ></div>
        </AracnaMeter>
      )}
      defaultProps={{
        value: 0.25
      }}
    />
  )
}
