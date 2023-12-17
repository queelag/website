import type { AracnaChipProps } from '@aracna/react'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { joinElementClasses } from '@aracna/web'
import './Chip.css'

interface Props extends AracnaChipProps {}

export function Chip(props: Props) {
  return (
    <AracnaChip {...props} className={joinElementClasses(props.className, 'chip')}>
      {props.text && <span>{props.text}</span>}
    </AracnaChip>
  )
}
