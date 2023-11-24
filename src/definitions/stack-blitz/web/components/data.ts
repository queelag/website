import MESH_BLUE from '@/assets/meshes/blue.jpeg';
import MESH_MINT from '@/assets/meshes/mint.jpeg';
import MESH_ROSE from '@/assets/meshes/rose.jpeg';
import MESH_SEANCE from '@/assets/meshes/seance.jpeg';
import {
  COLOR_BLUE,
  COLOR_MINT,
  COLOR_ROSE,
  COLOR_SEANCE,
  PUBLIC_URL
} from '@/definitions/constants';
import { html } from '@/functions/html';
import { concatURL } from '@aracna/core';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_AVATAR: ProjectFiles = {
  'index.html': html`
    <aracna-avatar shape="squircle" size="32">A</aracna-avatar>
  `,
  'app.css': html`
    <style>
      aracna-avatar {
        background: black;
        color: white;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/avatar-element';
    </script>
  `
};

export const SB_BADGE: ProjectFiles = {
  'index.html': html`
    <aracna-badge
      max="9"
      min="0"
      shape="circle"
      size="20"
      text="7"
      numeric
    ></aracna-badge>
  `,
  'app.css': html`
    <style>
      aracna-badge {
        background: ${COLOR_ROSE[500]};
        color: white;
        font-size: 10px;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/badge-element';
    </script>
  `
};

export const SB_CAROUSEL_BUTTONS: ProjectFiles = {
  'index.html': html`
    <aracna-carousel automatic-rotation infinite-rotation>
      <aracna-carousel-slides>
        <aracna-carousel-slide active></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
      </aracna-carousel-slides>
      <aracna-carousel-rotation-control>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/pause-circle"
        ></aracna-icon>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/play-circle"
        ></aracna-icon>
      </aracna-carousel-rotation-control>
      <aracna-carousel-previous-slide-control>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/arrow-circle-left"
        ></aracna-icon>
      </aracna-carousel-previous-slide-control>
      <aracna-carousel-next-slide-control>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/arrow-circle-right"
        ></aracna-icon>
      </aracna-carousel-next-slide-control>
    </aracna-carousel>
  `,
  'app.css': html`
    <style>
      aracna-carousel {
        aspect-ratio: 16 / 9;
        position: relative;
        width: 100%;
      }

      aracna-carousel-previous-slide-control {
        position: absolute;
        right: calc(12px + 20px + 6px);
        top: 12px;
      }

      aracna-carousel-next-slide-control {
        position: absolute;
        right: 12px;
        top: 12px;
      }

      aracna-carousel-rotation-control {
        left: 12px;
        position: absolute;
        top: 12px;
      }

      aracna-carousel[automatic-rotation] aracna-icon.play-circle {
        display: none;
      }

      aracna-carousel:not([automatic-rotation]) aracna-icon.pause-circle {
        display: none;
      }

      aracna-carousel-slides {
        width: 100%;
      }

      aracna-carousel-slide {
        border-radius: 4px;
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: 150ms opacity;
        width: 100%;
      }

      aracna-carousel-slide[active] {
        opacity: 1;
      }

      aracna-carousel-slide:nth-child(1) {
        background: url('${concatURL(PUBLIC_URL, MESH_BLUE.src)}');
        background-color: ${COLOR_BLUE[500]};
      }

      aracna-carousel-slide:nth-child(2) {
        background: url('${concatURL(PUBLIC_URL, MESH_MINT.src)}');
        background-color: ${COLOR_MINT[500]};
      }

      aracna-carousel-slide:nth-child(3) {
        background: url('${concatURL(PUBLIC_URL, MESH_ROSE.src)}');
        background-color: ${COLOR_ROSE[500]};
      }

      aracna-carousel-slide:nth-child(4) {
        background: url('${concatURL(PUBLIC_URL, MESH_SEANCE.src)}');
        background-color: ${COLOR_SEANCE[500]};
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/carousel-element';
      import '@aracna/web-components/elements/data/icon-element';
    </script>
  `
};

