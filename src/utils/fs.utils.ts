import { getCapitalizedString } from '@aracna/core'

export function mapDirName(name: string): string {
  switch (name) {
    case 'state-manager':
      return 'State Manager'
    default:
      return getCapitalizedString(name)
  }
}
