import { IconFeatherAlertTriangle } from '@aracna/icons-feather-react/components/alert-triangle'
import { IconFeatherInfo } from '@aracna/icons-feather-react/components/info'
import type { AracnaAlertProps } from '@aracna/react'
import { AracnaAlert } from '@aracna/react-components/components/feedback/alert'
import { jec, type AlertSeverity, type AlertVariant } from '@aracna/web'

type Props = AracnaAlertProps & {
  closable?: boolean
  headline?: string
  icon?: string
  severity?: AlertSeverity
  text?: string
  variant?: AlertVariant
}

export function Alert(props: Props) {
  return (
    <AracnaAlert
      {...props}
      className={jec('w-full inline-flex items-center gap-4 leading-tight px-4 rounded border-2 border-slate-700 bg-slate-900', props.className)}
    >
      {props.severity === 'warning' && <IconFeatherAlertTriangle className='mt-[3px] stroke-amber-500' />}
      {props.severity === 'info' && <IconFeatherInfo className='stroke-blue-500' />}
      <div>{props.children}</div>
    </AracnaAlert>
  )
}
