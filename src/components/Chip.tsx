import type { AracnaChipProps } from '@aracna/react-components'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { jec } from '@aracna/web'
import './Chip.css'

interface Props extends AracnaChipProps {}

export function Chip(props: Props) {
  return (
    <AracnaChip {...props} className={jec(props.className, 'chip')}>
      {props.text && <span>{props.text}</span>}
    </AracnaChip>
  )
}
