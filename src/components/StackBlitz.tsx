import { STACK_BLITZ_PROJECT_KEYS } from '@/definitions/constants'
import type { StackBlitzProps } from '@/definitions/props'
import { getStackBlitzProject, getStackBlitzProjectEmbedOptions, getStackBlitzProjectOpenOptions } from '@/utils/stack-blitz-utils'
import { omitObjectProperties, pickObjectProperties } from '@aracna/core'
import { joinElementClasses } from '@aracna/web'
import SDK, { Project } from '@stackblitz/sdk'
import { useEffect, useMemo, useRef } from 'react'

const KEYS: (keyof StackBlitzProps)[] = [...STACK_BLITZ_PROJECT_KEYS, 'options', 'template']

export function StackBlitz(props: StackBlitzProps) {
  const ref = useRef<HTMLDivElement>(null)
  const options = useMemo(() => {
    switch (props.type) {
      case 'embed':
        return getStackBlitzProjectEmbedOptions(props.template, props.options)
      case 'open':
        return getStackBlitzProjectOpenOptions(props.template, props.options)
    }
  }, [props.options])

  const onClick = () => {
    if (props.type === 'embed') {
      return
    }

    if (props.id) {
      SDK.openProjectId(props.id, options)
    }

    if (props.files && props.template && props.title) {
      SDK.openProject(getStackBlitzProject(props.template, pickObjectProperties(props, STACK_BLITZ_PROJECT_KEYS) as Project), options)
    }
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (props.type === 'open') {
      return
    }

    if (props.id) {
      SDK.embedProjectId(ref.current, props.id, options)
    }

    if (props.files && props.template && props.title) {
      SDK.embedProject(ref.current, getStackBlitzProject(props.template, pickObjectProperties(props, STACK_BLITZ_PROJECT_KEYS) as Project), options)
    }
  }, [])

  return (
    <div {...omitObjectProperties(props, KEYS)} className={joinElementClasses('w-full aspect-video rounded', props.className)} onClick={onClick} ref={ref} />
  )
}
