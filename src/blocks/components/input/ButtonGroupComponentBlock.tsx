import { ComponentBlock } from '@/blocks/ComponentBlock'
import { ICON_FEATHER_X } from '@aracna/icons-feather/assets/x'
import type { AracnaButtonGroupProps } from '@aracna/react'
import { AracnaButton, AracnaIcon } from '@aracna/react-components'
import { AracnaButtonGroup } from '@aracna/react-components/components/input/button-group'
import type { ButtonElementAttributes } from '@aracna/web'
import colors from 'tailwindcss/colors'

interface Button extends ButtonElementAttributes {}

const BUTTONS: Button[] = [
  { background: colors.slate[800], height: 32, padding: '0 16px', text: 'New Item' },
  { background: colors.red[700], icon: ICON_FEATHER_X, size: 32 }
]

export function ButtonGroupComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'buttons', type: 'json' }]}
      component={(props: AracnaButtonGroupProps) => (
        <AracnaButtonGroup {...props} className='flex gap-[2px] rounded overflow-hidden'>
          {props.buttons?.map((button: Button, index: number) => (
            <AracnaButton {...button} key={index}>
              <div className='h-full flex justify-center items-center'>
                {button.icon && <AracnaIcon fill='none' size={16} src={button.icon} stroke='white' stroke-width={2} />}
                {button.text && <span className='font-medium text-xs text-white'>{button.text}</span>}
              </div>
            </AracnaButton>
          ))}
        </AracnaButtonGroup>
      )}
      defaultProps={{
        buttons: JSON.stringify(BUTTONS)
      }}
    />
  )
}
