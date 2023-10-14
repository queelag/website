import { ComponentBlock } from '@/blocks/ComponentBlock'
import { ICON_FEATHER_CHECK } from '@aracna/icons-feather/assets/check'
import { ICON_FEATHER_CHEVRON_DOWN } from '@aracna/icons-feather/assets/chevron-down'
import { ICON_FEATHER_CLOCK } from '@aracna/icons-feather/assets/clock'
import { ICON_FEATHER_IMAGE } from '@aracna/icons-feather/assets/image'
import { ICON_FEATHER_X } from '@aracna/icons-feather/assets/x'
import type { ChipProps } from '@aracna/react'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import type { SelectOption } from '@aracna/web'

const LEADING_ICONS: SelectOption[] = [
  { label: 'check', value: ICON_FEATHER_CHECK },
  { label: 'clock', value: ICON_FEATHER_CLOCK },
  { label: 'image', value: ICON_FEATHER_IMAGE }
]

const TRAILING_ICONS: SelectOption[] = [
  { label: 'chevron-down', value: ICON_FEATHER_CHEVRON_DOWN },
  { label: 'x', value: ICON_FEATHER_X }
]

export function ChipComponentBlock() {
  const isImageVisible = (props: ChipProps) => {
    if (typeof props.image === 'undefined') {
      return false
    }

    switch (props.variant) {
      case 'assist':
      case 'filter':
      case 'input':
      case undefined:
        return true
    }

    return false
  }

  const isLeadingIconVisible = (props: ChipProps) => {
    if (typeof props.icon === 'undefined' && typeof props['leading-icon'] === 'undefined') {
      return false
    }

    switch (props.variant) {
      case 'assist':
      case 'filter':
      case 'input':
      case undefined:
        return true
    }

    return false
  }

  const isTrailingIconVisible = (props: ChipProps) => {
    if (typeof props['trailing-icon'] === 'undefined') {
      return false
    }

    switch (props.variant) {
      case 'filter':
      case 'input':
      case undefined:
        return true
    }

    return false
  }

  return (
    <ComponentBlock
      attributes={[
        { name: 'icon', type: 'enum', options: LEADING_ICONS },
        { name: 'image', type: 'string' },
        { name: 'label', type: 'string' },
        { name: 'leading-icon', type: 'enum', options: LEADING_ICONS },
        { name: 'trailing-icon', type: 'enum', options: TRAILING_ICONS },
        { name: 'variant', type: 'enum', options: [{ value: 'assist' }, { value: 'filter' }, { value: 'input' }, { value: 'suggestion' }] }
      ]}
      component={(props: ChipProps) => (
        <AracnaChip {...props} className='flex items-center gap-1.5 px-2 py-1.5 rounded bg-slate-800'>
          {isLeadingIconVisible(props) && <AracnaIcon fill='none' size={16} src={props['leading-icon'] ?? props.icon} stroke='white' stroke-width={1} />}
          {isImageVisible(props) && (
            <AracnaAvatar shape='circle' size={16}>
              <img className='w-full h-full object-cover' src={props.image} />
            </AracnaAvatar>
          )}
          <span className='text-xs font-semibold'>{props.label}</span>
          {isTrailingIconVisible(props) && <AracnaIcon fill='none' size={16} src={props['trailing-icon']} stroke='white' stroke-width={1} />}
        </AracnaChip>
      )}
      defaultProps={{
        'leading-icon': ICON_FEATHER_IMAGE,
        label: 'Set Image',
        'trailing-icon': ICON_FEATHER_CHEVRON_DOWN,
        variant: 'input'
      }}
    />
  )
}
