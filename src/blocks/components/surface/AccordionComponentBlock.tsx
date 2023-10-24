import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaAccordionProps } from '@aracna/react'
import { AracnaAccordion } from '@aracna/react-components/components/surface/accordion'

export function AccordionComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'allow-only-one-expanded-section', type: 'boolean' }]}
      component={(props: AracnaAccordionProps) => <AracnaAccordion {...props} />}
      defaultProps={{}}
    />
  )
}
