import { useBaseElementComponent, type InputProps } from '@aracna/react'
import { AracnaInput } from '@aracna/react-components/components/input/input.js'

type Props = InputProps & {
  label?: string
}

export function Input(props: Props) {
  const { element, ref } = useBaseElementComponent<'aracna-input'>({ state: { dispatch: true } })

  return (
    <div className='w-full flex items-center p-2 text-xs rounded border-2 border-slate-800'>
      <div className='flex-1 flex flex-col'>
        {props.label && <label className='text-xs cursor-default'>{props.label}</label>}
        <AracnaInput {...props} className='w-full font-semibold' padding='4px 0 0 0' ref={ref} type={props.type === 'color' ? 'text' : props.type} normalized />
      </div>
      {props.type === 'color' && (
        <div className='relative w-4 h-4 rounded-full cursor-pointer' style={{ backgroundColor: element?.value as string }}>
          <AracnaInput {...props} className='absolute opacity-0' height={16} type='color' width={16} />
        </div>
      )}
    </div>
  )
}
