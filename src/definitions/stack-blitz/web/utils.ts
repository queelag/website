import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

/**
 * Element
 */
/** */

export const SB_CREATE_DOCUMENT_ELEMENT: ProjectFiles = {
  'app.js': html`
    <script>
      import { createDocumentElement } from '@aracna/web';

      const div = createDocumentElement('div');

      // will log HTMLDivElement
      console.log(div);
    </script>
  `
};

export const SB_DEFINE_CUSTOM_ELEMENT: ProjectFiles = {
  'app.js': html`
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
  'app.js': html`
    <script>
      import { getElementStyleCompatibleValue } from '@aracna/web';

      // will log "1px"
      console.log(getElementStyleCompatibleValue(1));

      // will log "1px"
      console.log(getElementStyleCompatibleValue('1'));
    </script>
  `
};

export const SB_IS_ELEMENT_FOCUSED: ProjectFiles = {
  'app.js': html`
    <script>
      import { isElementFocused } from '@aracna/web';

      const input = document.createElement('input');
      document.getElementById('root').append(input);

      input.focus();

      // will log true
      console.log(isElementFocused(input));
    </script>
  `
};

export const SB_REMOVE_ELEMENT_ATTRIBUTE: ProjectFiles = {
  'app.js': html`
    <script>
      import { removeElementAttribute } from '@aracna/web';

      const div = document.createElement('div');
      div.setAttribute('name', 'john');

      removeElementAttribute(div, 'name');

      // will log null
      console.log(div.getAttribute('name'));
    </script>
  `
};

export const SB_REMOVE_IMMUTABLE_ELEMENT_ATTRIBUTE: ProjectFiles = {
  'app.js': html`
    <script>
      import {
        removeImmutableElementAttribute,
        setImmutableElementAttribute
      } from '@aracna/web';

      const div = document.createElement('div');
      setImmutableElementAttribute(div, 'name', 'john');

      removeImmutableElementAttribute(div, 'name');

      // will log null
      console.log(div.getAttribute('name'));
    </script>
  `
};

export const SB_SCROLL_ELEMENT_INTO_VIEW: ProjectFiles = {
  'app.js': html`
    <script>
      import { scrollElementIntoView } from '@aracna/web';

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

export const SB_SET_ELEMENT_ATTRIBUTE: ProjectFiles = {
  'app.js': html`
    <script>
      import { setElementAttribute } from '@aracna/web';

      const div = document.createElement('div');
      setElementAttribute(div, 'name', 'john');

      // will log "john"
      console.log(div.getAttribute('name'));
    </script>
  `
};

export const SB_SET_ELEMENT_ATTRIBUTES: ProjectFiles = {
  'app.js': html`
    <script>
      import { setElementAttributes } from '@aracna/web';

      const div = document.createElement('div');
      setElementAttributes(div, { name: 'john', surname: 'doe' });

      // will log "john"
      console.log(div.getAttribute('name'));

      // will log "doe"
      console.log(div.getAttribute('surname'));
    </script>
  `
};

export const SB_SET_IMMUTABLE_ELEMENT_ATTRIBUTE: ProjectFiles = {
  'app.js': html`
    <script>
      import { setImmutableElementAttribute } from '@aracna/web';

      const div = document.createElement('div');
      setImmutableElementAttribute(div, 'name', 'john');

      // will log "john"
      console.log(div.getAttribute('name'));

      div.setAttribute('name', 'paul');

      // will log "john"
      console.log(div.getAttribute('name'));
    </script>
  `
};

export const SB_SET_IMMUTABLE_ELEMENT_ATTRIBUTES: ProjectFiles = {
  'app.js': html`
    <script>
      import { setImmutableElementAttributes } from '@aracna/web';

      const div = document.createElement('div');
      setImmutableElementAttributes(div, { name: 'john', surname: 'doe' });

      // will log "john"
      console.log(div.getAttribute('name'));

      // will log "doe"
      console.log(div.getAttribute('surname'));

      div.setAttribute('name', 'paul');
      div.setAttribute('surname', 'smith');

      // will log "john"
      console.log(div.getAttribute('name'));

      // will log "doe"
      console.log(div.getAttribute('surname'));
    </script>
  `
};

/**
 * Image Element
 */
/** */

export const SB_CACHE_IMAGE_ELEMENT: ProjectFiles = {
  'app.js': html`
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
  'app.js': html`
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
  'app.js': html`
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
  'app.js': html`
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

/**
 * Meter Element
 */
/** */

export const SB_GET_METER_ELEMENT_PERCENTAGE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getMeterElementPercentage } from '@aracna/web';

      // will log 50
      console.log(getMeterElementPercentage(0.5, { min: 0, max: 1 }));
    </script>
  `
};

export const SB_GET_METER_ELEMENT_VALUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { getMeterElementValue } from '@aracna/web';

      // will log 0.5
      console.log(getMeterElementValue(0.5, { min: 0, max: 1 }));
    </script>
  `
};

