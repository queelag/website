import { ICON_F_ALERT_TRIANGLE, ICON_F_INFO } from '@aracna-icons/feather'
import type { AracnaAlertProps } from '@aracna/react-components'
import { AracnaAlert } from '@aracna/react-components/components/feedback/alert'
import { jec } from '@aracna/web'
import type { AlertSeverity, AlertVariant } from '@aracna/web-components'
import { IconFeather } from './IconFeather'

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
      {props.severity === 'warning' && <IconFeather className='mt-[3px] stroke-amber-500' src={ICON_F_ALERT_TRIANGLE} />}
      {props.severity === 'info' && <IconFeather className='stroke-blue-500' src={ICON_F_INFO} />}
      <div>{props.children}</div>
    </AracnaAlert>
  )
}
