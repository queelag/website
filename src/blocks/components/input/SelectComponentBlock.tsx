import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import { omitObjectProperties, removeArrayItems } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { useObservableElementComponent, type AracnaSelectProps } from '@aracna/react'
import { AracnaButton, AracnaChip } from '@aracna/react-components'
import {
  AracnaSelect,
  AracnaSelectButton,
  AracnaSelectGroup,
  AracnaSelectInput,
  AracnaSelectList,
  AracnaSelectOption
} from '@aracna/react-components/components/input/select'
import { StateChangeEvent, joinElementClasses, type SelectOption } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import { useState } from 'react'

const OPTIONS: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'mango', label: 'Mango' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'watermelon', label: 'Watermelon' },
  { value: 'grape', label: 'Grape' },
  { value: 'pear', label: 'Pear' },
  { value: 'peach', label: 'Peach' },
  { value: 'plum', label: 'Plum' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'blackberry', label: 'Blackberry' },
  { value: 'pomegranate', label: 'Pomegranate' },
  { value: 'apricot', label: 'Apricot' },
  { value: 'fig', label: 'Fig' },
  { value: 'guava', label: 'Guava' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' }
]

export function SelectComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'normalized'),
        { name: 'autocomplete', type: 'enum', options: [{ value: 'none' }, { value: 'inline' }, { value: 'list' }, { value: 'both' }] },
        { name: 'expanded', type: 'boolean' },
        { name: 'multiple', type: 'boolean' },
        { name: 'options', type: 'json' },
        { name: 'scroll-into-view-behaviour', type: 'enum', options: [{ value: 'auto' }, { value: 'instant' }, { value: 'smooth' }] },
        { name: 'scroll-into-view-block', type: 'enum', options: [{ value: 'center' }, { value: 'end' }, { value: 'nearest' }, { value: 'start' }] },
        { name: 'scroll-into-view-inline', type: 'enum', options: [{ value: 'center' }, { value: 'end' }, { value: 'nearest' }, { value: 'start' }] },
        { name: 'typeahead-debounce-time', type: 'number' }
      ]}
      component={(props: ComponentBlockComponentProps<AracnaSelectProps>) => {
        const { element, ref } = useObservableElementComponent<'aracna-select'>()
        const [expanded, setExpanded] = useState<boolean>()
        const [option, setOption] = useState<SelectOption>()
        const [options, setOptions] = useState<SelectOption[]>([])
        const [filter, setFilter] = useState<string>()

        const onChangeOption = (event: StateChangeEvent<string>) => {
          if (event.detail?.name !== 'value') {
            return
          }

          setOption(element?.findOptionByValue(event.detail?.value))
        }

        const onChangeOptions = (event: StateChangeEvent<string[]>) => {
          let options: SelectOption[] = []

          if (event.detail?.name !== 'value') {
            return
          }

          for (let value of event.detail?.value ?? []) {
            let option: SelectOption | undefined

            option = element?.findOptionByValue(value)
            if (!option) continue

            options.push(option)
          }

          setOptions(options)
        }

        const onInputChange = (event: StateChangeEvent<string>) => {
          // setFilter(event.detail?.value)
        }

        return (
          <AracnaSelect
            {...omitObjectProperties(props, ['_variant'])}
            className='group w-64'
            expanded={expanded}
            onStateChange={props.multiple ? onChangeOptions : onChangeOption}
            ref={ref}
          >
            <AracnaSelectGroup className='w-full'>
              {props._variant === 'button' && (
                <AracnaSelectButton
                  className={joinElementClasses(
                    'w-full flex justify-between items-center p-3 rounded transition border-2 border-slate-800',
                    'hover:border-slate-700 focus:border-slate-700 focus:outline-none'
                  )}
                >
                  {options.length <= 0 && <span className='text-xs font-medium'>{option?.label ?? 'Select Fruit'}</span>}
                  {options.length >= 1 && (
                    <div className='w-full flex flex-wrap gap-1'>
                      {options.map((option: SelectOption) => (
                        <AracnaChip className='flex items-center gap-2 pl-2.5 pr-1.5 py-1 rounded bg-slate-800' key={option.value}>
                          <span className='text-xs font-medium'>{option.label}</span>
                          <AracnaButton
                            className='rounded-full transition ring-slate-600 hover:bg-slate-600 hover:ring-4 active:ring-2'
                            onClick={() => element?.removeOption(option)}
                            size={12}
                          >
                            <IconFeatherX size={12} stroke='white' />
                          </AracnaButton>
                        </AracnaChip>
                      ))}
                    </div>
                  )}
                  <IconFeatherChevronDown className={joinElementClasses('transition group-[&[expanded]]:rotate-180')} stroke='white' />
                </AracnaSelectButton>
              )}
              {props._variant === 'input' && (
                <AracnaSelectInput className='w-full' onStateChange={onInputChange}>
                  <input
                    className={joinElementClasses(
                      'w-full flex justify-between items-center p-3 rounded text-xs font-medium transition border-2 border-slate-800 bg-black',
                      'hover:border-slate-700 focus:border-slate-700 focus:outline-none'
                    )}
                    placeholder='Select Fruit'
                  />
                </AracnaSelectInput>
              )}
            </AracnaSelectGroup>
            <AracnaSelectList
              className={joinElementClasses(
                'w-full max-h-48 flex flex-col rounded transition border-2 divide-y-2 border-slate-800 divide-slate-800 bg-black',
                'opacity-0 pointer-events-none group-[&[expanded]]:opacity-100 group-[&[expanded]]:pointer-events-auto'
              )}
              middlewares={[offset(8)]}
              placement='bottom-start'
            >
              {element?.filterOptions(props.options ?? []).map((option: SelectOption) => (
                <AracnaSelectOption
                  {...option}
                  className={joinElementClasses(
                    'group flex justify-between items-center p-3 transition',
                    '[&[focused]]:bg-slate-900 aria-selected:bg-slate-900'
                  )}
                  key={option.value}
                >
                  <span className='text-xs font-medium'>{option.label ?? option.value}</span>
                  <IconFeatherCheck className={joinElementClasses('transition', 'opacity-0 group-aria-selected:opacity-100')} size={12} stroke='white' />
                </AracnaSelectOption>
              ))}
            </AracnaSelectList>
          </AracnaSelect>
        )
      }}
      defaultProps={{
        options: JSON.stringify(OPTIONS)
      }}
      variants={[
        { label: 'Button', value: 'button' },
        { label: 'Input', value: 'input' }
      ]}
    />
  )
}
