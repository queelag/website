import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_OBSERVER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { Observer } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export function App() {
        const onClick = () => {
          store.value++;
        };

        return (
          <Observer>
            {() => (
              <button onClick={onClick}>
                Increase Store Value ({store.value})
              </button>
            )}
          </Observer>
        );
      }
    </script>
  `
};
