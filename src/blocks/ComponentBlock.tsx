import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { cloneShallowObject } from '@aracna/core'
import { useObservable } from '@aracna/state-manager-react'
import { Fragment, type ReactNode } from 'react'

interface Attribute {
  name: string
  type: 'color' | 'enum' | 'number' | 'string'
  values?: string[]
  visible?: [string, string][]
}

interface Props {
  attributes?: Attribute[]
  component: (props: any) => ReactNode
  defaultProps?: any
}

export function ComponentBlock(props: Props) {
  const state: Record<string, any> = useObservable(props.attributes?.reduce((r, v) => ({ ...r, [v.name]: props.defaultProps[v.name] }), {}) ?? {})

  const deleteShallowFalsyObjectProperties = <T extends object>(object: T) => {
    let clone = cloneShallowObject(object)

    for (let k in clone) {
      if (!Boolean(clone[k])) {
        delete clone[k]
      }
    }

    return clone
  }

  return (
    <div className='flex p-6 gap-6 rounded border-2 border-dashed border-slate-800'>
      <div className='flex-1 flex justify-center items-center'>
        <props.component {...props.defaultProps} {...deleteShallowFalsyObjectProperties(state)} />
      </div>
      <Form className='w-1/3'>
        <div className='flex flex-col gap-2'>
          {props.attributes
            ?.filter((attribute: Attribute) =>
              attribute.visible?.length ? attribute.visible.some(([key, value]: [string, string]) => state[key] === value) : true
            )
            .map((attribute: Attribute) => (
              <Fragment key={attribute.name}>
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
