import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_AVATAR: ProjectFiles = {
  'index.html': html`
    <aracna-avatar background="lightgray" shape="squircle" size="32">
      D
    </aracna-avatar>
  `,
  'index.js': html`
    <script>
      import '@aracna/web-components/index.iife.js';
    </script>
  `
};
