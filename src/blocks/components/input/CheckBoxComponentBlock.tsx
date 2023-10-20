import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES, DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check'
import type { AracnaCheckBoxProps } from '@aracna/react'
import { AracnaCheckBox } from '@aracna/react-components/components/input/check-box'

export function CheckBoxComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        ...DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES,
        { name: 'checked', type: 'boolean' }
      ]}
      component={(props: AracnaCheckBoxProps) => (
        <AracnaCheckBox {...props} className='group transition hover:brightness-125 active:brightness-75 bg-slate-800'>
          <div className='w-full h-full flex justify-center items-center'>
            <IconFeatherCheck className='opacity-0 transition group-[&[checked]]:opacity-100' stroke='white' />
          </div>
        </AracnaCheckBox>
      )}
      defaultProps={{
        shape: 'squircle',
        size: 32
      }}
    />
  )
}
