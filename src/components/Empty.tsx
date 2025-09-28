import { ICON_F_INBOX } from '@aracna-icons/feather'
import { jec } from '@aracna/web'
import { IconFeather } from './IconFeather'

type Props = React.JSX.IntrinsicElements['div'] & {
  headline?: string
  text?: string
}

export function Empty(props: Props) {
  return (
    <div className={jec('flex flex-col justify-center items-center', props.className)}>
      <IconFeather className='stroke-zinc-500' size={64} src={ICON_F_INBOX} stroke='inherit' stroke-width={0.5} />
      <div className='flex flex-col text-center'>
        <span>{props.headline ?? 'Empty'}</span>
        {props.text && <span className='text-xs text-zinc-300'>{props.text}</span>}
      </div>
    </div>
  )
}
