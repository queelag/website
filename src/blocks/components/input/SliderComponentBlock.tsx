import { ComponentBlock } from '@/blocks/ComponentBlock'
import { DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES } from '@/definitions/constants'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import type { ComponentBlockComponentProps } from '@/definitions/types'
import { getLowestNumber, getNumbersDistance, isArray, removeArrayItems } from '@aracna/core'
import { useObservableElementComponent, type AracnaSliderProps, type AracnaSliderThumbProps } from '@aracna/react-components'
import { AracnaSlider, AracnaSliderThumb } from '@aracna/react-components/components/input/slider'
import { jec } from '@aracna/web'
import type { SliderChangeEvent } from '@aracna/web-components'
import { Fragment, useState } from 'react'

function Thumb(props: AracnaSliderThumbProps) {
  return (
    <AracnaSliderThumb
      {...props}
      className={jec(
        'w-4 h-4 rounded-full transition ring-offset-2 ring-offset-black ring-slate-600 bg-slate-700',
        'hover:bg-slate-600 focus:outline-none focus:ring-2 '
      )}
    ></AracnaSliderThumb>
  )
}

export function SliderComponentBlock() {
  return (
    <ComponentBlock
      attributes={[
        ...removeArrayItems(DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES, (_, item: ComponentBlockAttribute) => item.name === 'normalized'),
        { name: 'decimals', type: 'number' },
        { name: 'disable-swap', type: 'boolean' },
        { name: 'max', type: 'number' },
        { name: 'min', type: 'number' },
        { name: 'min-distance', type: 'number' },
        { name: 'orientation', type: 'enum', options: [{ value: 'horizontal' }, { value: 'vertical' }] },
        { name: 'step', type: 'number' }
      ]}
      component={(props: ComponentBlockComponentProps<AracnaSliderProps>) => {
        const { onStateChange, ref } = useObservableElementComponent<'aracna-slider'>({ whitelist: ['value'] })
        const [percentage, setPercentage] = useState<number[]>([25, 75])

        const onSliderChange = (event: SliderChangeEvent) => {
          if (event.detail && isArray(event.detail?.percentage)) {
            setPercentage(event.detail.percentage)
          }
        }

        return (
          <AracnaSlider
            {...props}
            className={jec('group relative flex justify-center items-center', props.orientation === 'horizontal' ? 'w-64 h-4' : 'w-4 h-64')}
            onSliderChange={onSliderChange}
            onStateChange={onStateChange}
            ref={ref}
          >
            <div className={jec('rounded-full bg-slate-800', props.orientation === 'horizontal' ? 'w-full h-1' : 'w-1 h-full')} />
            <Thumb default-value={props._variant === 'single' ? 50 : 25} />
            {props._variant === 'multiple' && (
              <Fragment>
                <Thumb default-value={75} />
                <div
                  className={jec('absolute rounded-full bg-slate-600', props.orientation === 'horizontal' ? 'w-full h-1' : 'w-1 h-full')}
                  style={{
                    bottom: props.orientation === 'vertical' ? getLowestNumber(percentage) + '%' : undefined,
                    height: props.orientation === 'vertical' ? getNumbersDistance(percentage[0], percentage[1]) + '%' : undefined,
                    left: props.orientation === 'horizontal' ? getLowestNumber(percentage) + '%' : undefined,
                    width: props.orientation === 'horizontal' ? getNumbersDistance(percentage[0], percentage[1]) + '%' : undefined
                  }}
                />
              </Fragment>
            )}
          </AracnaSlider>
        )
      }}
      defaultProps={{
        orientation: 'horizontal'
      }}
      variants={[
        { label: 'Single', value: 'single' },
        { label: 'Multiple', value: 'multiple' }
      ]}
    />
  )
}
