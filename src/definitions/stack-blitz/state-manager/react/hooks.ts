import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_USE_AUTORUN: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { useAutorun } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const onClick = () => {
          store.value++;
        };

        useAutorun(() => {
          console.log(store.value);
        });

        return <button onClick={onClick}>Increase Store Value</button>;
      }
    </script>
  `
};

export const SB_USE_MEMO_OBSERVER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { Fragment, useState } from 'react';
      import { observe } from '@aracna/state-manager';
      import { useMemoObserver } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const [state, setState] = useState(0);

        const onClickState = () => {
          setState(state + 1);
        };

        const onClickStore = () => {
          store.value++;
        };

        return useMemoObserver(() => (
          <Fragment>
            <button onClick={onClickState}>Increase State ({state})</button>
            <button onClick={onClickStore}>
              Increase Store Value ({store.value})
            </button>
          </Fragment>
        ));
      }
    </script>
  `
};

export const SB_USE_OBSERVABLE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { useObservable } from '@aracna/state-manager-react';

      export function App() {
        const store = useObservable({ value: 0 });

        const onClick = () => {
          store.value++;
        };

        return (
          <button onClick={onClick}>
            Increase Store Value ({store.value})
          </button>
        );
      }
    </script>
  `
};

export const SB_USE_OBSERVER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { useObserver } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const onClick = () => {
          store.value++;
        };

        return useObserver(() => (
          <button onClick={onClick}>
            Increase Store Value ({store.value})
          </button>
        ));
      }
    </script>
  `
};

export const SB_USE_REACTION: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { useReaction } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const onClick = () => {
          store.value++;
        };

        useReaction(
          () => store.value,
          () => console.log('The store value is ' + store.value + '.')
        );

        return <button onClick={onClick}>Increase Store Value</button>;
      }
    </script>
  `
};

export const SB_USE_WHEN: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { useObserver, useWhen } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const onClick = () => {
          store.value++;
        };

        useWhen(
          () => store.value > 0,
          () => console.log('The store value is greater than 0.')
        );

        return useObserver(() => (
          <button onClick={onClick}>
            Increase Store Value ({store.value})
          </button>
        ));
      }
    </script>
  `
};
