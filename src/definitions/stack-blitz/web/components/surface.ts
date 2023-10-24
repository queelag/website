import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ACCORDION: ProjectFiles = {
  'index.html': html` <aracna-accordion></aracna-accordion> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/surface/accordion-element.cjs';
    </script>
  `
};

export const SB_DISCLOSURE: ProjectFiles = {
  'index.html': html` <aracna-disclosure></aracna-disclosure> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/surface/disclosure-element.cjs';
    </script>
  `
};
