import type { AracnaFormProps } from '@aracna/react-components'
import { AracnaForm } from '@aracna/react-components/components/input/form'

type Props = AracnaFormProps & {}

export function Form(props: Props) {
  return <AracnaForm {...props} />
}
