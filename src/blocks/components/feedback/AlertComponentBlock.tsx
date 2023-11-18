import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeatherX } from '@aracna/icons-feather-react/components/x'
import { ICON_F_ALERT_TRIANGLE } from '@aracna/icons-feather/assets/alert-triangle'
import { ICON_F_CHECK_CIRCLE } from '@aracna/icons-feather/assets/check-circle'
import { ICON_F_INFO } from '@aracna/icons-feather/assets/info'
import { ICON_F_X_CIRCLE } from '@aracna/icons-feather/assets/x-circle'
import type { AracnaAlertProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { AracnaAlert } from '@aracna/react-components/components/feedback/alert'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { joinElementClasses } from '@aracna/web'
import { useState } from 'react'

export function AlertComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'closable', type: 'boolean' },
        { name: 'headline', type: 'string' },
        {
          name: 'icon',
          type: 'enum',
          options: [
            { label: 'x-circle', value: ICON_F_X_CIRCLE },
            { label: 'info', value: ICON_F_INFO },
            { label: 'check-circle', value: ICON_F_CHECK_CIRCLE },
            { label: 'alert-triangle', value: ICON_F_ALERT_TRIANGLE }
          ]
        },
        { name: 'severity', type: 'enum', options: [{ value: 'error' }, { value: 'info' }, { value: 'success' }, { value: 'warning' }] },
        { name: 'text', type: 'string' },
        { name: 'variant', type: 'enum', options: [{ value: 'fill' }, { value: 'fill-tonal' }, { value: 'opacity' }, { value: 'outline' }, { value: 'text' }] }
      ]}
      component={(props: AracnaAlertProps) => {
        const [visible, setVisible] = useState(true)

        const close = () => {
          setVisible(false)
        }

        return (
          <AracnaAlert {...props} className='relative w-full flex items-start gap-3 p-4 rounded border-2 border-slate-800'>
            {props.icon && (
              <AracnaIcon
                className={joinElementClasses(
                  props.severity === 'error' && 'stroke-rose-500',
                  props.severity === 'info' && 'stroke-blue-500',
                  props.severity === 'success' && 'stroke-mint-500',
                  props.severity === 'warning' && 'stroke-amber-500'
                )}
                size={16}
                src={props.icon}
                stroke='inherit'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width={2}
              />
            )}
            <div className='flex flex-col gap-1 -mt-[3px]'>
              {props.headline && <span className='text-sm font-medium'>{props.headline}</span>}
              {props.text && <span className='text-xs'>{props.text}</span>}
            </div>
            {props.closable && (
              <AracnaButton className='absolute top-2 right-2 rounded-full transition ring-slate-700 hover:bg-slate-700 hover:ring-4 active:ring-2'>
                <IconFeatherX onClick={close} size={12} stroke='white' />
              </AracnaButton>
            )}
          </AracnaAlert>
        )
      }}
      defaultProps={{
        headline: 'Information',
        icon: ICON_F_INFO,
        severity: 'info',
        text: 'The quick brown fox jumps over the lazy dog.',
        variant: 'fill'
      }}
    />
  )
}
