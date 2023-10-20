import { ComponentBlock } from '@/blocks/ComponentBlock'
import { useObservableElementComponent, type AracnaFormProps, type AracnaInputProps } from '@aracna/react'
import { AracnaButton, AracnaInput } from '@aracna/react-components'
import { AracnaForm } from '@aracna/react-components/components/input/form'
import { FormSubmitEvent, joinElementClasses } from '@aracna/web'
import { pattern, size, string } from 'superstruct'

function Input(props: AracnaInputProps) {
  const { element, onStateChange, ref } = useObservableElementComponent<'aracna-input'>()

  return (
    <div className='flex flex-col gap-1'>
      <AracnaInput
        {...props}
        className={joinElementClasses(
          'group w-full flex items-center font-medium text-xs rounded border-2',
          'transition hover:border-slate-700',
          element?.focused ? 'border-slate-700' : 'border-slate-800'
        )}
        onStateChange={onStateChange}
        padding='12px'
        ref={ref}
        normalized
      />
      {element?.isErrorVisible && <span className='font-medium text-[10px] text-red-500'>{element?.error}</span>}
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
          <div className='flex flex-col gap-2'>
            <Input placeholder='username' schema={size(string(), 1, 32)} type='text' />
            <Input placeholder='password' schema={pattern(string(), /^[a-zA-Z0-9]{8,}$/)} type='password' />
            <AracnaButton
              className='self-end px-6 py-3 mt-4 transition hover:brightness-125 active:brightness-75 bg-blue-500'
              shape='rectangle'
              shape-rectangle-radius={2}
              type='submit'
            >
              <span className='font-medium text-xs'>Submit</span>
            </AracnaButton>
          </div>
        </AracnaForm>
      )}
      defaultProps={{
        async: true
      }}
    />
  )
}
