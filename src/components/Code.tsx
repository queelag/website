import { omitObjectProperties } from '@aracna/core'
import { jec } from '@aracna/web'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-css.min.js'
import 'prismjs/components/prism-javascript.min.js'
import 'prismjs/components/prism-jsx.min.js'
import { useEffect, useRef } from 'react'
import './Code.css'

Prism.manual = true

type Props = React.JSX.IntrinsicElements['pre'] & {
  code?: React.JSX.IntrinsicElements['code']
  language: string
}

export function Code(props: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    Prism.highlightElement(ref.current)
  }, [props.children, props.code, props.language, ref.current])

  return (
    <pre {...omitObjectProperties(props, ['code', 'language'])}>
      <code {...props.code} className={jec(`language-${props.language}`, props.code?.className)} ref={ref}>
        {props.children}
      </code>
    </pre>
  )
}
