import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_OBSERVER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { observe } from '@aracna/state-manager';
      import { observer } from '@aracna/state-manager-react';

      const store = observe({ value: 0 });

      export const App = observer(() => {
        const onClick = () => {
          store.value++;
        };

        return (
          <button onClick={onClick}>
            Increase Store Value ({store.value})
          </button>
        );
      });
    </script>
  `
};
