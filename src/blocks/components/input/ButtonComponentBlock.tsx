import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { SelectOption } from '@/definitions/interfaces'
import { ICON_F_CLOCK, ICON_F_IMAGE, ICON_F_LOADER, ICON_F_PLUS } from '@aracna-icons/feather'
import { sleep } from '@aracna/core'
import type { AracnaButtonProps } from '@aracna/react-components'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { jec } from '@aracna/web'
import type { ButtonClickEvent } from '@aracna/web-components'

const ICONS: SelectOption[] = [
  { label: 'clock', value: ICON_F_CLOCK },
  { label: 'image', value: ICON_F_IMAGE },
  { label: 'plus', value: ICON_F_PLUS }
]

export function ButtonComponentBlock() {
  const onClickAsync = (event: ButtonClickEvent) => {
    event.detail?.callback(async () => {
      await sleep(1000)
    })
  }

  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'async', type: 'boolean' },
        { name: 'disabled', type: 'boolean' },
        { name: 'icon', type: 'enum', options: ICONS },
        { name: 'spinning', type: 'boolean' },
        { name: 'text', type: 'string' },
        { name: 'type', type: 'enum', options: [{ value: 'button' }, { value: 'menu' }, { value: 'reset' }, { value: 'submit' }] },
        { name: 'variant', type: 'enum', options: [{ value: 'fill' }, { value: 'fill-tonal' }, { value: 'opacity' }, { value: 'outline' }, { value: 'text' }] }
      ]}
      component={(props: AracnaButtonProps) => (
        <AracnaButton {...props} className='group px-3 py-2 transition hover:brightness-125 active:brightness-75 bg-blue-500' onButtonClick={onClickAsync}>
          <div className='relative w-full flex justify-center items-center gap-1.5'>
            <IconFeather className='absolute animate-spin opacity-0 group-[&[spinning]]:opacity-100' fill='none' src={ICON_F_LOADER} stroke='white' />
            <div className='flex items-center gap-1.5 group-[&[spinning]]:opacity-0'>
              {props.icon && <AracnaIcon className={jec(props.text && '-ml-[4px]')} fill='none' size={16} src={props.icon} stroke='white' stroke-width={2} />}
              {props.text && <span className='font-medium text-xs text-white'>{props.text}</span>}
            </div>
          </div>
        </AracnaButton>
      )}
      defaultProps={{
        async: true,
        icon: ICON_F_PLUS,
        shape: 'rectangle',
        'shape-rectangle-radius': 2,
        text: 'Add Item',
        variant: 'fill'
      }}
    />
  )
}
