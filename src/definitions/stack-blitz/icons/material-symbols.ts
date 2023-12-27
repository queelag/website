import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ICONS_MATERIAL_SYMBOLS: ProjectFiles = {
  'app.js': html`
    <script>
      import { ICON_MS_BRUSH_W500 } from '@aracna/icons-material-symbols-rounded-os20/assets/brush';

      // will log the SVG string of the "feather" icon
      console.log(ICON_MS_BRUSH_W500);
    </script>
  `
};
