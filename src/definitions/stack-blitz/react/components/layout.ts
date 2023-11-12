import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DIVIDER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Divider } from './Divider';

      export function App() {
        return <Divider />;
      }
    </script>
  `,
  'Divider.jsx': html`
    <script>
      import React from 'react';
      import { AracnaDivider } from '@aracna/react-components/components/layout/divider';

      export function Divider(props) {
        <AracnaDivider></AracnaDivider>;
      }
    </script>
  `
};
