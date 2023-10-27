import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaTabsProps } from '@aracna/react'
import { AracnaTabs } from '@aracna/react-components/components/navigation/tabs'

export function TabsComponentBlock() {
  return <ComponentBlock attributes={[]} component={(props: AracnaTabsProps) => <AracnaTabs {...props} />} defaultProps={{}} />
}
