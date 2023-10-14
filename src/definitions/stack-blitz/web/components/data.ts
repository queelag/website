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

export const SB_CHIP: ProjectFiles = {
  'index.html': html` <aracna-chip></aracna-chip> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/chip-element.cjs';
    </script>
  `
};

export const SB_FEED: ProjectFiles = {
  'index.html': html` <aracna-feed></aracna-feed> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/feed-element.cjs';
    </script>
  `
};

export const SB_ICON: ProjectFiles = {
  'index.html': html` <aracna-icon></aracna-icon> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/icon-element.cjs';
    </script>
  `
};

export const SB_IMAGE: ProjectFiles = {
  'index.html': html` <aracna-image></aracna-image> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/image-element.cjs';
    </script>
  `
};

export const SB_LIST: ProjectFiles = {
  'index.html': html` <aracna-list></aracna-list> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/list-element.cjs';
    </script>
  `
};

export const SB_TOOLTIP: ProjectFiles = {
  'index.html': html` <aracna-tooltip></aracna-tooltip> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/tooltip-element.cjs';
    </script>
  `
};
