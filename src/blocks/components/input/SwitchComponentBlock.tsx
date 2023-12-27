import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { removeArrayItems } from '@aracna/core'
import type { AracnaSwitchProps } from '@aracna/react'
import { AracnaSwitch } from '@aracna/react-components/components/input/switch'
import { jec } from '@aracna/web'

export function SwitchComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'normalized'),
        { name: 'on', type: 'boolean' }
      ]}
      component={(props: AracnaSwitchProps) => (
        <AracnaSwitch {...props} className='group rounded-full transition focus:outline-none'>
          <div className='w-20 p-[2px] rounded-full transition border-2 border-slate-800 group-focus:border-slate-700'>
            <div
              className={jec(
                'w-8 h-8 rounded-full transition bg-slate-700',
                'group-hover:bg-slate-600 group-focus:bg-slate-600 group-aria-checked:translate-x-[40px]'
              )}
            />
          </div>
        </AracnaSwitch>
      )}
      defaultProps={{}}
    />
  )
}
