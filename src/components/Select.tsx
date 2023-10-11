import { omitObjectProperties } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check.js'
import { IconFeatherChevronDown } from '@aracna/icons-feather-react/components/chevron-down.js'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x.js'
import { useBaseElementComponent, type SelectProps } from '@aracna/react'
import { AracnaSelect, AracnaSelectButton, AracnaSelectGroup, AracnaSelectList, AracnaSelectOption } from '@aracna/react-components/components/input/select.js'
import { joinElementClasses, type SelectOption } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import './Select.css'

type Props = SelectProps & {
  label?: string
}

export function Select(props: Props) {
  const { element, ref } = useBaseElementComponent<'aracna-select'>({ attribute: { dispatch: true }, state: { dispatch: true } })

  const onClear = (event: any) => {
    event.stopPropagation()
    element?.clear()
  }

  return (
    <AracnaSelect {...omitObjectProperties(props, ['label'])} ref={ref}>
      <AracnaSelectGroup className='w-full p-2 rounded border-2 border-slate-800'>
        <AracnaSelectButton className='group w-full flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            {props.label && <label className='text-xs'>{props.label}</label>}
            <span className={joinElementClasses('text-xs font-semibold', !element?.value && 'text-gray-500')}>
              {element?.findOptionLabelByValue(element.value) ?? element?.value ?? props.placeholder}
            </span>
          </div>
          <div className='flex items-center gap-1'>
            {element?.value && <IconFeatherX onClick={onClear} size={12} stroke='white' />}
            <IconFeatherChevronDown className={joinElementClasses('group-aria-expanded:rotate-180')} size={14} stroke='white' />
          </div>
        </AracnaSelectButton>
      </AracnaSelectGroup>
      <AracnaSelectList
        className='max-h-96 rounded divide-y-2 border-2 border-slate-700 divide-slate-700 bg-slate-900'
        middlewares={[offset(8)]}
        placement='bottom-start'
      >
        {props.options?.map((option: SelectOption) => (
          <AracnaSelectOption
            className='flex justify-between items-center p-2 hover:bg-slate-800 [&[focused]]:bg-slate-800'
            key={option.value}
            value={option.value}
          >
            <span className='text-xs'>{option.label ?? option.value}</span>
            {option.value === element?.value && <IconFeatherCheck size={12} stroke='white' />}
          </AracnaSelectOption>
        ))}
      </AracnaSelectList>
    </AracnaSelect>
  )
}
