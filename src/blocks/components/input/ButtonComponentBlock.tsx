import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { sleep } from '@aracna/core'
import { IconFeatherLoader } from '@aracna/icons-feather-react/components/loader'
import { ICON_FEATHER_CLOCK } from '@aracna/icons-feather/assets/clock'
import { ICON_FEATHER_IMAGE } from '@aracna/icons-feather/assets/image'
import { ICON_FEATHER_PLUS } from '@aracna/icons-feather/assets/plus'
import type { AracnaButtonProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { ButtonClickEvent, joinElementClasses, type SelectOption } from '@aracna/web'
import colors from 'tailwindcss/colors'

const ICONS: SelectOption[] = [
  { label: 'clock', value: ICON_FEATHER_CLOCK },
  { label: 'image', value: ICON_FEATHER_IMAGE },
  { label: 'plus', value: ICON_FEATHER_PLUS }
]

export function ButtonComponentBlock() {
  const onClickAsync = async (event: ButtonClickEvent) => {
    await sleep(1000)
    event.detail?.finalize()
  }

  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'async', type: 'boolean' },
        { name: 'disabled', type: 'boolean' },
        { name: 'icon', type: 'enum', options: ICONS },
        { name: 'native', type: 'boolean' },
        { name: 'normalized', type: 'boolean' },
        { name: 'spinning', type: 'boolean' },
        { name: 'text', type: 'string' },
        { name: 'type', type: 'enum', options: [{ value: 'button' }, { value: 'menu' }, { value: 'reset' }, { value: 'submit' }] },
        { name: 'variant', type: 'enum', options: [{ value: 'fill' }, { value: 'fill-tonal' }, { value: 'opacity' }, { value: 'outline' }, { value: 'text' }] }
      ]}
      component={(props: AracnaButtonProps) => (
        <AracnaButton {...props} className='group transition hover:brightness-125 active:brightness-75' onButtonClick={onClickAsync}>
          <div className='relative w-full flex justify-center items-center gap-1.5'>
            <IconFeatherLoader className='absolute animate-spin opacity-0 group-[&[spinning]]:opacity-100' fill='none' stroke='white' />
            <div className='flex items-center gap-1.5 group-[&[spinning]]:opacity-0'>
              {props.icon && (
                <AracnaIcon className={joinElementClasses(props.text && '-ml-[4px]')} fill='none' size={16} src={props.icon} stroke='white' stroke-width={2} />
              )}
              {props.text && <span className='font-medium text-xs text-white'>{props.text}</span>}
            </div>
          </div>
        </AracnaButton>
      )}
      defaultProps={{
        async: true,
        background: colors.blue[500],
        icon: ICON_FEATHER_PLUS,
        padding: '8px 16px',
        shape: 'rectangle',
        'shape-rectangle-radius': 2,
        text: 'Add Item',
        variant: 'fill'
      }}
    />
  )
}
