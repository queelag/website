import type { ButtonGroupProps, ButtonProps } from '@aracna/react'
import { AracnaButtonGroup } from '@aracna/react-components/components/input/button-group.js'
import { AracnaButton } from '@aracna/react-components/components/input/button.js'
import { useState } from 'react'

interface Props extends ButtonGroupProps<ButtonProps> {
  pressed?: number
}

export function ButtonGroup(props: Props) {
  const [pressed, setPressed] = useState<number | undefined>(props.pressed)

  const onClick = (index: number) => {
    setPressed(index)
  }

  return (
    <AracnaButtonGroup className='flex rounded overflow-hidden divide-x divide-black ring-2 ring-slate-800 ring-offset-2 ring-offset-black'>
      {props.buttons?.map((button: ButtonProps, index: number) => (
        <AracnaButton
          {...button}
          className='px-4 py-2 text-xs aria-pressed:bg-slate-800 hover:bg-slate-800'
          onClick={(event: any) => {
            onClick(index)
            button.onClick && button.onClick(event)
          }}
          key={index}
          pressed={index === pressed ? 'true' : 'false'}
        />
      ))}
    </AracnaButtonGroup>
  )
}
