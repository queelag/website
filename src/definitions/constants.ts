import { html } from '@/functions/html'
import type { Project, ProjectDependencies } from '@stackblitz/sdk'
import type { ComponentBlockAttribute } from './interfaces'

/**
 * Colors
 */
export const COLOR_AMBER: Record<number, string> = {
  50: '#ffffea',
  100: '#fffbc5',
  200: '#fff885',
  300: '#ffee46',
  400: '#ffdf1b',
  500: '#ffc001',
  600: '#e29400',
  700: '#bb6902',
  800: '#985108',
  900: '#7c420b',
  950: '#482200'
}
export const COLOR_BLUE: Record<number, string> = {
  50: '#eff4ff',
  100: '#dce7fd',
  200: '#c0d5fd',
  300: '#95bbfb',
  400: '#6296f8',
  500: '#4c7bf4',
  600: '#2851e8',
  700: '#203dd5',
  800: '#2033ad',
  900: '#203188',
  950: '#182053'
}
export const COLOR_MINT: Record<number, string> = {
  50: '#effef4',
  100: '#dbfde6',
  200: '#b8facd',
  300: '#90f5b2',
  400: '#43e57a',
  500: '#1bcc58',
  600: '#10a944',
  700: '#108539',
  800: '#126931',
  900: '#11562a',
  950: '#033015'
}
export const COLOR_ROSE: Record<number, string> = {
  50: '#fff0f8',
  100: '#ffe3f4',
  200: '#ffc6e8',
  300: '#ff98d3',
  400: '#ff58b5',
  500: '#ff2796',
  600: '#ff1479',
  700: '#df0054',
  800: '#b80045',
  900: '#98033d',
  950: '#5f0020'
}
export const COLOR_SEANCE: Record<number, string> = {
  50: '#f6f3ff',
  100: '#efe8ff',
  200: '#e1d4ff',
  300: '#cbb2ff',
  400: '#b386ff',
  500: '#9c56fc',
  600: '#9133f4',
  700: '#8121e0',
  800: '#6519af',
  900: '#5a189a',
  950: '#380d68'
}

/**
 * Header
 */
export const HEADER_HEIGHT: number = 48 + 24 * 2

/**
 * Code Runtime
 */

export const DEFAULT_CODE_RUNTIME_APP_JSX: string = html`
  <script>
    export function App() {
      return null
    }
  </script>
`

export const DEFAULT_CODE_RUNTIME_INDEX_CSS: string = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
      box-sizing: border-box;
    }

    body {
      align-items: center;
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', sans-serif;
      gap: 4px;
      justify-content: center;
      min-height: 100vh;
    }
  </style>
`

export const DEFAULT_CODE_RUNTIME_INDEX_HTML: string = html`<div id="root"></div>`

export const DEFAULT_CODE_RUNTIME_INDEX_JS: string = html`
  <script>
    import './index.css'
    import './app.css'
    import './app.js'
  </script>
`

export const DEFAULT_CODE_RUNTIME_REACT_INDEX_CSS: string = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Roboto', sans-serif;
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

export const DEFAULT_CODE_RUNTIME_REACT_INDEX_JS: string = html`
  <script>
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'

    import { App } from './App'
    import './App.css'
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
  { name: 'height', type: 'string' },
  { name: 'shape', type: 'enum', options: [{ value: 'circle' }, { value: 'rectangle' }, { value: 'square' }, { value: 'squircle' }] },
  { name: 'shape-rectangle-radius', type: 'number', visible: { shape: ['rectangle'] } },
  { name: 'shape-square-radius', type: 'number', visible: { shape: ['square'] } },
  { name: 'shape-squircle-curvature', type: 'number', visible: { shape: ['squircle'] } },
  { name: 'size', type: 'string' },
  { name: 'width', type: 'string' }
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
