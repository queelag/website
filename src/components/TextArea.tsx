import { TextAreaProps, useBaseElementComponent } from '@aracna/react'
import { AracnaTextArea } from '@aracna/react-components/components/input/text-area'

type Props = TextAreaProps & {
  label?: string
}

export function TextArea(props: Props) {
  const { element, ref } = useBaseElementComponent<'aracna-textarea'>({ state: { dispatch: true } })

  return (
    <div className='w-full flex flex-col p-2 text-xs rounded border-2 border-slate-800'>
      {props.label && <label className='text-xs cursor-default'>{props.label}</label>}
      <AracnaTextArea {...props} className='w-full font-semibold text-white' padding='4px 0 0 0' ref={ref} rows={1} width='100%' normalized />
    </div>
  )
}
