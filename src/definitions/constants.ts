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
  { name: 'shape', type: 'enum', values: ['circle', 'rectangle', 'square', 'squircle'] },
  { name: 'shape-rectangle-radius', type: 'number', visible: { shape: ['rectangle'] } },
  { name: 'shape-square-radius', type: 'number', visible: { shape: ['square'] } },
  { name: 'shape-squircle-curvature', type: 'number', visible: { shape: ['squircle'] } },
  { name: 'height', type: 'string' },
  { name: 'width', type: 'string' },
  { name: 'size', type: 'string' }
]

/**
 * StackBlitz
 */
export const STACK_BLITZ_PROJECT_KEYS: (keyof Project)[] = ['files', 'dependencies', 'description', 'settings', 'tags', 'template', 'title']
