import { html } from '@/functions/html'
import type { ProjectFiles } from '@stackblitz/sdk'

export const SB_AUTORUN_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { autorun, observe } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })

      const root: HTMLElement = document.getElementById('root')
      const button: HTMLButtonElement = document.createElement('button')

      button.addEventListener('click', () => {
        store.value++
      })
      button.innerHTML = 'Increase Store Value'

      root.append(button)

      /**
       * Everytime the button is clicked and "store.value" is increased the autorun effect will run.
       */
      autorun(() => {
        console.log(store.value)
      })
    </script>
  `
}

export const SB_IS_OBSERVABLE_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { isObservable, observe } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })

      /**
       * Will log true
       */
      console.log(isObservable(store))

      /**
       * Will log false
       */
      console.log(isObservable({}))
    </script>
  `
}

export const SB_OBSERVE_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { autorun, observe } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the store and make it observable through the observe function.
       */
      const store: Store = observe({ value: 0 })

      const root: HTMLElement = document.getElementById('root')
      const button: HTMLButtonElement = document.createElement('button')

      button.addEventListener('click', () => {
        store.value++
      })
      button.innerHTML = 'Increase Store Value'

      root.append(button)

      /**
       * Since you have an observed store, you can now watch it.
       * The simplest watcher is autorun, every time "store.value" changes it will run.
       */
      autorun(() => {
        console.log(store.value)
      })
    </script>
  `
}

export const SB_REACTION_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { observe, reaction } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })

      const root: HTMLElement = document.getElementById('root')
      const button: HTMLButtonElement = document.createElement('button')

      button.addEventListener('click', () => {
        store.value++
      })
      button.innerHTML = 'Increase Store Value'

      root.append(button)

      /**
       * Everytime the button is clicked and "store.value" is increased the reaction effect will run.
       */
      reaction(
        () => store.value,
        () => {
          console.log(store.value)
        }
      )
    </script>
  `
}

export const SB_TO_JS_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { isObservable, observe, toJS } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })
      console.log(store, isObservable(store))

      /**
       * Save the plain store into its own variable.
       */
      const plain_store: Store = toJS(store)
      console.log(plain_store, isObservable(plain_store))
    </script>
  `
}

export const SB_WHEN_CALLBACK_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { observe, when } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })

      const root: HTMLElement = document.getElementById('root')
      const button: HTMLButtonElement = document.createElement('button')

      button.addEventListener('click', () => {
        store.value++
      })
      button.innerHTML = 'Increase Store Value'

      root.append(button)

      /**
       * Once "store.value" is higher than 1 the effect will run.
       */
      when(
        () => store.value > 1,
        () => {
          console.log(store.value)
        }
      )
    </script>
  `
}

export const SB_WHEN_PROMISE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import { observe, when } from '@aracna/state-manager'
      import './index.css'

      interface Store {
        value: number;
      }

      /**
       * Define the observed store.
       */
      const store: Store = observe({ value: 0 })

      const root: HTMLElement = document.getElementById('root')
      const button: HTMLButtonElement = document.createElement('button')

      button.addEventListener('click', () => {
        store.value++
      })
      button.innerHTML = 'Increase Store Value'

      root.append(button)

      /**
       * Once "store.value" is higher than 1 the Promise will resolve.
       */
      when(() => store.value > 1).then(() => {
        console.log(store.value)
      })
    </script>
  `
}
