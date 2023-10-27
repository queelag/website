import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaNavigationRailProps } from '@aracna/react'
import { AracnaNavigationRail } from '@aracna/react-components/components/navigation/navigation-rail'

export function NavigationRailComponentBlock() {
  return <ComponentBlock attributes={[]} component={(props: AracnaNavigationRailProps) => <AracnaNavigationRail {...props} />} defaultProps={{}} />
}
