import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaMenuProps } from '@aracna/react'
import { AracnaMenu } from '@aracna/react-components/components/navigation/menu'

export function MenuComponentBlock() {
  return <ComponentBlock attributes={[]} component={(props: AracnaMenuProps) => <AracnaMenu {...props}></AracnaMenu>} defaultProps={{}} />
}
