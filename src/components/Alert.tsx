import type { AlertProps } from '@aracna/react'
import { AracnaAlert } from '@aracna/react-components/components/feedback/Alert'
import type { AlertSeverity, AlertVariant } from '@aracna/web'
import './Alert.css'
import { Icon } from './Icon'

type Props = AlertProps & {
  closable?: boolean
  headline?: string
  icon?: string
  severity?: AlertSeverity
  text?: string
  variant?: AlertVariant
}

export function Alert(props: Props) {
  return (
    <AracnaAlert {...props}>
      <Icon
        className='stroke-blue-500'
        fill='none'
        size={16}
        src={
          props.severity === 'info'
            ? 'https://raw.githubusercontent.com/feathericons/feather/master/icons/info.svg'
            : 'https://raw.githubusercontent.com/feathericons/feather/master/icons/chevron-down.svg'
        }
        stroke-width={2}
      />
      <div>{props.children}</div>
    </AracnaAlert>
  )
}
