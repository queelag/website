import { ComponentBlock } from '@/blocks/ComponentBlock'
import type { AracnaFormProps, AracnaInputProps } from '@aracna/react-components'
import { useObservableElementComponent } from '@aracna/react-components'
import { AracnaButton } from '@aracna/react-components/components/input/button'
import { AracnaForm } from '@aracna/react-components/components/input/form'
import { AracnaInput } from '@aracna/react-components/components/input/input'
import { jec } from '@aracna/web'
import type { FormSubmitEvent } from '@aracna/web-components'
import type { FormControlValidateEvent } from 'node_modules/@aracna/web-components/events/form-control-validate-event'
import { useState } from 'react'
import { pattern, size, string } from 'superstruct'

function Input(props: AracnaInputProps) {
  const { element, onStateChange, ref } = useObservableElementComponent<'aracna-input'>({ whitelist: ['validation'] })
  const [error, setError] = useState<string>()

  const onValidate = (event: FormControlValidateEvent<any>) => {
    if (event.detail?.touched) {
      setError(event.detail?.error)
    }
  }

  return (
    <div className='flex flex-col gap-1'>
      <AracnaInput
        {...props}
        className={jec(
          'group w-full flex items-center font-medium text-xs rounded border-2',
          'transition hover:border-slate-700',
          element?.focused ? 'border-slate-700' : 'border-slate-800'
        )}
        onFormControlValidate={onValidate}
        onStateChange={onStateChange}
        ref={ref}
      >
        <input className='w-full bg-transparent p-3 outline-none placeholder:text-slate-500' placeholder={props.placeholder} />
      </AracnaInput>
      {error && <span className='font-medium text-[10px] text-red-500'>{error}</span>}
    </div>
  )
}

export function FormComponentBlock() {
  const onSubmit = (event: FormSubmitEvent) => {
    event.detail?.finalize()
  }

  return (
    <ComponentBlock
      attributes={[
        { name: 'async', type: 'boolean' },
        { name: 'disabled', type: 'boolean' },
        { name: 'spinning', type: 'boolean' }
      ]}
      component={(props: AracnaFormProps) => (
        <AracnaForm {...props} className='w-full' onFormSubmit={onSubmit}>
          <form className='w-full flex flex-col gap-2' suppressHydrationWarning>
            <Input placeholder='username' schema={size(string(), 1, 32)} type='text' />
            <Input placeholder='password' schema={pattern(string(), /^[a-zA-Z0-9]{8,}$/)} type='password' />
            <AracnaButton
              async
              className='self-end px-6 py-3 mt-4 transition hover:brightness-125 active:brightness-75 bg-blue-500'
              shape='rectangle'
              shape-rectangle-radius={2}
              type='submit'
            >
              <span className='font-medium text-xs'>Submit</span>
            </AracnaButton>
          </form>
        </AracnaForm>
      )}
      defaultProps={{
        async: true
      }}
    />
  )
}
