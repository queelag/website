import { IconFeatherClipboard } from '@aracna/icons-feather-react/components/clipboard.js'
import { AracnaButton } from '@aracna/react-components/components/input/button.js'
import { joinElementClasses } from '@aracna/web'
import { useMemo, type ReactNode } from 'react'
import { Code } from './Code'

interface Button {
  icon: any
  onClick: () => any
}

interface Props {
  buttons?: Button[]
  children?: ReactNode
  className?: string
  files?: Record<string, string>
  language: string
}

export function CodeWindow(props: Props) {
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
      {props.children && (
        <Code className='p-6 text-sm' language={props.language}>
          {props.children}
        </Code>
      )}
      {props.files && (
        <div className='flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-800'>
          {Object.entries(props.files).map(([name, content]: [string, string]) => (
            <div className='w-full flex flex-col p-6 gap-2' key={name}>
              {props.files && Object.entries(props.files).length >= 2 && (
                <div className='self-end px-4 py-1 rounded-full bg-slate-900'>
                  <span>{name}</span>
                </div>
              )}
              <Code className='text-sm' language={props.language}>
                {content}
              </Code>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
