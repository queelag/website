import { ButtonGroup } from '@/components/ButtonGroup'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { InputCheckBox } from '@/components/InputCheckBox'
import { Select } from '@/components/Select'
import type { ComponentBlockAttribute, ComponentBlockVariant } from '@/definitions/interfaces'
import { cloneShallowObject } from '@aracna/core'
import { Observer, useObservable } from '@aracna/state-manager-react'
import type { SelectOption } from '@aracna/web'
import { Fragment, useState, type ReactNode } from 'react'

interface Props {
  attributes?: ComponentBlockAttribute[]
  component: (props: any) => ReactNode
  defaultProps?: any
  variants?: ComponentBlockVariant[]
}

export function ComponentBlock(props: Props) {
  const state: Record<string, any> = useObservable(props.attributes?.reduce((r, v) => ({ ...r, [v.name]: props.defaultProps[v.name] }), {}) ?? {})
  const [activeVariant, setActiveVariant] = useState<ComponentBlockVariant | undefined>(props.variants?.[0])

  const deleteShallowFalsyObjectProperties = <T extends object>(object: T) => {
    let clone = cloneShallowObject(object)

    for (let k in clone) {
      if (clone[k] === false) {
        clone[k] = undefined as any
        continue
      }

      if (!Boolean(clone[k])) {
        delete clone[k]
      }
    }

    return clone
  }

  const onClickVariant = (variant: ComponentBlockVariant) => {
    setActiveVariant(cloneShallowObject(variant))
  }

  return (
    <div className='flex flex-col p-6 gap-6 rounded border-2 border-dashed border-slate-800'>
      <div className='flex gap-6'>
        <div className='flex-1 flex justify-center items-center'>
          <Observer>{() => <props.component {...state} _variant={activeVariant?.value} />}</Observer>
        </div>
        <Form className='w-1/3'>
          <div className='flex flex-col gap-2'>
            {props.attributes
              ?.filter((attribute: ComponentBlockAttribute) =>
                attribute.visible ? Object.entries(attribute.visible).some(([key, values]: [string, any[]]) => values.includes(state[key])) : true
              )
              .map((attribute: ComponentBlockAttribute) => (
                <Fragment key={attribute.name}>
                  {attribute.type === 'boolean' && <InputCheckBox label={attribute.name} path={attribute.name} placeholder='boolean' target={state} />}
                  {attribute.type === 'color' && <Input label={attribute.name} path={attribute.name} placeholder='color' target={state} type='color' />}
                  {attribute.type === 'enum' && (
                    <Select
                      label={attribute.name}
                      path={attribute.name}
                      options={attribute.options}
                      placeholder={attribute.options?.map((option: SelectOption) => option.label ?? option.value).join(' | ')}
                      target={state}
                    />
                  )}
                  {attribute.type === 'number' && <Input label={attribute.name} path={attribute.name} placeholder='number' target={state} type='number' />}
                  {attribute.type === 'string' && <Input label={attribute.name} path={attribute.name} placeholder='string' target={state} type='text' />}
                </Fragment>
              ))}
          </div>
        </Form>
      </div>
      {props.variants && (
        <div className='flex justify-end'>
          <ButtonGroup
            buttons={props.variants.map((variant: ComponentBlockVariant) => ({
              children: variant.label,
              onClick: () => onClickVariant(variant),
              pressed: variant.value === activeVariant?.value ? 'true' : 'false'
            }))}
          />
        </div>
      )}
    </div>
  )
}
