import { CodeWindow } from '@/components/CodeWindow'
import { STACK_BLITZ_PROJECT_KEYS } from '@/definitions/constants'
import type { StackBlitzProps } from '@/definitions/props'
import { openStackBlitzProject } from '@/utils/stack-blitz-utils'
import { ICON_F_ZAP } from '@aracna-icons/feather'
import { pickObjectProperties } from '@aracna/core'
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
        icon: ICON_F_ZAP,
        onClick: () => openStackBlitzProject(props.template, pickObjectProperties(props, STACK_BLITZ_PROJECT_KEYS) as Project, props.options)
      }
    ]
  }

  return <CodeWindow {...props} buttons={getButtons()} />
}
