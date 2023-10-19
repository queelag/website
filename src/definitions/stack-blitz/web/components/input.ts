import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_BUTTON: ProjectFiles = {
  'index.html': html` <aracna-button></aracna-button> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/button-element.cjs';
    </script>
  `
};

export const SB_BUTTON_GROUP: ProjectFiles = {
  'index.html': html` <aracna-button-group></aracna-button-group> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/button-group-element.cjs';
    </script>
  `
};

export const SB_CHECK_BOX: ProjectFiles = {
  'index.html': html` <aracna-checkbox></aracna-checkbox> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/check-box-element.cjs';
    </script>
  `
};

export const SB_FORM: ProjectFiles = {
  'index.html': html` <aracna-form></aracna-form> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/form-element.cjs';
    </script>
  `
};

export const SB_INPUT: ProjectFiles = {
  'index.html': html` <aracna-input></aracna-input> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/input-element.cjs';
    </script>
  `
};

export const SB_INPUT_FILE: ProjectFiles = {
  'index.html': html` <aracna-input-file></aracna-input-file> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/input-file-element.cjs';
    </script>
  `
};

export const SB_RADIO_GROUP: ProjectFiles = {
  'index.html': html` <aracna-radio-group></aracna-radio-group> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/radio-group-element.cjs';
    </script>
  `
};

export const SB_SELECT: ProjectFiles = {
  'index.html': html` <aracna-select></aracna-select> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/select-element.cjs';
    </script>
  `
};

export const SB_SLIDER: ProjectFiles = {
  'index.html': html` <aracna-slider></aracna-slider> `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/input/slider-element.cjs';
    </script>
  `
};
