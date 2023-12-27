import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ICONS_FEATHER: ProjectFiles = {
  'app.js': html`
    <script>
      import { ICON_F_FEATHER } from '@aracna/icons-feather/assets/feather';

      // will log the SVG string of the "feather" icon
      console.log(ICON_F_FEATHER);
    </script>
  `
};

export const SB_ICONS_FEATHER_REACT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { IconFeatherFeather } from '@aracna/icons-feather-react/components/feather';

      export function App() {
        return <IconFeatherFeather />;
      }
    </script>
  `
};

export const SB_ICONS_FEATHER_WEB: ProjectFiles = {
  'app.js': html`
    <script>
      import '@aracna/icons-feather-web/elements/feather';

      const root = document.getElementById('root');
      const feather = document.createElement('icon-feather-feather');

      root.append(feather);
    </script>
  `
};
