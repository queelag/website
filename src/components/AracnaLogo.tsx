import { useMemo } from 'react'
// import { AracnaLogoDrawing } from './AracnaLogoDrawing'
// import { AracnaLogoText } from './AracnaLogoText'
import DRAWING from '../assets/logo-drawing.png'
import TEXT from '../assets/logo-text.png'

interface Props {
  fill?: string
  hasText?: boolean
}

export function AracnaLogo(props: Props) {
  const fill = useMemo(() => props.fill ?? 'white', [props.fill])

  return (
    <div className='flex items-center gap-4 invert'>
      {/* <AracnaLogoDrawing className='w-16' fill={fill} />
      {props.hasText && <AracnaLogoText className='w-32' fill={fill} />} */}
      <img className='w-16' src={DRAWING} />
      {props.hasText && <img className='w-32' src={TEXT} />}
    </div>
  )
}
