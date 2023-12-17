import { IconFeatherInbox } from '@aracna/icons-feather-react/components/inbox'
import { joinElementClasses } from '@aracna/web'

type Props = JSX.IntrinsicElements['div'] & {
  headline?: string
  text?: string
}

export function Empty(props: Props) {
  return (
    <div className={joinElementClasses('flex flex-col justify-center items-center', props.className)}>
      <IconFeatherInbox className='stroke-slate-500' size={64} stroke='inherit' stroke-width={0.5} />
      <div className='flex flex-col gap-1 text-center'>
        <span>{props.headline ?? 'Empty'}</span>
        {props.text && <span className='text-xs text-slate-300'>{props.text}</span>}
      </div>
    </div>
  )
}
