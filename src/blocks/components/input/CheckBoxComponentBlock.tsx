import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES, DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { ICON_F_CHECK } from '@aracna-icons/feather'
import type { AracnaCheckBoxProps } from '@aracna/react-components'
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
            <IconFeather className='opacity-0 transition group-[&[checked]]:opacity-100' src={ICON_F_CHECK} stroke='white' />
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
