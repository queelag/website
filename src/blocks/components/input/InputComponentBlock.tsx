import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { removeArrayItems } from '@aracna/core'
import type { InputProps } from '@aracna/react'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { joinElementClasses } from '@aracna/web'

export function InputComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'native'),
        { name: 'multiple', type: 'boolean' },
        { name: 'obscured', type: 'boolean' },
        { name: 'placeholder', type: 'string' },
        { name: 'touch-trigger', type: 'enum', options: [{ value: 'blur' }, { value: 'input' }] },
        {
          name: 'type',
          type: 'enum',
          options: [
            { value: 'buffer' },
            { value: 'color' },
            { value: 'date' },
            { value: 'datetime-local' },
            { value: 'email' },
            { value: 'month' },
            { value: 'number' },
            { value: 'password' },
            { value: 'search' },
            { value: 'tel' },
            { value: 'text' },
            { value: 'time' },
            { value: 'url' },
            { value: 'week' }
          ]
        },
        { name: 'value', type: 'string' }
      ]}
      component={(props: InputProps) => (
        <div className={joinElementClasses('rounded border-2 border-slate-800', 'transition hover:border-slate-700')}>
          <AracnaInput {...props} className='text-xs font-medium rounded text-white' padding='16px' width={256} />
        </div>
      )}
      defaultProps={{ normalized: true, placeholder: 'placeholder', type: 'text' }}
    />
  )
}