/**
 * Radio Element
 */
/** */

export const SB_FIND_RADIO_BUTTON_BY_VALUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { findRadioButtonByValue } from '@aracna/web';

      const radio1 = document.createElement('input');
      const radio2 = document.createElement('input');

      radio1.type = 'radio';
      radio1.value = '1';

      radio2.type = 'radio';
      radio2.value = '2';

      // will log HTMLInputElement with value "1"
      console.log(findRadioButtonByValue([radio1, radio2], '1'));
    </script>
  `
};

export const SB_FIND_RADIO_BUTTON_LABEL_BY_VALUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { findRadioButtonLabelByValue } from '@aracna/web';

      const radio1 = document.createElement('input');
      const radio2 = document.createElement('input');

      radio1.label = 'label1';
      radio1.type = 'radio';
      radio1.value = '1';

      radio2.label = 'label2';
      radio2.type = 'radio';
      radio2.value = '2';

      // will log "label1"
      console.log(findRadioButtonLabelByValue([radio1, radio2], '1'));
    </script>
  `
};

/**
 * Select Element
 */
/** */

export const SB_FIND_SELECT_OPTION_BY_VALUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { findSelectOptionByValue } from '@aracna/web';

      const option1 = document.createElement('option');
      const option2 = document.createElement('option');

      option1.value = '1';
      option2.value = '2';

      // will log HTMLOptionElement with value "1"
      console.log(findSelectOptionByValue([option1, option2], '1'));
    </script>
  `
};

export const SB_FIND_SELECT_OPTION_LABEL_BY_VALUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { findSelectOptionLabelByValue } from '@aracna/web';

      const option1 = document.createElement('option');
      const option2 = document.createElement('option');

      option1.label = 'label1';
      option1.value = '1';

      option2.label = 'label2';
      option2.value = '2';

      // will log "label1"
      console.log(findSelectOptionLabelByValue([option1, option2], '1'));
    </script>
  `
};

/**
 * Slider Element
 */
/** */

export const SB_GET_SLIDER_THUMB_ELEMENT_PERCENTAGE: ProjectFiles = {
  'app.js': html`
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
  'app.js': html`
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
  'app.js': html`
    <script>
      import { getSliderThumbElementStyleTop } from '@aracna/web';

      // will log "0"
      console.log(getSliderThumbElementStyleTop(50));

      // will log "50%"
      console.log(getSliderThumbElementStyleTop(50, 'vertical'));
    </script>
  `
};

/**
 * Squircle
 */
/** */

export const SB_APPEND_SQUIRCLE_ELEMENT: ProjectFiles = {
  'app.js': html`
    <script>
      import { appendSquircleElement, getSquircleElement } from '@aracna/web';

      appendSquircleElement({ size: 32 });

      // will log SVGSVGElement
      console.log(getSquircleElement({ size: 32 }));
    </script>
  `
};

export const SB_CREATE_SQUIRCLE_ELEMENT: ProjectFiles = {
  'app.js': html`
    <script>
      import { createSquircleElement } from '@aracna/web';

      // will log SVGSVGElement
      console.log(createSquircleElement({ size: 32 }));
    </script>
  `
};

export const SB_GET_SQUIRCLE_ELEMENT: ProjectFiles = {
  'app.js': html`
    <script>
      import { getSquircleElement } from '@aracna/web';

      appendSquircleElement({ size: 32 });

      // will log SVGSVGElement
      console.log(getSquircleElement({ size: 32 }));
    </script>
  `
};

export const SB_GET_SQUIRCLES_CONTAINER: ProjectFiles = {
  'app.js': html`
    <script>
      import { getSquirclesContainer } from '@aracna/web';

      // will log HTMLDivElement
      console.log(getSquirclesContainer());
    </script>
  `
};

/**
 * String
 */
/** */

export const SB_IS_STRING_SVG: ProjectFiles = {
  'app.js': html`
    <script>
      import { isStringSVG } from '@aracna/web';

      // will log true
      console.log(isStringSVG('<svg></svg>'));
    </script>
  `
};

/**
 * Window
 */
/** */

export const SB_GET_WINDOW_BOUNDING_CLIENT_RECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { getWindowBoundingClientRect } from '@aracna/web';

      // will log DOMRect
      console.log(getWindowBoundingClientRect());
    </script>
  `
};
