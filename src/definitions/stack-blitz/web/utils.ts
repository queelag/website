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
