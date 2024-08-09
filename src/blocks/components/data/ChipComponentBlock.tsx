import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { SelectOption } from '@/definitions/interfaces'
import { ICON_F_CHECK } from '@aracna/icons-feather/assets/check'
import { ICON_F_CHEVRON_DOWN } from '@aracna/icons-feather/assets/chevron-down'
import { ICON_F_CLOCK } from '@aracna/icons-feather/assets/clock'
import { ICON_F_IMAGE } from '@aracna/icons-feather/assets/image'
import { ICON_F_X } from '@aracna/icons-feather/assets/x'
import type { AracnaChipProps } from '@aracna/react-components'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'
import { AracnaChip } from '@aracna/react-components/components/data/chip'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { useMemo } from 'react'

const LEADING_ICONS: SelectOption[] = [
  { label: 'check', value: ICON_F_CHECK },
  { label: 'clock', value: ICON_F_CLOCK },
  { label: 'image', value: ICON_F_IMAGE }
]

const TRAILING_ICONS: SelectOption[] = [
  { label: 'chevron-down', value: ICON_F_CHEVRON_DOWN },
  { label: 'x', value: ICON_F_X }
]

export function ChipComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'icon', type: 'enum', options: LEADING_ICONS },
        { name: 'leading-icon', type: 'enum', options: LEADING_ICONS },
        { name: 'leading-image', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'trailing-icon', type: 'enum', options: TRAILING_ICONS },
        { name: 'trailing-image', type: 'string' },
        { name: 'variant', type: 'enum', options: [{ value: 'assist' }, { value: 'filter' }, { value: 'input' }, { value: 'suggestion' }] }
      ]}
      component={(props: AracnaChipProps) => {
        const isLeadingIconVisible = useMemo(() => {
          if (typeof props['leading-icon'] === 'undefined') {
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
        }, [props['leading-icon'], props.variant])

        const isTrailingIconVisible = useMemo(() => {
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
        }, [props['trailing-icon'], props.variant])

        const isLeadingImageVisible = useMemo(() => {
          if (typeof props['leading-image'] === 'undefined') {
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
        }, [props['leading-image'], props.variant])

        const isTrailingImageVisible = useMemo(() => {
          if (typeof props['trailing-image'] === 'undefined') {
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
        }, [props['trailing-image'], props.variant])

        return (
          <AracnaChip {...props} className='flex items-center gap-1.5 px-2 py-1.5 rounded bg-slate-800'>
            {isLeadingIconVisible && <AracnaIcon fill='none' size={16} src={props['leading-icon']} stroke='white' stroke-width={1} />}
            {isLeadingImageVisible && (
              <AracnaAvatar shape='circle' size={16}>
                <img className='w-full h-full object-cover' src={props['leading-image']} />
              </AracnaAvatar>
            )}
            <span className='text-xs font-semibold'>{props.text}</span>
            {isTrailingIconVisible && <AracnaIcon fill='none' size={16} src={props['trailing-icon']} stroke='white' stroke-width={1} />}
            {isTrailingImageVisible && (
              <AracnaAvatar shape='circle' size={16}>
                <img className='w-full h-full object-cover' src={props['trailing-image']} />
              </AracnaAvatar>
            )}
          </AracnaChip>
        )
      }}
      defaultProps={{
        'leading-icon': ICON_F_IMAGE,
        text: 'Set Image',
        'trailing-icon': ICON_F_CHEVRON_DOWN,
        variant: 'input'
      }}
    />
  )
}