export const SB_CAROUSEL_TABS: ProjectFiles = {
  'index.html': html`
    <aracna-carousel automatic-rotation infinite-rotation>
      <aracna-carousel-slides>
        <aracna-carousel-slide active></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
        <aracna-carousel-slide></aracna-carousel-slide>
      </aracna-carousel-slides>
      <aracna-carousel-rotation-control>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/pause-circle"
        ></aracna-icon>
        <aracna-icon
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/play-circle"
        ></aracna-icon>
      </aracna-carousel-rotation-control>
      <aracna-carousel-tabs>
        <aracna-carousel-tab active></aracna-carousel-tab>
        <aracna-carousel-tab></aracna-carousel-tab>
        <aracna-carousel-tab></aracna-carousel-tab>
        <aracna-carousel-tab></aracna-carousel-tab>
      </aracna-carousel-tabs>
    </aracna-carousel>
  `,
  'app.css': html`
    <style>
      aracna-carousel {
        aspect-ratio: 16 / 9;
        position: relative;
        width: 100%;
      }

      aracna-carousel-rotation-control {
        left: 12px;
        position: absolute;
        top: 12px;
      }

      aracna-carousel[automatic-rotation] aracna-icon.play-circle {
        display: none;
      }

      aracna-carousel:not([automatic-rotation]) aracna-icon.pause-circle {
        display: none;
      }

      aracna-carousel-slides {
        width: 100%;
      }

      aracna-carousel-slide {
        border-radius: 4px;
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: 150ms opacity;
        width: 100%;
      }

      aracna-carousel-slide[active] {
        opacity: 1;
      }

      aracna-carousel-slide:nth-child(1) {
        background: url('${concatURL(PUBLIC_URL, MESH_BLUE.src)}');
        background-color: ${COLOR_BLUE[500]};
      }

      aracna-carousel-slide:nth-child(2) {
        background: url('${concatURL(PUBLIC_URL, MESH_MINT.src)}');
        background-color: ${COLOR_MINT[500]};
      }

      aracna-carousel-slide:nth-child(3) {
        background: url('${concatURL(PUBLIC_URL, MESH_ROSE.src)}');
        background-color: ${COLOR_ROSE[500]};
      }

      aracna-carousel-slide:nth-child(4) {
        background: url('${concatURL(PUBLIC_URL, MESH_SEANCE.src)}');
        background-color: ${COLOR_SEANCE[500]};
      }

      aracna-carousel-tabs {
        bottom: 12px;
        display: flex;
        gap: 6px;
        justify-content: center;
        position: absolute;
        width: 100%;
      }

      aracna-carousel-tab {
        border: 2px solid white;
        border-radius: 12px;
        height: 12px;
        transition: 150ms background;
        width: 12px;
      }

      aracna-carousel-tab[active] {
        background: white;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/carousel-element';
      import '@aracna/web-components/elements/data/icon-element';
    </script>
  `
};

export const SB_CHIP: ProjectFiles = {
  'index.html': html`
    <aracna-chip>
      <aracna-icon
        class="face"
        size="24"
        src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/face"
      ></aracna-icon>
      <span>John Doe</span>
      <aracna-icon
        class="close"
        size="16"
        src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/close"
      ></aracna-icon>
    </aracna-chip>
  `,
  'app.css': html`
    <style>
      aracna-chip {
        align-items: center;
        background: lightgray;
        border-radius: 128px;
        display: flex;
        gap: 4px;
        justify-content: center;
      }

      aracna-chip aracna-icon.face {
        margin: 2px 4px 2px 2px;
      }

      aracna-chip aracna-icon.close {
        cursor: pointer;
        margin: 0 8px 0 4px;
      }

      aracna-chip span {
        font-size: 12px;
        font-weight: 600;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/chip-element';
      import '@aracna/web-components/elements/data/icon-element';
    </script>
  `
};

export const SB_FEED: ProjectFiles = {
  'index.html': html` <aracna-feed></aracna-feed> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/feed-element.cjs';
    </script>
  `
};

export const SB_ICON: ProjectFiles = {
  'index.html': html` <aracna-icon></aracna-icon> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/icon-element.cjs';
    </script>
  `
};

export const SB_IMAGE: ProjectFiles = {
  'index.html': html` <aracna-image></aracna-image> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/image-element.cjs';
    </script>
  `
};

export const SB_LIST: ProjectFiles = {
  'index.html': html` <aracna-list></aracna-list> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/list-element.cjs';
    </script>
  `
};

export const SB_TOOLTIP: ProjectFiles = {
  'index.html': html` <aracna-tooltip></aracna-tooltip> `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/tooltip-element.cjs';
    </script>
  `
};
