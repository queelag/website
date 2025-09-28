import { CodeWindow } from '@/components/CodeWindow'
import { ICON_F_GIT_BRANCH } from '@aracna-icons/feather'
import { useState } from 'react'

interface Props {
  className?: string
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
          icon: ICON_F_GIT_BRANCH,
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

  return <CodeWindow buttons={getButtons()} className={props.className} files={getFiles()} language='bash' />
}
