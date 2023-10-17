import { useMemo } from 'react'
// import { AracnaLogoDrawing } from './AracnaLogoDrawing'
import DRAWING from '../assets/smiling-spider.png'
import { AracnaLogoText } from './AracnaLogoText'
// import TEXT from '../assets/logo-text.png'

interface Props {
  fill?: string
  hasText?: boolean
}

export function AracnaLogo(props: Props) {
  const fill = useMemo(() => props.fill ?? '#fff', [props.fill])

  return (
    <div className='flex items-center gap-4'>
      {/* <AracnaLogoDrawing className='w-16' fill={fill} /> */}
      <img className='w-10 invert' src={DRAWING.src} />
      {props.hasText && <AracnaLogoText className='w-32 h-auto' fill={fill} />}
      {/* {props.hasText && <img className='w-32' src={TEXT} />} */}
    </div>
  )
}
