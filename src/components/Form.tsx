import type { FormProps } from '@aracna/react'
import { AracnaForm } from '@aracna/react-components/components/input/form.js'

type Props = FormProps & {}

export function Form(props: Props) {
  return <AracnaForm {...props} />
}
