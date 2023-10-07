import {
  DEFAULT_CODE_RUNTIME_APP_JSX,
  DEFAULT_CODE_RUNTIME_CSS,
  DEFAULT_CODE_RUNTIME_INDEX_HTML,
  DEFAULT_CODE_RUNTIME_REACT_INDEX_JS,
  DEFAULT_CODE_RUNTIME_VITE_CONFIG_JS,
  DEFAULT_CODE_RUNTIME_VITE_INDEX_HTML,
  DEFAULT_CODE_RUNTIME_VITE_PACKAGE_JSON
} from '@/definitions/constants'
import type { CodeRuntimeTemplate } from '@/definitions/types'
import { Environment, cloneShallowObject } from '@aracna/core'
import type { EmbedOptions, OpenOptions, Project, ProjectOptions, ProjectTemplate } from '@stackblitz/sdk'
import StackBlitzSDK from '@stackblitz/sdk'

export function openStackBlitzProject(template: CodeRuntimeTemplate, project: Omit<Project, 'template'>, options?: OpenOptions): void {
  StackBlitzSDK.openProject(getStackBlitzProject(template, project), getStackBlitzProjectOpenOptions(template, options))
}

export function getStackBlitzProject(template: CodeRuntimeTemplate, p: Omit<Project, 'template'>): Project {
  let project: Project

  project = {
    description: p.description,
    files: {},
    settings: {
      compile: {
        clearConsole: true
      },
      ...p.settings
    },
    template: getStackBlitzProjectTemplateByCodeRuntimeTemplate(template),
    title: p.title
  }

  switch (template) {
    case 'react':
      project.dependencies = p.dependencies
      project.files = {
        'App.jsx': DEFAULT_CODE_RUNTIME_APP_JSX,
        'index.css': DEFAULT_CODE_RUNTIME_CSS,
        'index.html': DEFAULT_CODE_RUNTIME_INDEX_HTML,
        'index.js': DEFAULT_CODE_RUNTIME_REACT_INDEX_JS
      }

      break
    case 'html':
      project.dependencies = p.dependencies
      project.files = {
        'index.css': DEFAULT_CODE_RUNTIME_CSS,
        'index.html': DEFAULT_CODE_RUNTIME_INDEX_HTML
      }

      break
    case 'javascript':
      project.dependencies = p.dependencies
      project.files = {
        'index.css': DEFAULT_CODE_RUNTIME_CSS,
        'index.html': DEFAULT_CODE_RUNTIME_INDEX_HTML,
        'index.js': ``
      }

      break
    case 'vite':
      project.files = {
        'index.css': DEFAULT_CODE_RUNTIME_CSS,
        'index.html': DEFAULT_CODE_RUNTIME_VITE_INDEX_HTML,
        'index.js': '',
        'package.json': DEFAULT_CODE_RUNTIME_VITE_PACKAGE_JSON(p.dependencies)
      }

      break
    case 'vite-react':
      project.files = {
        'App.jsx': DEFAULT_CODE_RUNTIME_APP_JSX,
        'index.css': DEFAULT_CODE_RUNTIME_CSS,
        'index.html': DEFAULT_CODE_RUNTIME_VITE_INDEX_HTML,
        'index.jsx': DEFAULT_CODE_RUNTIME_REACT_INDEX_JS,
        'package.json': DEFAULT_CODE_RUNTIME_VITE_PACKAGE_JSON(p.dependencies),
        'vite.config.js': DEFAULT_CODE_RUNTIME_VITE_CONFIG_JS
      }

      break
  }

  project.files = { ...project.files, ...p.files }

  return project
}

export function getStackBlitzProjectEmbedOptions(template: CodeRuntimeTemplate, o: EmbedOptions = {}): EmbedOptions {
  return getStackBlitzProjectOptions(template, {
    height: '100%',
    hideExplorer: typeof o.hideExplorer === 'boolean' ? o.hideExplorer : Environment.isProduction,
    hideNavigation: true,
    theme: 'dark',
    ...o
  })
}

export function getStackBlitzProjectOpenOptions(template: CodeRuntimeTemplate, o: OpenOptions = {}): OpenOptions {
  return getStackBlitzProjectOptions(template, o)
}

export function getStackBlitzProjectOptions(template: CodeRuntimeTemplate, o: ProjectOptions = {}): ProjectOptions {
  let options: ProjectOptions

  options = cloneShallowObject(o)

  switch (template) {
    case 'html':
      options.openFile = 'index.html'
      break
    case 'javascript':
    case 'vite':
      options.openFile = 'index.js'
      break
    case 'react':
      options.openFile = 'App.jsx'
      break
    case 'vite-react':
      options.openFile = 'App.jsx'
      break
  }

  options.openFile = o.openFile ?? options.openFile

  return options
}

export function getStackBlitzProjectTemplateByCodeRuntimeTemplate(template: CodeRuntimeTemplate): ProjectTemplate {
  switch (template) {
    case 'javascript':
      return 'javascript'
    case 'html':
      return 'html'
    case 'react':
      return 'create-react-app'
    case 'vite':
    case 'vite-react':
      return 'node'
  }
}