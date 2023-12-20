import type { CodeWindowButton, CodeWindowProps } from '@/definitions/props'
import { getArrayLastItem } from '@aracna/core'
import { IconFeatherClipboard } from '@aracna/icons-feather-react/components/clipboard'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { joinElementClasses } from '@aracna/web'
import { Fragment, useMemo, useState } from 'react'
import { ButtonGroup } from './ButtonGroup'
import { Code } from './Code'

export function CodeWindow(props: CodeWindowProps) {
  const [activeFile, setActiveFile] = useState<string>(props.activeFile ?? Object.keys(props.files ?? [])[0])
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

    if (props.language) {
      return props.language
    }

    extension = getArrayLastItem(name.split('.'))
    if (!extension) return ''

    switch (extension) {
      case 'css':
        return 'css'
      case 'html':
        return 'html'
      case 'js':
        return 'javascript'
      case 'jsx':
        return 'jsx'
    }

    return ''
  }

  const onClickFile = (file: string) => {
    setActiveFile(file)
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
          {buttons.map((button: CodeWindowButton) => (
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
          <Code className='p-6 text-sm' language={getLanguage(activeFile)}>
            {Object.entries(props.files).find(([name, _]) => name === activeFile)?.[1]}
          </Code>
          {Object.keys(props.files).length >= 2 && (
            <div className='self-end flex px-6 pb-6'>
              <ButtonGroup
                buttons={Object.keys(props.files).map((name: string) => ({
                  children: name,
                  onClick: () => onClickFile(name),
                  pressed: name === activeFile ? 'true' : 'false'
                }))}
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  )
}
