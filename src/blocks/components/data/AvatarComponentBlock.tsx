import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import { ICON_F_USER } from '@aracna/icons-feather/assets/user'
import type { AracnaAvatarProps } from '@aracna/react-components'
import { AracnaAvatar } from '@aracna/react-components/components/data/avatar'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'
import { AracnaImage } from '@aracna/react-components/components/data/image'
import { useMemo } from 'react'

export function AvatarComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES,
        { name: 'icon', type: 'enum', options: [{ label: 'user', value: ICON_F_USER }] },
        { name: 'image', type: 'string' },
        { name: 'text', type: 'string' }
      ]}
      component={(props: AracnaAvatarProps) => {
        const isIconVisible = useMemo(() => typeof props.icon !== 'undefined' && !props.image && !props.text, [props.icon, props.image, props.text])
        const isImageVisible = useMemo(() => typeof props.icon === 'undefined' && props.image, [props.icon, props.image])
        const isTextVisible = useMemo(() => typeof props.icon === 'undefined' && !props.image && props.text, [props.icon, props.image, props.text])

        return (
          <AracnaAvatar {...props} className='bg-slate-800'>
            {isIconVisible && <AracnaIcon fill='none' size={16} src={props.icon} stroke='white' stroke-width={2} />}
            {isImageVisible && <AracnaImage alt={props.text} className='w-full h-full' src={props.image} />}
            {isTextVisible && props.text}
          </AracnaAvatar>
        )
      }}
      defaultProps={{
        shape: 'squircle',
        size: '32',
        text: 'A'
      }}
    />
  )
}
