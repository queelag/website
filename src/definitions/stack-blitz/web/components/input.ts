import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_BUTTON: ProjectFiles = {
  'index.html': html` <aracna-button></aracna-button> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/button-element.cjs';
    </script>
  `
};
