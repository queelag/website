import { omitObjectProperties } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check.js'
import { joinElementClasses } from '@aracna/web'

type Props = JSX.IntrinsicElements['div'] & {
  itemElementProps?: JSX.IntrinsicElements['div']
  items: string[]
}

export function CheckedList(props: Props) {
  return (
    <div {...omitObjectProperties(props, ['itemElementProps', 'items'])} className={joinElementClasses('flex flex-col gap-4', props.className)}>
      {props.items.map((item: string) => (
        <div {...props.itemElementProps} className={joinElementClasses('flex items-center gap-4', props.itemElementProps?.className)}>
          <div className='w-8 h-8 flex justify-center items-center rounded-full bg-lime-500'>
            <IconFeatherCheck stroke='white' />
          </div>
          <div className='flex flex-col'>
            <span className='text-2xl'>{item}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
