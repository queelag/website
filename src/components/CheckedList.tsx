import { omitObjectProperties } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check'
import { joinElementClasses } from '@aracna/web'

type Props = JSX.IntrinsicElements['div'] & {
  itemElementProps?: JSX.IntrinsicElements['div']
  items: string[]
}

export function CheckedList(props: Props) {
  return (
    <div {...omitObjectProperties(props, ['itemElementProps', 'items'])} className={joinElementClasses('flex flex-col gap-2 prose-not', props.className)}>
      {props.items.map((item: string) => (
        <div {...props.itemElementProps} className={joinElementClasses('flex items-center gap-3', props.itemElementProps?.className)} key={item}>
          <div className='w-6 h-6 flex justify-center items-center rounded-full bg-lime-500'>
            <IconFeatherCheck size={12} stroke='white' stroke-width={3} />
          </div>
          <div className='flex flex-col'>
            <span className='font-medium text-white'>{item}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
