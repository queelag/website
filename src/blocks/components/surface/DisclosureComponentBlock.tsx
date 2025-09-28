import { ComponentBlock } from '@/blocks/ComponentBlock'
import { IconFeather } from '@/components/IconFeather'
import { ICON_F_CHEVRON_DOWN } from '@aracna-icons/feather'
import type { AracnaDisclosureProps } from '@aracna/react-components'
import {
  AracnaDisclosure,
  AracnaDisclosureButton,
  AracnaDisclosurePanel,
  AracnaDisclosureSection
} from '@aracna/react-components/components/surface/disclosure'
import { jec } from '@aracna/web'

const SECTIONS = [
  {
    headline: 'The Benefits of Regular Exercise',
    text: 'Regular exercise has many benefits for both the body and mind. It can help you maintain a healthy weight, reduce your risk of chronic diseases, improve your mood, and boost your energy levels.'
  },
  {
    headline: 'The Importance of a Balanced Diet',
    text: 'Eating a balanced diet is essential for good health. It can help you maintain a healthy weight, reduce your risk of chronic diseases, and provide your body with the nutrients it needs to function properly.'
  },
  {
    headline: 'The Dangers of Smoking',
    text: 'Smoking is a leading cause of preventable death worldwide. It can increase your risk of lung cancer, heart disease, stroke, and respiratory infections. Quitting smoking can greatly improve your health and quality of life.'
  },
  {
    headline: 'The Benefits of Meditation',
    text: 'Meditation has been shown to have many benefits for both the body and mind. It can help reduce stress and anxiety, improve sleep quality, and increase feelings of well-being and happiness.'
  }
]

export function DisclosureComponentBlock() {
  return (
    <ComponentBlock
      attributes={[{ name: 'sections', type: 'json' }]}
      component={(props: AracnaDisclosureProps) => (
        <AracnaDisclosure {...props} className={jec('w-full flex flex-col rounded divide-y-2 border-2 border-slate-800 divide-slate-800', props.className)}>
          {props.sections?.map((section) => (
            <AracnaDisclosureSection key={section.headline} className='group flex flex-col'>
              <AracnaDisclosureButton className='w-full flex justify-between items-center p-3 hover:bg-slate-900'>
                <span className='text-sm text-white'>{section.headline}</span>
                <IconFeather className='transition group-[&[expanded]]:rotate-180' src={ICON_F_CHEVRON_DOWN} stroke='white' />
              </AracnaDisclosureButton>
              <AracnaDisclosurePanel className='hidden group-[&[expanded]]:block p-3 pt-0'>
                <span className='inline-flex text-xs'>{section.text}</span>
              </AracnaDisclosurePanel>
            </AracnaDisclosureSection>
          ))}
        </AracnaDisclosure>
      )}
      defaultProps={{
        sections: JSON.stringify(SECTIONS) as any
      }}
    />
  )
}
