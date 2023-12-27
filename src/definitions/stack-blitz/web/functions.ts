import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_JEC: ProjectFiles = {
  'app.js': html`
    <script>
      import { jec } from '@aracna/web';

      // will log "button button-primary"
      console.log(jec('button', 'button-primary'));
    </script>
  `
};
