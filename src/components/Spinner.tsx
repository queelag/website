import { jec } from '@aracna/web'
import type { Size } from '@aracna/web-components'

type Props = React.JSX.IntrinsicElements['svg'] & {
  size?: Size
}

export function Spinner(props: Props) {
  return (
    <svg
      {...props}
      className={jec('animate-spin', props.className)}
      height={props.height ?? props.size ?? 16}
      strokeWidth={props.strokeWidth ?? 4}
      viewBox='0 0 100 100'
      width={props.width ?? props.size ?? 16}
    >
      <path
        d='M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94'
        fill='none'
        stroke='inherit'
        strokeDasharray={295.416}
        strokeDashoffset={(295.416 / 100) * 25}
        strokeLinecap='round'
        strokeWidth='inherit'
      />
    </svg>
  )
}
