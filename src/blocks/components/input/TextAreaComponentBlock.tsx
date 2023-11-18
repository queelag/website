import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { removeArrayItems } from '@aracna/core'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { Memo, useObservableElementComponent, type AracnaTextAreaProps } from '@aracna/react'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaTextArea } from '@aracna/react-components/components/input/text-area'
import { joinElementClasses, type StateChangeEvent } from '@aracna/web'
import { useState } from 'react'

export function TextAreaComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'native'),
        { name: 'autosize', type: 'boolean' },
        { name: 'cols', type: 'number' },
        { name: 'multiple', type: 'boolean' },
        { name: 'padding', type: 'string' },
        { name: 'placeholder', type: 'string' },
        { name: 'resize', type: 'enum', options: [{ value: 'both' }, { value: 'horizontal' }, { value: 'vertical' }, { value: 'none' }] },
        { name: 'rows', type: 'number' },
        // { name: 'touch-trigger', type: 'enum', options: [{ value: 'blur' }, { value: 'textarea' }] },
        { name: 'value', type: 'string' }
      ]}
      component={(props: AracnaTextAreaProps) => {
        const { element, onAttributeChange, ref } = useObservableElementComponent<'aracna-textarea'>({ whitelist: ['focused', 'value'] })
        const [items, setItems] = useState<string[]>([])

        const onChangeItems = (event: StateChangeEvent<string[]>) => {
          setItems(event.detail?.value ?? [])
        }

        return (
          <div
            className={joinElementClasses(
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
            <Memo deps={[props]}>
              <AracnaTextArea
                {...props}
                className='flex-1 text-xs font-medium rounded text-white'
                onAttributeChange={onAttributeChange}
                onStateChange={props.multiple ? onChangeItems : undefined}
                padding='16px'
                ref={ref}
              />
            </Memo>
          </div>
        )
      }}
      defaultProps={{ normalized: true, placeholder: 'placeholder' }}
    />
  )
}
