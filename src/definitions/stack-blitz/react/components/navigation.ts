import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_BREADCRUMB: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Breadcrumb } from './Breadcrumb';

      export function App() {
        return <Breadcrumb />;
      }
    </script>
  `,
  'Breadcrumb.jsx': html`
    <script>
      import React from 'react';
      import { AracnaBreadcrumb } from '@aracna/react-components/components/navigation/breadcrumb';

      export function Breadcrumb(props) {
        <AracnaBreadcrumb></AracnaBreadcrumb>;
      }
    </script>
  `
};

export const SB_MENU: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Menu } from './Menu';

      export function App() {
        return <Menu />;
      }
    </script>
  `,
  'Menu.jsx': html`
    <script>
      import React from 'react';
      import { AracnaMenu } from '@aracna/react-components/components/navigation/menu';

      export function Menu(props) {
        <AracnaMenu></AracnaMenu>;
      }
    </script>
  `
};

export const SB_NAVIGATION_BAR: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { NavigationBar } from './NavigationBar';

      export function App() {
        return <NavigationBar />;
      }
    </script>
  `,
  'NavigationBar.jsx': html`
    <script>
      import React from 'react';
      import { AracnaNavigationBar } from '@aracna/react-components/components/navigation/navigation-bar';

      export function NavigationBar(props) {
        <AracnaNavigationBar></AracnaNavigationBar>;
      }
    </script>
  `
};

export const SB_NAVIGATION_RAIL: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { NavigationRail } from './NavigationRail';

      export function App() {
        return <NavigationRail />;
      }
    </script>
  `,
  'NavigationRail.jsx': html`
    <script>
      import React from 'react';
      import { AracnaNavigationRail } from '@aracna/react-components/components/navigation/navigation-rail';

      export function NavigationRail(props) {
        <AracnaNavigationRail></AracnaNavigationRail>;
      }
    </script>
  `
};

export const SB_TABS: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Tabs } from './Tabs';

      export function App() {
        return <Tabs />;
      }
    </script>
  `,
  'Tabs.jsx': html`
    <script>
      import React from 'react';
      import { AracnaTabs } from '@aracna/react-components/components/navigation/tabs';

      export function Tabs(props) {
        <AracnaTabs></AracnaTabs>;
      }
    </script>
  `
};
