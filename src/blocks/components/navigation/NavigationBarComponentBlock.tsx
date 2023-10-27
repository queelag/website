import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaNavigationBarProps } from '@aracna/react'
import { AracnaNavigationBar } from '@aracna/react-components/components/navigation/navigation-bar'

export function NavigationBarComponentBlock() {
  return <ComponentBlock attributes={[]} component={(props: AracnaNavigationBarProps) => <AracnaNavigationBar {...props} />} defaultProps={{}} />
}
