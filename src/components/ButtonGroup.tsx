import type { AracnaButtonGroupProps, AracnaButtonProps } from '@aracna/react-components'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaButtonGroup } from '@aracna/react-components/components/input/button-group'

interface Props extends AracnaButtonGroupProps {}

export function ButtonGroup(props: Props) {
  return (
    <AracnaButtonGroup className='flex rounded overflow-hidden divide-x divide-black ring-2 ring-slate-800 ring-offset-2 ring-offset-black'>
      {props.buttons?.map((button: AracnaButtonProps, index: number) => (
        <AracnaButton {...button} className='px-4 py-2 text-xs font-medium aria-pressed:bg-slate-800 hover:bg-slate-800' key={index} />
      ))}
    </AracnaButtonGroup>
  )
}
