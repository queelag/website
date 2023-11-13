import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DIVIDER: ProjectFiles = {
  'index.html': html` <aracna-divider></aracna-divider> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/layout/divider-element.cjs';
    </script>
  `
};
