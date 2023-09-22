import type { InputProps } from '@aracna/react'
import { AracnaInput } from '@aracna/react-components/components/input/input.js'

type Props = InputProps & {}

export function Input(props: Props) {
  return <AracnaInput {...props} />
}
