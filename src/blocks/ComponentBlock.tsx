import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { useAutorun, useObservable } from '@aracna/state-manager-react'
import { Fragment, type ReactNode } from 'react'

interface Attribute {
  name: string
  type: 'color' | 'enum' | 'number' | 'string'
  values?: string[]
}

interface Props {
  attributes?: Attribute[]
  component: (props: any) => ReactNode
  defaultProps?: any
}

export function ComponentBlock(props: Props) {
  const state: Record<string, any> = useObservable(props.attributes?.reduce((r, v) => ({ ...r, [v.name]: undefined }), {}) ?? {})

  useAutorun(() => {
    console.log(state)
    console.log(state.background)
  })

  return (
    <div className='flex p-6 gap-6 rounded border-2 border-dashed border-slate-800'>
      <div className='flex-1'>
        <props.component {...props.defaultProps} {...props} />
      </div>
      <div className='w-1/3 flex flex-col'>
        {props.attributes?.map((attribute) => (
          <Fragment key={attribute.name}>
            {attribute.type === 'color' && <Input path={attribute.name} placeholder={attribute.name} target={state} type='text' />}
            {attribute.type === 'enum' && <Select label={attribute.name} options={attribute.values?.map((value: string) => ({ value }))} />}
            {attribute.type === 'number' && <Input placeholder={attribute.name} type='number' />}
            {attribute.type === 'string' && <Input placeholder={attribute.name} type='text' />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
