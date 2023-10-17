import ICON_MIC from '@/assets/icons/mic.svg'
import { ComponentBlock } from '@/blocks/ComponentBlock'
import { concatURL } from '@aracna/core'
import type { AracnaIconProps } from '@aracna/react'
import { AracnaIcon } from '@aracna/react-components/components/data/icon'

export function IconComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'cache', type: 'boolean' },
        { name: 'color', type: 'color' },
        { name: 'fill', type: 'string' },
        { name: 'sanitize', type: 'boolean' },
        { name: 'sanitize-config', type: 'json' },
        { name: 'size', type: 'number' },
        { name: 'src', type: 'string' },
        { name: 'stroke', type: 'string' },
        { name: 'stroke-linecap', type: 'string' },
        { name: 'stroke-linejoin', type: 'string' },
        { name: 'stroke-width', type: 'string' }
      ]}
      component={(props: AracnaIconProps) => <AracnaIcon {...props} style={{ stroke: props.color }} />}
      defaultProps={{
        color: 'white',
        fill: 'none',
        size: 16,
        src: concatURL(import.meta.env.PUBLIC_URL, ICON_MIC.src),
        stroke: 'inherit',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2'
      }}
    />
  )
}
