import { CodeWindow } from '@/components/CodeWindow'
import { IconFeatherGitBranch } from '@aracna/icons-feather-react/components/git-branch'
import { useState } from 'react'

interface Props {
  install?: {
    dependencies?: string[]
    package: string
  }
}

export function PackageManagerBlock(props: Props) {
  const [installWithDependencies, setInstallWithDependencies] = useState<boolean>(false)

  const getButtons = () => {
    if (props.install && props.install.dependencies) {
      return [
        {
          icon: IconFeatherGitBranch,
          onClick: () => setInstallWithDependencies((v: boolean) => !v)
        }
      ]
    }

    return undefined
  }

  const getFiles = (): Record<string, string> => {
    if (props.install) {
      if (installWithDependencies) {
        return {
          npm: `npm install ${props.install.dependencies?.join(' ')} ${props.install.package}`,
          yarn: `yarn add ${props.install.dependencies?.join(' ')} ${props.install.package}`,
          pnpm: `pnpm add ${props.install.dependencies?.join(' ')} ${props.install.package}`
        }
      }

      return {
        npm: `npm install ${props.install.package}`,
        yarn: `yarn add ${props.install.package}`,
        pnpm: `pnpm add ${props.install.package}`
      }
    }

    return {}
  }

  return <CodeWindow buttons={getButtons()} files={getFiles()} language='bash' />
}
