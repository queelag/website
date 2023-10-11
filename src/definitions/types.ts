export type CodeRuntimeTemplate = 'javascript' | 'html' | 'react' | 'vite' | 'vite-react'

export type ComponentBlockComponentProps<T extends object> = T & {
  _variant?: string
}
