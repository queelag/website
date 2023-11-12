import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ACCORDION: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Accordion } from './Accordion';

      export function App() {
        return <Accordion />;
      }
    </script>
  `,
  'Accordion.jsx': html`
    <script>
      import React from 'react';
      import { AracnaAccordion } from '@aracna/react-components/components/surface/accordion';

      export function Accordion(props) {
        <AracnaAccordion></AracnaAccordion>;
      }
    </script>
  `
};

export const SB_DISCLOSURE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Disclosure } from './Disclosure';

      export function App() {
        return <Disclosure />;
      }
    </script>
  `,
  'Disclosure.jsx': html`
    <script>
      import React from 'react';
      import { AracnaDisclosure } from '@aracna/react-components/components/surface/disclosure';

      export function Disclosure(props) {
        <AracnaDisclosure></AracnaDisclosure>;
      }
    </script>
  `
};
