import MESH_BLUE from '@/assets/meshes/blue.jpeg';
import MESH_MINT from '@/assets/meshes/mint.jpeg';
import MESH_ROSE from '@/assets/meshes/rose.jpeg';
import MESH_SEANCE from '@/assets/meshes/seance.jpeg';
import {
  COLOR_BLUE,
  COLOR_GRAY,
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
          class="pause"
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/pause-circle"
        ></aracna-icon>
        <aracna-icon
          class="play"
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

      aracna-carousel[automatic-rotation] aracna-icon.play {
        display: none;
      }

      aracna-carousel:not([automatic-rotation]) aracna-icon.pause {
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
          class="pause"
          fill="white"
          size="20"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os20-fill/assets/pause-circle"
        ></aracna-icon>
        <aracna-icon
          class="play"
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

      aracna-carousel[automatic-rotation] aracna-icon.play {
        display: none;
      }

      aracna-carousel:not([automatic-rotation]) aracna-icon.pause {
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
        background: ${COLOR_GRAY[100]};
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
  'index.html': html`
    <aracna-feed>
      <aracna-feed-article>
        <aracna-feed-article-title>
          Coffee May Reduce Risk of Heart Disease
        </aracna-feed-article-title>
        <aracna-feed-article-description>
          A new study shows that drinking coffee can reduce the risk of heart
          disease by up to 20%. Researchers found that people who drank at least
          3 cups of coffee a day had lower levels of inflammation and a lower
          risk of developing heart disease.
        </aracna-feed-article-description>
      </aracna-feed-article>
      <aracna-feed-article>
        <aracna-feed-article-title>
          New Species of Dinosaur Discovered in Argentina
        </aracna-feed-article-title>
        <aracna-feed-article-description>
          A team of scientists has discovered a new species of dinosaur in
          Argentina. The dinosaur, named Llukalkan aliocranianus, had a unique
          skull structure that allowed it to have a wider range of vision and a
          stronger bite force than other carnivorous dinosaurs.
        </aracna-feed-article-description>
      </aracna-feed-article>
      <aracna-feed-article>
        <aracna-feed-article-title>
          New Solar Panels Can Generate Electricity from Raindrops
        </aracna-feed-article-title>
        <aracna-feed-article-description>
          A group of researchers has developed a new type of solar panel that
          can generate electricity from raindrops. The panels are made of a thin
          film of graphene and can produce up to 1 volt of electricity per
          square meter of panel.
        </aracna-feed-article-description>
      </aracna-feed-article>
      <aracna-feed-article>
        <aracna-feed-article-title>
          Spicy Foods May Lower Risk of Death from Cancer and Heart Disease
        </aracna-feed-article-title>
        <aracna-feed-article-description>
          A study has found that people who regularly eat spicy foods have a
          lower risk of death from cancer, heart disease, and respiratory
          diseases. The study found that capsaicin, the compound that gives
          chili peppers their heat, has anti-inflammatory and antioxidant
          properties that may help protect against these diseases.
        </aracna-feed-article-description>
      </aracna-feed-article>
    </aracna-feed>
  `,
  'app.css': html`
    <style>
      aracna-feed {
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        max-width: 512px;
      }

      aracna-feed-article {
        aspect-ratio: 1/1;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        transition: 0.1s linear;
      }

      aracna-feed-article:hover {
        background-color: #f9fafb;
      }

      aracna-feed-article-title {
        font-size: 14px;
        font-weight: 600;
      }

      aracna-feed-article-description {
        font-size: 12px;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/feed-element';
    </script>
  `
};

export const SB_ICON: ProjectFiles = {
  'index.html': html`
    <aracna-icon
      size="24"
      src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os24-fill/assets/mic"
    ></aracna-icon>
  `,
  'app.css': html` <style></style> `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/icon-element';
    </script>
  `
};

export const SB_IMAGE: ProjectFiles = {
  'index.html': html`
    <aracna-image
      shape="squircle"
      shape-squircle-curvature="1"
      size="192"
      src="${concatURL(PUBLIC_URL, MESH_SEANCE.src)}"
    ></aracna-image>
  `,
  'app.css': html`
    <style>
      aracna-image {
        background-color: ${COLOR_SEANCE[500]};
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/image-element';
    </script>
  `
};

export const SB_LIST: ProjectFiles = {
  'index.html': html`
    <aracna-list>
      <aracna-list-item>
        <aracna-image
          shape="circle"
          size="32"
          src="${concatURL(PUBLIC_URL, MESH_BLUE.src)}"
        ></aracna-image>
        <div>
          <span>New Product Launch</span>
          <span>
            We are excited to announce the launch of our new product line. Check
            it out now!
          </span>
        </div>
      </aracna-list-item>
      <aracna-list-item>
        <aracna-image
          shape="circle"
          size="32"
          src="${concatURL(PUBLIC_URL, MESH_MINT.src)}"
        ></aracna-image>
        <div>
          <span>Upcoming Event</span>
          <span>
            Join us for our upcoming event on the latest trends in technology.
            Register now to secure your spot!
          </span>
        </div>
      </aracna-list-item>
      <aracna-list-item>
        <aracna-image
          shape="circle"
          size="32"
          src="${concatURL(PUBLIC_URL, MESH_ROSE.src)}"
        ></aracna-image>
        <div>
          <span>Customer Testimonial</span>
          <span>
            We are thrilled to receive such positive feedback from our
            customers. Read their testimonials now!
          </span>
        </div>
      </aracna-list-item>
      <aracna-list-item>
        <aracna-image
          shape="circle"
          size="32"
          src="${concatURL(PUBLIC_URL, MESH_SEANCE.src)}"
        ></aracna-image>
        <div>
          <span>Industry News</span>
          <span>
            Stay up-to-date with the latest news and trends in the industry.
            Read our latest articles now!
          </span>
        </div>
      </aracna-list-item>
    </aracna-list>
  `,
  'app.css': html`
    <style>
      aracna-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      aracna-list-item {
        align-items: center;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        gap: 16px;
        padding: 16px;
      }

      aracna-list-item:hover {
        background-color: #f9fafb;
      }

      aracna-list-item div {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      aracna-list-item span:first-child {
        font-size: 14px;
        font-weight: 600;
      }

      aracna-list-item span:last-child {
        font-size: 12px;
      }

      aracna-list-item:nth-child(1) aracna-image {
        background-color: ${COLOR_BLUE[500]};
      }

      aracna-list-item:nth-child(2) aracna-image {
        background-color: ${COLOR_MINT[500]};
      }

      aracna-list-item:nth-child(3) aracna-image {
        background-color: ${COLOR_ROSE[500]};
      }

      aracna-list-item:nth-child(4) aracna-image {
        background-color: ${COLOR_SEANCE[500]};
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/image-element';
      import '@aracna/web-components/elements/data/list-element';
    </script>
  `
};

export const SB_TOOLTIP: ProjectFiles = {
  'index.html': html`
    <aracna-tooltip focusable show-on-pointer-enter>
      <aracna-tooltip-content>
        <span>Tooltip Content</span>
        <aracna-tooltip-arrow></aracna-tooltip-arrow>
      </aracna-tooltip-content>
      <aracna-tooltip-trigger>
        <aracna-icon
          size="24"
          src="https://www.unpkg.com/@aracna/icons-material-symbols-rounded-os24-fill/assets/info"
        ></aracna-icon>
      </aracna-tooltip-trigger>
    </aracna-tooltip>
  `,
  'app.css': html`
    <style>
      aracna-tooltip-content {
        background-color: ${COLOR_GRAY[200]};
        border-radius: 4px;
        opacity: 0;
        padding: 6px 12px;
        pointer-events: none;
        transition: 0.1s linear;
        white-space: nowrap;
      }

      aracna-tooltip[visible] aracna-tooltip-content {
        opacity: 1;
        pointer-events: all;
      }

      aracna-tooltip-content span {
        font-size: 12px;
        font-weight: 600;
      }

      aracna-tooltip-arrow {
        border-bottom: 6px solid ${COLOR_GRAY[200]};
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        height: 0;
        width: 0;
      }
    </style>
  `,
  'app.js': html`
    <script>
      import '@aracna/web-components/elements/data/icon-element';
      import '@aracna/web-components/elements/data/tooltip-element';
      import { offset } from '@floating-ui/dom';

      document.querySelector('aracna-tooltip-content').middlewares = [
        offset(6)
      ];
    </script>
  `
};
