import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ICONS_FEATHER: ProjectFiles = {
  'app.js': html`
    <script>
      import { ICON_F_FEATHER } from '@aracna-icons/feather';

      // will log the SVG string of the "feather" icon
      console.log(ICON_F_FEATHER);
    </script>
  `
};

export const SB_ICONS_FEATHER_REACT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Icon } from '@aracna/react-components/components/data/icon';
      import { ICON_F_FEATHER } from '@aracna-icons/feather';

      export function App() {
        return <Icon size={16} src={ICON_F_FEATHER} />;
      }
    </script>
  `
};

export const SB_ICONS_FEATHER_WEB: ProjectFiles = {
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/icon-element';

      const root = document.getElementById('root');
      const icon = document.createElement('icon-feather');

      icon.size = 16;

      root.append(icon);
    </script>
  `
};
