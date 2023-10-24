import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaDisclosureProps } from '@aracna/react'
import { AracnaDisclosure } from '@aracna/react-components/components/surface/disclosure'

export function DisclosureComponentBlock() {
  return <ComponentBlock component={(props: AracnaDisclosureProps) => <AracnaDisclosure {...props} />} defaultProps={{}} />
}
