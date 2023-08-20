import { getArrayLastItem } from '@aracna/core'
import { IconFeatherClipboard } from '@aracna/icons-feather-react/components/clipboard.js'
import { AracnaButton } from '@aracna/react-components/components/input/button.js'
import { joinElementClasses } from '@aracna/web'
import { Fragment, useMemo, useState, type ReactNode } from 'react'
import { Code } from './Code'

interface Button {
  icon: any
  onClick: () => any
}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  buttons?: Button[]
  children?: ReactNode
  files?: Record<string, string>
  language?: string
}

export function CodeWindow(props: Props) {
  const [active, setActive] = useState<number>(0)
  const buttons = useMemo(
    () => [
      ...(props.buttons ?? []),
      {
        icon: IconFeatherClipboard,
        onClick: () => {
          let code: HTMLElement | null

          code = document.querySelector('code')
          if (!code) return

          navigator.clipboard.writeText(code.innerText)
        }
      }
    ],
    [props.buttons]
  )

  const getLanguage = (name: string): string => {
    let extension: string | undefined

    extension = getArrayLastItem(name.split('.'))
    if (!extension) return ''

    switch (extension) {
      case 'html':
        return 'html'
      case 'js':
        return 'javascript'
      case 'jsx':
        return 'jsx'
    }

    return ''
  }

  const onClickFile = (index: number) => {
    setActive(index)
  }

  return (
    <div className={joinElementClasses('not-prose flex flex-col rounded border-2 border-slate-800', props.className)}>
      <div className='flex justify-between items-center px-6 pt-6'>
        <div className='flex gap-2'>
          <div className='w-4 h-4 rounded-full bg-slate-900' />
          <div className='w-4 h-4 rounded-full bg-slate-900' />
          <div className='w-4 h-4 rounded-full bg-slate-900' />
        </div>
        <div className='flex items-center gap-3'>
          {buttons.map((button: Button) => (
            <AracnaButton
              className='rounded-full transition ring-slate-700 hover:ring-8 hover:bg-slate-700 active:ring-4'
              key={button.onClick.toString()}
              onClick={button.onClick}
            >
              <button.icon stroke='white' />
            </AracnaButton>
          ))}
        </div>
      </div>
      {props.children && props.language && (
        <Code className='p-6 text-sm' language={props.language}>
          {props.children}
        </Code>
      )}
      {props.files && (
        <Fragment>
          <Code className='p-6 text-sm' language={getLanguage(Object.keys(props.files)[active])}>
            {Object.values(props.files)[active]}
          </Code>
          {Object.keys(props.files).length >= 2 && (
            <div className='self-end flex px-6 pb-6'>
              <div className='flex rounded overflow-hidden divide-x divide-black ring-2 ring-slate-800 ring-offset-2 ring-offset-black'>
                {Object.keys(props.files).map((name: string, index: number) => (
                  <AracnaButton
                    className={joinElementClasses('px-4 py-2 hover:bg-slate-800', index === active && 'bg-slate-900')}
                    key={name}
                    onClick={() => onClickFile(index)}
                  >
                    <span className='text-xs'>{name}</span>
                  </AracnaButton>
                ))}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  )
}
