import { html } from '@/functions/html'
import { Environment, parseNumber } from '@aracna/core'
import SDK, { EmbedOptions, ProjectDependencies, ProjectFiles, ProjectTemplate } from '@stackblitz/sdk'
import { useEffect, useRef } from 'react'

interface Props {
  console?: boolean | number
  dependencies?: ProjectDependencies
  files?: ProjectFiles
  id?: string
  template?: ProjectTemplate
  title?: string
}

const CSS: string = html`
  <style>
    body {
      margin: 0;
    }

    #root {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      height: 100vh;
      justify-content: center;
    }
  </style>
`

export function StackBlitz(props: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let options: EmbedOptions

    if (!ref.current) {
      return
    }

    options = {
      devToolsHeight: props.console === true ? 50 : typeof props.console === 'number' ? props.console : undefined,
      forceEmbedLayout: true,
      height: parseNumber(getComputedStyle(ref.current).width) / (16 / 9),
      hideExplorer: Environment.isProduction,
      hideNavigation: true,
      showSidebar: false,
      theme: 'dark'
    }

    if (props.id) {
      SDK.embedProjectId(ref.current, props.id, options)
    }

    if (props.files && props.template && props.title) {
      let dependencies: ProjectDependencies, files: ProjectFiles

      switch (props.template) {
        case 'create-react-app':
          dependencies = {
            '@types/react': 'latest',
            '@types/react-dom': 'latest'
          }
          files = {
            'App.tsx': html`
              <script>
                import * as React from 'react'

                export default function App() {
                  return null
                }
              </script>
            `,
            'index.css': CSS,
            'index.html': html`<div id="root"></div>`,
            'index.js': html`
              <script>
                import * as React from 'react'
                import { StrictMode } from 'react'
                import { createRoot } from 'react-dom/client'

                import App from './App'
                import './index.css'

                const rootElement = document.getElementById('root')
                const root = createRoot(rootElement)

                root.render(
                  <StrictMode>
                    <App />
                  </StrictMode>
                )
              </script>
            `
          }
          options.openFile = 'App.tsx'

          break
        case 'html':
          dependencies = {}
          files = {
            'index.css': CSS,
            'index.html': ``
          }
          options.openFile = 'index.html'

          break
        case 'node':
          dependencies = {
            vite: 'latest'
          }
          files = {
            'index.css': CSS,
            'index.html': html`
              <!DOCTYPE html>
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
                  <script type="module" src="./index.ts"></script>
                </body>
              </html>
            `,
            'index.ts': '',
            'package.json': JSON.stringify(
              {
                dependencies: {
                  ...dependencies,
                  ...props.dependencies
                },
                scripts: {
                  dev: 'vite'
                }
              },
              null,
              2
            )
          }
          options.startScript = 'dev'

          break
        case 'typescript':
          dependencies = {}
          files = {
            'index.css': CSS,
            'index.html': html`<div id="root"></div>`,
            'index.ts': ``
          }
          options.openFile = 'index.ts'

          break
        default:
          dependencies = {}
          files = {}

          break
      }

      SDK.embedProject(
        ref.current,
        {
          dependencies: { ...dependencies, ...props.dependencies },
          files: { ...files, ...props.files },
          settings: {
            compile: {
              clearConsole: false
            }
          },
          template: props.template,
          title: props.title
        },
        options
      )
    }
  }, [])

  return <div className='rounded' ref={ref}></div>
}
