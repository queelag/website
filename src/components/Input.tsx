import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import type { AracnaInputProps } from '@aracna/react-components'
import { useObservableElementComponent } from '@aracna/react-components'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { jec } from '@aracna/web'
import { getFormControlElementValue } from '@aracna/web-components'

type Props = AracnaInputProps & {
  label?: string
}

export function Input(props: Props) {
  const { element, onStateChange, ref } = useObservableElementComponent<'aracna-input'>({ whitelist: ['value'] })

  return (
    <div
      className={jec(
        'group w-full flex items-center p-2 text-xs rounded border-2',
        'transition hover:border-slate-700',
        element?.focused ? 'border-slate-700' : 'border-slate-800'
      )}
    >
      <div className='flex-1 flex flex-col'>
        {props.label && <label className='text-xs cursor-default'>{props.label}</label>}
        <AracnaInput {...props} className='w-full font-semibold' onStateChange={onStateChange} ref={ref} type={props.type === 'color' ? 'text' : props.type}>
          <input
            className='w-full bg-transparent outline-none pt-1 placeholder:text-slate-500'
            defaultValue={getFormControlElementValue(props)}
            placeholder={props.placeholder}
          />
        </AracnaInput>
      </div>
      {props.type === 'color' && (
        <div className='relative w-4 h-4 rounded-full cursor-pointer' style={{ backgroundColor: element?.value as string }}>
          <AracnaInput {...props} className='absolute opacity-0' size={16} type='color'>
            <input />
          </AracnaInput>
        </div>
      )}
      {props.type !== 'color' && (
        <AracnaButton
          className='rounded-full transition opacity-0 group-hover:opacity-100 ring-slate-700 hover:bg-slate-700 hover:ring-4 active:ring-2'
          onClick={() => element?.clear()}
          size={16}
        >
          <IconFeatherX size={12} stroke='white' />
        </AracnaButton>
      )}
    </div>
  )
}
