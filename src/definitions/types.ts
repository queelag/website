export type CodeRuntimeTemplate = 'html' | 'javascript' | 'node' | 'react' | 'vite' | 'vite-react'

export type ComponentBlockComponentProps<T extends object> = T & {
  _variant?: string
}
