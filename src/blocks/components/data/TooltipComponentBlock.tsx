import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import { ICON_F_INFO } from '@aracna-icons/feather'
import type { AracnaTooltipProps } from '@aracna/react-components'
import { AracnaTooltip, AracnaTooltipArrow, AracnaTooltipContent, AracnaTooltipTrigger } from '@aracna/react-components/components/data/tooltip'
import { jec } from '@aracna/web'
import { offset } from '@floating-ui/dom'
import colors from 'tailwindcss/colors'

export function TooltipComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        { name: 'children', type: 'string' },
        { name: 'focusable', type: 'boolean' },
        { name: 'show-on-pointer-enter', type: 'boolean' },
        { name: 'visible', type: 'boolean' }
      ]}
      component={(props: AracnaTooltipProps) => (
        <AracnaTooltip {...props} className='group'>
          <AracnaTooltipContent
            className={jec(
              'whitespace-nowrap px-2 py-1 rounded bg-slate-800',
              'transition opacity-0 pointer-events-none group-[&[visible]]:opacity-100 group-[&[visible]]:pointer-events-all'
            )}
            middlewares={[offset(8)]}
          >
            <AracnaTooltipArrow
              className='w-0 h-0'
              style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `6px solid ${colors.slate[800]}` }}
            />
            <span className='text-xs font-medium'>{props.children}</span>
          </AracnaTooltipContent>
          <AracnaTooltipTrigger>
            <IconFeather src={ICON_F_INFO} stroke='white' />
          </AracnaTooltipTrigger>
        </AracnaTooltip>
      )}
      defaultProps={{
        children: 'Tooltip Content',
        focusable: true,
        'show-on-pointer-enter': true
      }}
    />
  )
}
