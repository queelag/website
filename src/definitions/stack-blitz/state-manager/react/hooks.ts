import { html } from '@/functions/html'
import type { ProjectFiles } from '@stackblitz/sdk'

export const SB_USE_AUTORUN_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { useAutorun, useObserver } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const onClick = () => {
          store.value++
        }

        useAutorun(() => {
          console.log(store.value)
        })

        return useObserver(() => <button onClick={onClick}>Increase Store Value ({store.value})</button>)
      }
    </script>
  `
}

export const SB_USE_MEMO_OBSERVER_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { useMemoObserver } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const [state, setState] = React.useState(0)

        const onClickState = () => {
          setState(state + 1)
        }

        const onClickStore = () => {
          store.value++
        }

        return useMemoObserver(() => (
          <React.Fragment>
            <button onClick={onClickState}>Increase State ({state})</button>
            <button onClick={onClickStore}>Increase Store Value ({store.value})</button>
          </React.Fragment>
        ))
      }
    </script>
  `
}

export const SB_USE_MEMO_OBSERVER_COMPARISON_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { Observer, useMemoObserver } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const [memo, setMemo] = React.useState(true)
        const [state, setState] = React.useState(0)

        const onClickMemo = () => {
          setMemo(!memo)
        }

        const onClickState = () => {
          setState(state + 1)
        }

        const onClickStore = () => {
          store.value++
        }

        return (
          <React.Fragment>
            <Observer memo={memo}>
              {() => (
                <React.Fragment>
                  <button onClick={onClickState}>Increase State ({state})</button>
                  <button onClick={onClickStore}>Increase Store Value ({store.value})</button>
                </React.Fragment>
              )}
            </Observer>
            <button onClick={onClickMemo}>{memo ? 'Disable' : 'Enable'} Memo</button>
          </React.Fragment>
        )
      }
    </script>
  `
}

export const SB_USE_OBSERVABLE_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { useObservable } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      export default function App() {
        const store: Store = useObservable({ value: 0 })

        const onClick = () => {
          store.value++
        }

        return <button onClick={onClick}>Increase Store Value ({store.value})</button>
      }
    </script>
  `
}

export const SB_USE_OBSERVER_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { useObserver } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const onClick = () => {
          store.value++
        }

        return useObserver(() => <button onClick={onClick}>Increase Store Value ({store.value})</button>)
      }
    </script>
  `
}

export const SB_USE_REACTION_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { useObserver, useReaction } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const onClick = () => {
          store.value++
        }

        useReaction(
          () => store.value,
          () => console.log('The store value is ' + store.value + '.')
        )

        return useObserver(() => <button onClick={onClick}>Increase Store Value ({store.value})</button>)
      }
    </script>
  `
}

export const SB_USE_WHEN_USAGE_FILES: ProjectFiles = {
  'App.tsx': html`
    <script>
      import { observe } from '@aracna/state-manager'
      import { useObserver, useWhen } from '@aracna/state-manager-react'
      import * as React from 'react'

      interface Store {
        value: number;
      }

      const store: Store = observe({ value: 0 })

      export default function App() {
        const onClick = () => {
          store.value++
        }

        useWhen(
          () => store.value > 0,
          () => console.log('The store value is greater than 0.')
        )

        return useObserver(() => <button onClick={onClick}>Increase Store Value ({store.value})</button>)
      }
    </script>
  `
}
