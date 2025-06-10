import { omitObjectProperties } from '@aracna/core'
import { IconFeatherCheck } from '@aracna/icons-feather-react/components/check'
import { jec } from '@aracna/web'

type Props = React.JSX.IntrinsicElements['div'] & {
  itemElementProps?: React.JSX.IntrinsicElements['div']
  items: string[]
}

export function CheckedList(props: Props) {
  return (
    <div {...omitObjectProperties(props, ['itemElementProps', 'items'])} className={jec('flex flex-col gap-2 prose-not', props.className)}>
      {props.items.map((item: string) => (
        <div {...props.itemElementProps} className={jec('flex items-center gap-3', props.itemElementProps?.className)} key={item}>
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
