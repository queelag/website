import { IconFeatherAlertTriangle } from '@aracna/icons-feather-react/components/alert-triangle'
import { IconFeatherInfo } from '@aracna/icons-feather-react/components/info'
import type { AlertProps } from '@aracna/react'
import { AracnaAlert } from '@aracna/react-components/components/feedback/alert'
import type { AlertSeverity, AlertVariant } from '@aracna/web'
import './Alert.css'

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
      {props.severity === 'warning' && <IconFeatherAlertTriangle className='stroke-amber-500' />}
      {props.severity === 'info' && <IconFeatherInfo className='stroke-blue-500' />}
      <div>{props.children}</div>
    </AracnaAlert>
  )
}
