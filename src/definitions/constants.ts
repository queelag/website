import { html } from '@/functions/html'
import type { Project, ProjectDependencies } from '@stackblitz/sdk'
import type { ComponentBlockAttribute } from './interfaces'

/**
 * Header
 */
export const HEADER_HEIGHT: number = 48 + 24 * 2

/**
 * Code Runtime
 */
export const DEFAULT_CODE_RUNTIME_CSS: string = html`
  <style>
    body {
      margin: 0;
    }

    #root {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      justify-content: center;
      min-height: 100vh;
    }
  </style>
`

export const DEFAULT_CODE_RUNTIME_APP_JSX: string = html`
  <script>
    export function App() {
      return null
    }
  </script>
`

export const DEFAULT_CODE_RUNTIME_INDEX_HTML: string = html`<div id="root"></div>`

export const DEFAULT_CODE_RUNTIME_REACT_INDEX_JS: string = html`
  <script>
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'

    import { App } from './App'
    import './index.css'

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  </script>
`

export const DEFAULT_CODE_RUNTIME_VITE_CONFIG_JS: string = html`
  <script>
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()]
    })
  </script>
`

export const DEFAULT_CODE_RUNTIME_VITE_INDEX_HTML: string = html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="./index.js"></script>
    </body>
  </html>
`

export const DEFAULT_CODE_RUNTIME_VITE_PACKAGE_JSON = (dependencies?: ProjectDependencies) =>
  JSON.stringify(
    {
      dependencies: {
        vite: 'latest',
        ...dependencies
      },
      scripts: {
        dev: 'vite'
      }
    },
    null,
    2
  )

export const DEFAULT_CODE_RUNTIME_VITE_REACT_PACKAGE_JSON = (dependencies?: ProjectDependencies) =>
  DEFAULT_CODE_RUNTIME_VITE_PACKAGE_JSON({
    '@vitejs/plugin-react': 'latest',
    react: 'latest',
    'react-dom': 'latest',
    ...dependencies
  })

/**
 * ComponentBlock
 */
export const DEFAULT_COMPONENT_BLOCK_BASE_ELEMENT_ATTRIBUTES: ComponentBlockAttribute[] = [
  { name: 'background', type: 'color' },
  { name: 'padding', type: 'string' },
  { name: 'shape', type: 'enum', options: [{ value: 'circle' }, { value: 'rectangle' }, { value: 'square' }, { value: 'squircle' }] },
  { name: 'shape-rectangle-radius', type: 'number', visible: { shape: ['rectangle'] } },
  { name: 'shape-square-radius', type: 'number', visible: { shape: ['square'] } },
  { name: 'shape-squircle-curvature', type: 'number', visible: { shape: ['squircle'] } },
  { name: 'height', type: 'string' },
  { name: 'width', type: 'string' },
  { name: 'size', type: 'string' }
]

export const DEFAULT_COMPONENT_BLOCK_FOCUS_TRAP_ELEMENT_ATTRIBUTES: ComponentBlockAttribute[] = [
  { name: 'allow-outside-click', type: 'boolean' },
  { name: 'check-can-focus-trap', type: 'json' },
  { name: 'check-can-return-focus', type: 'json' },
  { name: 'click-outside-deactivates', type: 'boolean' },
  { name: 'delay-initial-focus', type: 'boolean' },
  { name: 'display-check', type: 'string' },
  { name: 'escape-deactivates', type: 'boolean' },
  // {name: 'fallback-focus', type: 'json'},
  // {name: 'initial-focus', type: 'json'},
  { name: 'prevent-scroll', type: 'boolean' },
  { name: 'return-focus-on-deactivate', type: 'boolean' }
  // {name: 'set-return-focus', type: 'json'}
]

export const DEFAULT_COMPONENT_BLOCK_FORM_FIELD_ELEMENT_ATTRIBUTES: ComponentBlockAttribute[] = [
  { name: 'disabled', type: 'boolean' },
  // { name: 'focused', type: 'boolean' },
  { name: 'native', type: 'boolean' },
  { name: 'normalized', type: 'boolean' },
  // { name: 'path', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  // { name: 'schema', type: 'json' },
  // { name: 'target', type: 'json' },
  { name: 'touched', type: 'boolean' }
  // { name: 'value', type: 'string' }
]

/**
 * StackBlitz
 */
export const STACK_BLITZ_PROJECT_KEYS: (keyof Project)[] = ['files', 'dependencies', 'description', 'settings', 'tags', 'template', 'title']
