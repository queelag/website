import type { AracnaFormProps } from '@aracna/react'
import { AracnaForm } from '@aracna/react-components/components/input/form'

type Props = AracnaFormProps & {}

export function Form(props: Props) {
  return <AracnaForm {...props} />
}
