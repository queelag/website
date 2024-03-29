import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_BREADCRUMB: ProjectFiles = {
  'index.html': html` <aracna-breadcrumb></aracna-breadcrumb> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/navigation/breadcrumb-element.cjs';
    </script>
  `
};

export const SB_MENU: ProjectFiles = {
  'index.html': html` <aracna-menu></aracna-menu> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/navigation/menu-element.cjs';
    </script>
  `
};

export const SB_NAVIGATION_BAR: ProjectFiles = {
  'index.html': html` <aracna-navigation-bar></aracna-navigation-bar> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/navigation/navigation-bar-element.cjs';
    </script>
  `
};

export const SB_NAVIGATION_RAIL: ProjectFiles = {
  'index.html': html` <aracna-navigation-rail></aracna-navigation-rail> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/navigation/navigation-rail-element.cjs';
    </script>
  `
};

export const SB_TABS: ProjectFiles = {
  'index.html': html` <aracna-tabs></aracna-tabs> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/navigation/tabs-element.cjs';
    </script>
  `
};
