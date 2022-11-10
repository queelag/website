import { QAvatar, QImage } from '@queelag/react-components'
import type { AvatarElement } from '@queelag/web-components/elements/data/avatar.element'
import { useEffect, useRef, useState } from 'preact/hooks'

export function Avatar() {
  const [size, setSize] = useState(24)
  const ref = useRef<AvatarElement>(null)

  useEffect(() => {
    if (!ref.current) return

    console.log(ref.current)
    ref.current.addEventListener('attribute-change', (event) => console.log('effect', event))

    setTimeout(() => {
      if (!ref.current) return

      ref.current.size = 48
    }, 1000)
  }, [])

  return (
    <QAvatar onAttributeChange={(event) => console.log('render', event)} ref={ref} shape='circle' size={24}>
      <QImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg' />
    </QAvatar>
  )
}
