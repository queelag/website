import type { SelectOption } from '@/definitions/interfaces'
import { ICON_F_CHECK, ICON_F_CHEVRON_DOWN, ICON_F_X } from '@aracna-icons/feather'
import { omitObjectProperties } from '@aracna/core'
import type { AracnaSelectProps } from '@aracna/react-components'
import { useObservableElementComponent } from '@aracna/react-components'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaSelect, AracnaSelectButton, AracnaSelectGroup, AracnaSelectList, AracnaSelectOption } from '@aracna/react-components/components/input/select'
import { jec } from '@aracna/web'
import { findSelectOptionLabelByValue } from '@aracna/web-components'
import { offset } from '@floating-ui/dom'
import { IconFeather } from './IconFeather'

type Props = AracnaSelectProps<SelectOption> & {
  label?: string
}

export function Select(props: Props) {
  const { element, onStateChange, ref } = useObservableElementComponent<'aracna-select'>({ whitelist: ['value'] })

  const onClear = (event: any) => {
    event.stopPropagation()
    element?.clear()
  }

  return (
    <AracnaSelect {...omitObjectProperties(props, ['label'])} className='group' onStateChange={onStateChange} ref={ref}>
      <AracnaSelectGroup className={jec('w-full p-2 rounded border-2 border-slate-800', 'transition hover:border-slate-700')}>
        <AracnaSelectButton className='group w-full flex justify-between items-center'>
          <div className='flex flex-col gap-1'>
            {props.label && <label className='text-xs'>{props.label}</label>}
            <span className={jec('text-xs font-semibold line-clamp-1', !element?.value && 'text-slate-500')}>
              {findSelectOptionLabelByValue(props.options ?? [], element?.value) ?? element?.value ?? props.placeholder}
            </span>
          </div>
          <div className='flex items-center gap-1'>
            {element?.value && (
              <AracnaButton className='rounded-full opacity-0 transition group-hover:opacity-100 ring-slate-700 hover:bg-slate-700 hover:ring-4 active:ring-2'>
                <IconFeather onClick={onClear} size={12} src={ICON_F_X} stroke='white' />
              </AracnaButton>
            )}
            <AracnaButton className='rounded-full transition ring-slate-700 hover:bg-slate-700 hover:ring-4 active:ring-2'>
              <IconFeather className={jec('group-aria-expanded:rotate-180')} size={12} src={ICON_F_CHEVRON_DOWN} stroke='white' />
            </AracnaButton>
          </div>
        </AracnaSelectButton>
      </AracnaSelectGroup>
      <AracnaSelectList
        className={jec(
          'max-h-64 flex flex-col rounded divide-y-2 border-2 border-slate-700 divide-slate-700 bg-slate-900',
          'transition opacity-0 pointer-events-none group-[&[expanded]]:opacity-100 group-[&[expanded]]:pointer-events-auto'
        )}
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
            {option.value === element?.value && <IconFeather size={12} src={ICON_F_CHECK} stroke='white' />}
          </AracnaSelectOption>
        ))}
      </AracnaSelectList>
    </AracnaSelect>
  )
}
