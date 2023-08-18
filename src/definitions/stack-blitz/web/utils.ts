import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_CREATE_DOCUMENT_ELEMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { createDocumentElement } from '@aracna/web';

      const div = createDocumentElement('div');

      // will log HTMLDivElement
      console.log(div);
    </script>
  `
};

export const SB_DEFINE_CUSTOM_ELEMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { defineCustomElement } from '@aracna/web';

      class MyElement extends HTMLElement {}
      defineCustomElement('my-element', MyElement);

      // will log MyElement
      console.log(document.createElement('my-element'));
    </script>
  `
};

export const SB_GET_ELEMENT_STYLE_COMPATIBLE_VALUE: ProjectFiles = {
  'index.js': html`
    <script>
      import { getElementStyleCompatibleValue } from '@aracna/web';

      // will log "1px"
      console.log(getElementStyleCompatibleValue(1));

      // will log "1px"
      console.log(getElementStyleCompatibleValue('1'));
    </script>
  `
};

export const SB_JOIN_ELEMENT_CLASSES: ProjectFiles = {
  'index.js': html`
    <script>
      import { joinElementClasses } from '@aracna/web';

      // will log "button button-primary"
      console.log(joinElementClasses('button', 'button-primary'));
    </script>
  `
};

export const SB_SCROLL_ELEMENT_INTO_VIEW: ProjectFiles = {
  'index.js': html`
    <script>
      import { scrollElementIntoView } from '@aracna/web';
      import './index.css';

      const root = document.getElementById('root');
      const button = document.createElement('button');
      const div = document.createElement('div');

      root.style.height = '200vh';

      div.innerHTML = 'Element';
      div.style.marginTop = 'auto';

      button.addEventListener('click', () => {
        scrollElementIntoView(root, div);
      });
      button.innerHTML = 'Scroll to Element';

      root.append(button, div);
    </script>
  `
};

export const SB_CACHE_IMAGE_ELEMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { cacheImageElement } from '@aracna/web';

      const image1 = document.createElement('img');
      const image2 = document.createElement('img');

      const onLoad = (image) => () => {
        cacheImageElement(image);

        // will log Map
        console.log(CACHE_IMAGES);
      };

      image1.onload = onLoad(image1);
      image1.src =
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg';

      image2.onload = onLoad(image1);
      image2.src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1280px-Gatto_europeo4.jpg';

      document.body.append(image1, image2);
    </script>
  `
};

export const SB_CACHE_IMAGE_SRC: ProjectFiles = {
  'index.js': html`
    <script>
      import { CACHE_IMAGES, cacheImageSrc } from '@aracna/web';

      (async () => {
        await cacheImageSrc(
          'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
        );
        await cacheImageSrc(
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1280px-Gatto_europeo4.jpg'
        );

        // will log Map
        console.log(CACHE_IMAGES);
      })();
    </script>
  `
};

export const SB_GET_IMAGE_SRC_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { getImageSrcBase64 } from '@aracna/web';

      (async () => {
        console.log(
          await getImageSrcBase64(
            'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
          )
        );
      })();
    </script>
  `
};

export const SB_GET_IMAGE_ELEMENT_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { getImageElementBase64 } from '@aracna/web';

      const image = document.createElement('img');

      image.onload = () => {
        // will log the base64 of the image
        console.log(getImageElementBase64(image));
      };
      image.src =
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg';

      document.body.append(image);
    </script>
  `
};

export const SB_GET_SLIDER_THUMB_ELEMENT_PERCENTAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { getSliderThumbElementPercentage } from '@aracna/web';

      // will log 50
      console.log(getSliderThumbElementPercentage(50));

      // will log 50
      console.log(getSliderThumbElementPercentage(25, 0, 50));

      // will log 50
      console.log(getSliderThumbElementPercentage(0.5, 0, 1, 1));
    </script>
  `
};

export const SB_GET_SLIDER_THUMB_ELEMENT_STYLE_LEFT: ProjectFiles = {
  'index.js': html`
    <script>
      import { getSliderThumbElementStyleLeft } from '@aracna/web';

      // will log "50%"
      console.log(getSliderThumbElementStyleLeft(50));

      // will log "0"
      console.log(getSliderThumbElementStyleLeft(50, 'vertical'));
    </script>
  `
};

export const SB_GET_SLIDER_THUMB_ELEMENT_STYLE_TOP: ProjectFiles = {
  'index.js': html`
    <script>
      import { getSliderThumbElementStyleTop } from '@aracna/web';

      // will log "0"
      console.log(getSliderThumbElementStyleTop(50));

      // will log "50%"
      console.log(getSliderThumbElementStyleTop(50, 'vertical'));
    </script>
  `
};

export const SB_IS_STRING_SVG: ProjectFiles = {
  'index.js': html`
    <script>
      import { isStringSVG } from '@aracna/web';

      // will log true
      console.log(isStringSVG('<svg></svg>'));
    </script>
  `
};

export const SB_GET_WINDOW_BOUNDING_CLIENT_RECT: ProjectFiles = {
  'index.js': html`
    <script>
      import { getWindowBoundingClientRect } from '@aracna/web';

      // will log DOMRect
      console.log(getWindowBoundingClientRect());
    </script>
  `
};
