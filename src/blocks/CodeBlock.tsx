import { CodeWindow } from '@/components/CodeWindow'
import { STACK_BLITZ_PROJECT_KEYS } from '@/definitions/constants'
import type { StackBlitzProps } from '@/definitions/props'
import { openStackBlitzProject } from '@/utils/stack-blitz-utils'
import { pickObjectProperties } from '@aracna/core'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap'
import type { Project } from '@stackblitz/sdk'

interface Props extends StackBlitzProps {
  disableStackBlitz?: boolean
}

export function CodeBlock(props: Props) {
  const getButtons = () => {
    if (props.disableStackBlitz) {
      return []
    }

    return [
      {
        icon: IconFeatherZap,
        onClick: () => openStackBlitzProject(props.template, pickObjectProperties(props, STACK_BLITZ_PROJECT_KEYS) as Project, props.options)
      }
    ]
  }

  return <CodeWindow {...props} buttons={getButtons()} />
}
