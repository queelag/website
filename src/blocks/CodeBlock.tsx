import { CodeWindow } from '@/components/CodeWindow'
import { STACK_BLITZ_PROJECT_KEYS } from '@/definitions/constants'
import type { StackBlitzProps } from '@/definitions/props'
import { openStackBlitzProject } from '@/utils/stack-blitz-utils'
import { pickObjectProperties } from '@aracna/core'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import type { Project } from '@stackblitz/sdk'

interface Props extends StackBlitzProps {}

export function CodeBlock(props: Props) {
  return (
    <CodeWindow
      {...props}
      buttons={[
        {
          icon: IconFeatherZap,
          onClick: () => openStackBlitzProject(props.template, pickObjectProperties(props, STACK_BLITZ_PROJECT_KEYS) as Project, props.options)
        }
      ]}
    />
  )
}
