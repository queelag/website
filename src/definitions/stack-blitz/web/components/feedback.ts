import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ALERT: ProjectFiles = {
  'index.html': html` <aracna-alert></aracna-alert> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/alert-element.cjs';
    </script>
  `
};

export const SB_DIALOG: ProjectFiles = {
  'index.html': html` <aracna-dialog></aracna-dialog> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/dialog-element.cjs';
    </script>
  `
};
