import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { InputCheckBox } from '@/components/InputCheckBox'
import { Select } from '@/components/Select'
import type { ComponentBlockAttribute } from '@/definitions/interfaces'
import { cloneShallowObject } from '@aracna/core'
import { Observer, useAutorun, useObservable } from '@aracna/state-manager-react'
import { Fragment, type ReactNode } from 'react'

interface Props {
  attributes?: ComponentBlockAttribute[]
  component: (props: any) => ReactNode
  defaultProps?: any
}

export function ComponentBlock(props: Props) {
  const state: Record<string, any> = useObservable(props.attributes?.reduce((r, v) => ({ ...r, [v.name]: props.defaultProps[v.name] }), {}) ?? {})

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

  useAutorun(() => {
    console.log(JSON.stringify(deleteShallowFalsyObjectProperties(state)))
  })

  return (
    <div className='flex p-6 gap-6 rounded border-2 border-dashed border-slate-800'>
      <div className='flex-1 flex justify-center items-center'>
        <Observer>{() => <props.component {...props.defaultProps} {...deleteShallowFalsyObjectProperties(state)} />}</Observer>
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
                    options={attribute.values?.map((value: string) => ({ value }))}
                    placeholder={attribute.values?.join(' | ')}
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
  )
}
