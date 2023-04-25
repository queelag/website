import SDK from '@stackblitz/sdk'
import { useEffect, useRef } from 'react'

interface Props {
  console?: boolean
  id: string
}

export function StackBlitz(props: Props) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    SDK.embedProjectId(ref.current, props.id, {
      devToolsHeight: props.console ? 50 : undefined,
      forceEmbedLayout: true,
      height: 640,
      hideExplorer: true,
      hideNavigation: true,
      openFile: 'index.ts',
      showSidebar: false,
      theme: 'dark'
    })
  }, [])

  return <div className='rounded' ref={ref}></div>
}
