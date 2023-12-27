import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeatherInfo } from '@aracna/icons-feather-react/components/info'
import type { AracnaTooltipProps } from '@aracna/react'
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
        { name: 'show-on-mouse-enter', type: 'boolean' },
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
            <span className='text-xs font-medium'>{props.children}</span>
            <AracnaTooltipArrow
              className='w-0 h-0'
              style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `6px solid ${colors.slate[800]}` }}
            />
          </AracnaTooltipContent>
          <AracnaTooltipTrigger>
            <IconFeatherInfo stroke='white' />
          </AracnaTooltipTrigger>
        </AracnaTooltip>
      )}
      defaultProps={{
        children: 'Tooltip Content',
        focusable: true,
        'show-on-mouse-enter': true
      }}
    />
  )
}
