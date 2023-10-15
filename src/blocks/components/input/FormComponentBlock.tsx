import { ComponentBlock } from '@/blocks/ComponentBlock'
import { useBaseElementComponent, type FormProps, type InputProps } from '@aracna/react'
import { AracnaButton, AracnaInput } from '@aracna/react-components'
import { AracnaForm } from '@aracna/react-components/components/input/form'
import { FormSubmitEvent, joinElementClasses } from '@aracna/web'
import { pattern, size, string } from 'superstruct'
import colors from 'tailwindcss/colors'

function Input(props: InputProps) {
  const { element, ref } = useBaseElementComponent<'aracna-input'>({ state: { dispatch: true } })

  return (
    <div className='flex flex-col gap-1'>
      <AracnaInput
        {...props}
        className={joinElementClasses(
          'group w-full flex items-center font-medium text-xs rounded border-2',
          'transition hover:border-slate-700',
          element?.focused ? 'border-slate-700' : 'border-slate-800'
        )}
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
      component={(props: FormProps) => (
        <AracnaForm {...props} className='w-full' onFormSubmit={onSubmit}>
          <div className='flex flex-col gap-2'>
            <Input placeholder='username' schema={size(string(), 1, 32)} type='text' />
            <Input placeholder='password' schema={pattern(string(), /^[a-zA-Z0-9]{8,}$/)} type='password' />
            <AracnaButton
              background={colors.blue[500]}
              className='self-end mt-4 transition hover:brightness-125 active:brightness-75'
              padding='12px 24px'
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
