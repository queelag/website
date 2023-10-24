import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { AracnaDividerProps } from '@aracna/react'
import { AracnaDivider } from '@aracna/react-components/components/layout/divider'
import { joinElementClasses } from '@aracna/web'

export function DividerComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'orientation', type: 'enum', options: [{ value: 'horizontal' }, { value: 'vertical' }] }
      ]}
      component={(props: AracnaDividerProps) => (
        <AracnaDivider {...props} className={joinElementClasses('bg-slate-800', props.orientation === 'vertical' ? 'w-px h-full' : 'w-full h-px')} />
      )}
      defaultProps={{
        orientation: 'horizontal'
      }}
    />
  )
}
