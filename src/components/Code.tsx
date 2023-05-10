import { omitObjectProperties } from '@aracna/core'
import { joinElementClasses } from '@aracna/web'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.min.js'
import { useEffect, useRef } from 'react'
import './Code.css'

Prism.manual = true

type Props = JSX.IntrinsicElements['pre'] & {
  code?: JSX.IntrinsicElements['code']
  language: string
}

export function Code(props: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    Prism.highlightElement(ref.current)
  }, [])

  return (
    <pre {...omitObjectProperties(props, ['code', 'language'])}>
      <code {...props.code} className={joinElementClasses(`language-${props.language}`, props.code?.className)} ref={ref}>
        {props.children}
      </code>
    </pre>
  )
}