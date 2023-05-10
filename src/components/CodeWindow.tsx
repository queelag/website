import { Code } from './Code'

interface Props {
  className?: string
  files: Record<string, string>
  language: string
}

export function CodeWindow(props: Props) {
  return (
    <div className='flex flex-col rounded-3xl shadow-2xl shadow-slate-800 bg-black'>
      <div className='flex px-6 pt-6 gap-2'>
        <div className='w-4 h-4 rounded-full bg-slate-900' />
        <div className='w-4 h-4 rounded-full bg-slate-900' />
        <div className='w-4 h-4 rounded-full bg-slate-900' />
      </div>
      <div className='flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-800'>
        {Object.entries(props.files).map(([name, content]: [string, string]) => (
          <div className='w-full flex flex-col p-6 gap-2'>
            {Object.entries(props.files).length >= 2 && (
              <div className='self-end px-4 py-1 rounded-full bg-slate-900'>
                <span>{name}</span>
              </div>
            )}
            <Code className='text-base' language={props.language}>
              {content}
            </Code>
          </div>
        ))}
      </div>
    </div>
  )
}
