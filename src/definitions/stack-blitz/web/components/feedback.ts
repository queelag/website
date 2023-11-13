import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ALERT: ProjectFiles = {
  'index.html': html` <aracna-alert></aracna-alert> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/alert-element.cjs';
    </script>
  `
};

export const SB_ALERT_DIALOG: ProjectFiles = {
  'index.html': html` <aracna-alert-dialog></aracna-alert-dialog> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/dialog-element.cjs';
    </script>
  `
};

export const SB_DIALOG: ProjectFiles = {
  'index.html': html` <aracna-dialog></aracna-dialog> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/dialog-element.cjs';
    </script>
  `
};

export const SB_METER: ProjectFiles = {
  'index.html': html` <aracna-meter></aracna-meter> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/feedback/meter-element.cjs';
    </script>
  `
};
