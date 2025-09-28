import type { AracnaIconProps } from '@aracna/react-components'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { jec } from '@aracna/web'
import './IconFeather.css'

export function IconFeather(props: AracnaIconProps) {
  return (
    <AracnaIcon
      {...props}
      className={jec('feather', props.className)}
      fill={props.fill ?? 'inherit'}
      size={props.size ?? 16}
      stroke={props.stroke ?? 'inherit'}
      stroke-linecap={props['stroke-linecap'] ?? 'round'}
      stroke-linejoin={props['stroke-linejoin'] ?? 'round'}
      stroke-width={props['stroke-width'] ?? 2}
    />
  )
}
