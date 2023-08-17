import { html } from '@/functions/html'
import { Environment } from '@aracna/core'
import { IconFeatherZap } from '@aracna/icons-feather-react/components/zap.js'
import { joinElementClasses } from '@aracna/web'
import SDK, { EmbedOptions, OpenFileOption, ProjectDependencies, ProjectFiles, ProjectTemplate, UiViewOption } from '@stackblitz/sdk'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CodeWindow } from './CodeWindow'

type Template = 'javascript' | 'html' | 'react' | 'vite' | 'vite-react'

interface Props {
  className?: string
  console?: boolean | number
  dependencies?: ProjectDependencies
  files: ProjectFiles
  hideExplorer?: boolean
  id?: string
  openFile?: OpenFileOption
  template: Template
  title?: string
  view?: UiViewOption
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
      justify-content: center;
      min-height: 100vh;
    }
  </style>
`

export function StackBlitz(props: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  const onClickActivate = () => {
    setActive((active: boolean) => !active)
  }

  useEffect(() => {
    let options: EmbedOptions

    if (!active || !ref.current) {
      return
    }

    options = {
      devToolsHeight: props.console === true ? 50 : typeof props.console === 'number' ? props.console : undefined,
      forceEmbedLayout: true,
      height: '100%',
      hideExplorer: typeof props.hideExplorer === 'boolean' ? props.hideExplorer : Environment.isProduction,
      hideNavigation: true,
      openFile: props.openFile,
      showSidebar: false,
      theme: 'dark',
      view: props.view
    }

    if (props.id) {
      SDK.embedProjectId(ref.current, props.id, options)
    }

    if (props.files && props.template && props.title) {
      let dependencies: ProjectDependencies | undefined, files: ProjectFiles, template: ProjectTemplate

      switch (props.template) {
        case 'react':
          dependencies = props.dependencies
          files = {
            'App.jsx': html`
              <script>
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

                import { App } from './App'
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
          options.openFile = 'App.jsx'
          template = 'create-react-app'

          break
        case 'html':
          dependencies = props.dependencies
          files = {
            'index.css': CSS,
            'index.html': ``
          }
          options.openFile = 'index.html'
          template = 'html'

          break
        case 'javascript':
          dependencies = props.dependencies
          files = {
            'index.css': CSS,
            'index.html': html`<div id="root"></div>`,
            'index.js': ``
          }
          options.openFile = 'index.js'
          template = 'javascript'

          break
        case 'vite':
          files = {
            'index.css': CSS,
            'index.html': html`
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
            `,
            'index.js': '',
            'package.json': JSON.stringify(
              {
                dependencies: {
                  vite: 'latest',
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
          options.openFile = 'index.js'
          options.startScript = 'dev'
          template = 'node'

          break
        case 'vite-react':
          files = {
            'App.jsx': html`
              <script>
                export default function App() {
                  return null
                }
              </script>
            `,
            'index.css': CSS,
            'index.html': html`
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
                  <script type="module" src="./index.jsx"></script>
                </body>
              </html>
            `,
            'index.jsx': html`
              <script>
                import { StrictMode } from 'react'
                import { createRoot } from 'react-dom/client'

                import { App } from './App'
                import './index.css'

                const rootElement = document.getElementById('root')
                const root = createRoot(rootElement)

                root.render(
                  <StrictMode>
                    <App />
                  </StrictMode>
                )
              </script>
            `,
            'package.json': JSON.stringify(
              {
                dependencies: {
                  '@vitejs/plugin-react': 'latest',
                  react: 'latest',
                  'react-dom': 'latest',
                  vite: 'latest',
                  ...props.dependencies
                },
                scripts: {
                  dev: 'vite'
                }
              },
              null,
              2
            ),
            'vite.config.js': html`<script>
              import { defineConfig } from 'vite'
              import react from '@vitejs/plugin-react'

              export default defineConfig({
                plugins: [react()]
              })
            </script>`
          }
          options.openFile = 'App.jsx'
          options.startScript = 'dev'
          template = 'node'

          break
        default:
          dependencies = {}
          files = {}
          template = 'html'

          break
      }

      SDK.embedProject(
        ref.current,
        {
          dependencies,
          files: { ...files, ...props.files },
          settings: {
            compile: {
              clearConsole: false
            }
          },
          template: template,
          title: props.title
        },
        { ...options, openFile: props.openFile ?? options.openFile }
      )
    }
  }, [active])

  return (
    <Fragment>
      {active === false && (
        <CodeWindow
          className={props.className}
          buttons={[
            {
              icon: IconFeatherZap,
              onClick: onClickActivate
            }
          ]}
          files={props.files ?? {}}
          language={props.template ?? ''}
        />
      )}
      {active === true && <div className={joinElementClasses('w-full aspect-video rounded', props.className)} ref={ref}></div>}
    </Fragment>
  )
}
