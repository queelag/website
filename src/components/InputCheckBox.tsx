import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check'
import { CheckBoxProps, useBaseElementComponent } from '@aracna/react'
import { AracnaCheckBox } from '@aracna/react-components/components/input/check-box'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { joinElementClasses } from '@aracna/web'

type Props = CheckBoxProps & {
  label?: string
}

export function InputCheckBox(props: Props) {
  const { element, ref } = useBaseElementComponent<'aracna-checkbox'>({ state: { dispatch: true } })

  return (
    <div className={joinElementClasses('w-full flex items-center p-2 text-xs rounded border-2 border-slate-800', 'transition hover:border-slate-700')}>
      <div className='flex-1 flex flex-col'>
        {props.label && <label className='text-xs cursor-default'>{props.label}</label>}
        <AracnaInput
          className='w-full font-semibold'
          padding='4px 0 0 0'
          placeholder={props.placeholder}
          type='text'
          value={typeof element?.value === 'boolean' ? String(element.value) : undefined}
          normalized
          readonly
        />
      </div>
      <AracnaCheckBox {...props} ref={ref} className='group'>
        <div
          className={joinElementClasses('w-6 h-6 flex justify-center items-center rounded bg-slate-800', 'transition hover:bg-slate-700 active:bg-slate-800')}
        >
          <IconFeatherCheck className='opacity-0 group-aria-checked:opacity-100 transition' size={14} stroke='white' />
        </div>
      </AracnaCheckBox>
    </div>
  )
}
