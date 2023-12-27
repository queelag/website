import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FOCUS_TRAP_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { ICON_F_ALERT_TRIANGLE } from '@aracna/icons-feather/assets/alert-triangle'
import type { AracnaAlertDialogProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { AracnaAlertDialog, AracnaAlertDialogDescription, AracnaAlertDialogLabel } from '@aracna/react-components/components/feedback/alert-dialog'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { jec } from '@aracna/web'
import { Fragment, useState } from 'react'

export function AlertDialogComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_FOCUS_TRAP_ELEMENT_ATTRIBUTES,
        { name: 'headline', type: 'string' },
        { name: 'icon', type: 'enum', options: [{ label: 'alert-triangle', value: ICON_F_ALERT_TRIANGLE }] },
        { name: 'lock-body-scroll', type: 'boolean' },
        { name: 'text', type: 'string' },
        { name: 'visible', type: 'boolean' }
      ]}
      component={(props: AracnaAlertDialogProps) => {
        const [visible, setVisible] = useState<boolean>(false)

        const open = () => setVisible(true)
        const close = () => setVisible(false)

        return (
          <Fragment>
            <AracnaButton className='px-4 py-3 transition rounded bg-slate-800 hover:bg-slate-700' onClick={open}>
              <span className='text-sm font-medium'>Open Alert Dialog</span>
            </AracnaButton>
            <AracnaAlertDialog
              {...props}
              className={jec(
                'absolute max-w-sm flex flex-col items-center gap-4 p-4 pt-8 rounded transition bg-slate-800',
                !visible && 'opacity-0 pointer-events-none'
              )}
              onDialogClose={close}
              visible={visible}
            >
              {props.icon && <AracnaIcon size={16} src={props.icon} stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width={2} />}
              <div className='flex flex-col items-center text-center gap-1'>
                {props.headline && <AracnaAlertDialogLabel className='text-lg font-medium'>{props.headline}</AracnaAlertDialogLabel>}
                {props.text && <AracnaAlertDialogDescription className='text-xs text-slate-400'>{props.text}</AracnaAlertDialogDescription>}{' '}
              </div>
              <div className='w-full flex justify-end'>
                <AracnaButton className='px-3 py-2 transition rounded bg-black hover:bg-white hover:text-black' onClick={close}>
                  <span className='text-xs font-medium'>Cancel</span>
                </AracnaButton>
              </div>
            </AracnaAlertDialog>
          </Fragment>
        )
      }}
      defaultProps={{
        'allow-outside-click': true,
        headline: 'Potential Security Breach Detected',
        icon: ICON_F_ALERT_TRIANGLE,
        text: 'We have detected suspicious activity on your account.\nPlease change your password immediately to secure your account.'
      }}
    />
  )
}
