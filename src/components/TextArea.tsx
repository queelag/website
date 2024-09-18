import type { AracnaTextAreaProps } from '@aracna/react-components'
import { useObservableElementComponent } from '@aracna/react-components'
import { AracnaTextArea } from '@aracna/react-components/components/input/text-area'

type Props = AracnaTextAreaProps & {
  label?: string
}

export function TextArea(props: Props) {
  const { onStateChange, ref } = useObservableElementComponent<'aracna-textarea'>()

  return (
    <div className='w-full flex flex-col p-2 text-xs rounded border-2 border-slate-800'>
      {props.label && <label className='text-xs cursor-default'>{props.label}</label>}
      <AracnaTextArea {...props} className='w-full font-semibold text-white' onStateChange={onStateChange} ref={ref} width='100%'>
        <textarea rows={1} />
      </AracnaTextArea>
    </div>
  )
}
