import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { removeArrayItems } from '@aracna/core'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { Memo } from '@aracna/react'
import { useObservableElementComponent, type AracnaInputProps } from '@aracna/react-components'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { jec } from '@aracna/web'
import type { StateChangeEvent } from '@aracna/web-components'
import { useState } from 'react'

export function InputComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'native'),
        { name: 'multiple', type: 'boolean', visible: { type: ['text'] } },
        {
          name: 'obscured',
          type: 'boolean',
          visible: { type: ['buffer', 'color', 'date', 'datetime-local', 'email', 'month', 'number', 'search', 'tel', 'text', 'time', 'url', 'week'] }
        },
        { name: 'padding', type: 'string' },
        { name: 'placeholder', type: 'string' },
        // { name: 'touch-trigger', type: 'enum', options: [{ value: 'blur' }, { value: 'input' }] },
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
      component={(props: AracnaInputProps) => {
        const { element, onAttributeChange, ref } = useObservableElementComponent<'aracna-input'>({ whitelist: ['focused', 'value'] })
        const [color, setColor] = useState<string>()
        const [items, setItems] = useState<string[]>([])

        const onChangeColor = (event: StateChangeEvent<string>) => {
          setColor(event.detail?.value)
        }

        const onChangeItems = (event: StateChangeEvent<string[]>) => {
          setItems(event.detail?.value ?? [])
        }

        return (
          <div
            className={jec(
              'relative min-w-[256px] flex items-center rounded border-2',
              'transition hover:border-slate-700',
              element?.focused ? 'border-slate-700' : 'border-slate-800'
            )}
          >
            {props.multiple && items.length > 0 && (
              <div className='flex flex-wrap gap-1 p-4'>
                {items.map((item: string) => (
                  <AracnaChip className='col-span-1 flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded bg-slate-800' key={item}>
                    <span className='text-xs font-medium'>{item}</span>
                    <AracnaButton
                      className='rounded-full transition ring-slate-600 hover:bg-slate-600 hover:ring-4 active:ring-2'
                      onClick={() => element?.removeItem(item)}
                      size={12}
                    >
                      <IconFeatherX size={12} stroke='white' />
                    </AracnaButton>
                  </AracnaChip>
                ))}
              </div>
            )}
            <Memo deps={[props, color]}>
              <AracnaInput
                {...props}
                className='flex-1 text-xs font-medium rounded text-white'
                onAttributeChange={onAttributeChange}
                onStateChange={props.type === 'text' && props.multiple ? onChangeItems : undefined}
                padding='16px'
                ref={ref}
                type={props.type === 'color' ? 'text' : props.type}
                value={props.type === 'color' ? color : props.value}
              />
            </Memo>
            {props.type === 'color' && (
              <div className='relative w-4 h-4 mr-4 rounded-full cursor-pointer' style={{ backgroundColor: color ?? '#fff' }}>
                <Memo deps={[props]}>
                  <AracnaInput {...props} className='absolute inset-0 opacity-0' onStateChange={onChangeColor} shape='circle' size={24} type='color' />
                </Memo>
              </div>
            )}
          </div>
        )
      }}
      defaultProps={{ normalized: true, placeholder: 'placeholder', type: 'text' }}
    />
  )
}
