import type { SelectProps } from '@aracna/react'
import { AracnaSelect, AracnaSelectButton, AracnaSelectGroup, AracnaSelectList, AracnaSelectOption } from '@aracna/react-components/components/input/select.js'
import type { SelectOption } from '@aracna/web'
import './Select.css'

type Props = SelectProps & {
  label?: string
  options?: SelectOption[]
}

export function Select(props: Props) {
  return (
    <AracnaSelect>
      <AracnaSelectGroup>
        <AracnaSelectButton>{props.label}</AracnaSelectButton>
      </AracnaSelectGroup>
      <AracnaSelectList placement='bottom-start'>
        {props.options?.map((option: SelectOption) => (
          <AracnaSelectOption key={option.value} value={option.value}>
            {option.value}
          </AracnaSelectOption>
        ))}
      </AracnaSelectList>
    </AracnaSelect>
  )
}
