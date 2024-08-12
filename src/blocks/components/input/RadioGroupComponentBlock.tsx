import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute, RadioButton } from '@/definitions/interfaces'
import { removeArrayItems } from '@aracna/core'
import { useObservableElementComponent, type AracnaRadioGroupProps } from '@aracna/react-components'
import { AracnaRadioButton, AracnaRadioGroup } from '@aracna/react-components/components/input/radio-group'
import { jec } from '@aracna/web'

const BUTTONS: RadioButton[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Prefer not to say', value: 'prefer-not-to-say' }
]

export function RadioGroupComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'normalized'),
        { name: 'buttons', type: 'json' }
      ]}
      component={(props: AracnaRadioGroupProps<RadioButton>) => {
        const { element, ref } = useObservableElementComponent<'aracna-radio-group'>()

        return (
          <AracnaRadioGroup {...props} className='flex flex-col' ref={ref}>
            <div className='flex flex-col gap-1'>
              {element?.buttons?.map((button: RadioButton) => (
                <AracnaRadioButton
                  className={jec(
                    'group w-64 flex justify-between items-center p-4 rounded border-2 border-slate-800',
                    'transition hover:border-slate-700 aria-checked:bg-slate-900',
                    'focus:outline-none focus:border-slate-700'
                  )}
                  key={button.value}
                  value={button.value}
                >
                  <span className='text-xs font-medium'>{button.label}</span>
                  <div
                    className={jec(
                      'w-3 h-3 rounded-full ring-2 ring-offset-2 ring-slate-800 ring-offset-black',
                      'group-aria-checked:ring-slate-700 group-aria-checked:bg-slate-700'
                    )}
                  ></div>
                </AracnaRadioButton>
              ))}
            </div>
          </AracnaRadioGroup>
        )
      }}
      defaultProps={{
        buttons: JSON.stringify(BUTTONS) as any
      }}
    />
  )
}
