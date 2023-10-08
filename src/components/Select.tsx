import { omitObjectProperties } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check.js'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down.js'
import { useBaseElementComponent, type SelectProps } from '@aracna/react'
import { AracnaSelect, AracnaSelectButton, AracnaSelectGroup, AracnaSelectList, AracnaSelectOption } from '@aracna/react-components/components/input/select.js'
import { joinElementClasses, type SelectOption } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import './Select.css'

type Props = SelectProps & {
  label?: string
  options?: SelectOption[]
}

export function Select(props: Props) {
  const { element, ref } = useBaseElementComponent<'aracna-select'>({ attribute: { dispatch: true }, state: { dispatch: true } })

  return (
    <AracnaSelect {...omitObjectProperties(props, ['label', 'options'])} ref={ref}>
      <AracnaSelectGroup className='w-full p-2 rounded border-2 border-slate-800'>
        <AracnaSelectButton className='group w-full flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            {props.label && <label className='text-xs'>{props.label}</label>}
            <span className={joinElementClasses('text-xs font-semibold', !element?.value && 'text-gray-500')}>{element?.value ?? props.placeholder}</span>
          </div>
          <IconFeatherChevronDown className={joinElementClasses('group-aria-expanded:rotate-180')} size={14} stroke='white' />
        </AracnaSelectButton>
      </AracnaSelectGroup>
      <AracnaSelectList className='rounded divide-y-2 border-2 border-slate-800 divide-slate-800' middlewares={[offset(8)]} placement='bottom-start'>
        {props.options?.map((option: SelectOption) => (
          <AracnaSelectOption className='flex justify-between items-center p-2' key={option.value} value={option.value}>
            <span className='text-xs'>{option.value}</span>
            {option.value === element?.value && <IconFeatherCheck size={12} stroke='white' />}
          </AracnaSelectOption>
        ))}
      </AracnaSelectList>
    </AracnaSelect>
  )
}
