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
      import '@aracna/web-components/elements/data/avatar-element.cjs';
    </script>
  `
};

export const SB_BADGE: ProjectFiles = {
  'index.html': html`
    <aracna-badge
      background="red"
      max="9"
      min="0"
      shape="circle"
      size="20"
      value="7"
      numeric
    ></aracna-badge>
  `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/badge-element.cjs';
    </script>
  `
};

export const SB_CAROUSEL: ProjectFiles = {
  'index.html': html` <aracna-carousel></aracna-carousel> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/carousel-element.cjs';
    </script>
  `
};
