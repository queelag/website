import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FOCUS_TRAP_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { ICON_FEATHER_CALENDAR } from '@aracna/icons-feather/assets/calendar'
import type { AracnaDialogProps } from '@aracna/react'
import { AracnaButton, AracnaIcon } from '@aracna/react-components'
import { AracnaDialog, AracnaDialogDescription, AracnaDialogLabel } from '@aracna/react-components/components/feedback/dialog'
import { joinElementClasses } from '@aracna/web'
import { Fragment, useState } from 'react'

export function DialogComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_FOCUS_TRAP_ELEMENT_ATTRIBUTES,
        { name: 'headline', type: 'string' },
        { name: 'icon', type: 'enum', options: [{ label: 'calendar', value: ICON_FEATHER_CALENDAR }] },
        { name: 'lock-body-scroll', type: 'boolean' },
        { name: 'text', type: 'string' },
        { name: 'visible', type: 'boolean' }
      ]}
      component={(props: AracnaDialogProps) => {
        const [visible, setVisible] = useState<boolean>(false)

        const open = () => setVisible(true)
        const close = () => setVisible(false)

        return (
          <Fragment>
            <AracnaButton className='px-4 py-3 transition rounded bg-slate-800 hover:bg-slate-700' onClick={open}>
              <span className='text-sm font-medium'>Open Dialog</span>
            </AracnaButton>
            <AracnaDialog
              {...props}
              className={joinElementClasses(
                'absolute max-w-sm flex flex-col items-center gap-4 p-4 pt-8 rounded transition bg-slate-800',
                !visible && 'opacity-0 pointer-events-none'
              )}
              onDialogClose={close}
              visible={visible}
            >
              {props.icon && <AracnaIcon size={16} src={props.icon} stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width={2} />}
              <div className='flex flex-col items-center text-center gap-1'>
                {props.headline && <AracnaDialogLabel className='text-lg font-medium'>{props.headline}</AracnaDialogLabel>}
                {props.text && <AracnaDialogDescription className='text-xs text-slate-400'>{props.text}</AracnaDialogDescription>}{' '}
              </div>
              <div className='w-full flex justify-end'>
                <AracnaButton className='px-3 py-2 transition rounded bg-black hover:bg-white hover:text-black' onClick={close}>
                  <span className='text-xs font-medium'>Cancel</span>
                </AracnaButton>
              </div>
            </AracnaDialog>
          </Fragment>
        )
      }}
      defaultProps={{
        headline: 'Schedule an appointment today!',
        icon: ICON_FEATHER_CALENDAR,
        text: 'Our team is ready to help you with your needs. Book an appointment now and get the help you need.'
      }}
    />
  )
}
