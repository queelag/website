import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ELEMENT_COLLECTOR: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';
      import { ElementCollector } from '@aracna/web';

      class MyElement extends HTMLElement {
        connectedCallback() {
          this.uid = ID.generate();
          this.setAttribute('uid', this.uid);

          ElementCollector.set(this);
        }
      }
      customElements.define('my-element', MyElement);

      (async () => {
        let element;

        element = document.createElement('my-element');
        element.id = 'id';

        document.getElementById('root').append(element);
        await element.update;

        console.log(ElementCollector.get(element.id));
        console.log(ElementCollector.get(element.uid));
      })();
    </script>
  `
};

export const SB_FORM_FIELD_ELEMENT_COLLECTOR: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';
      import { FormFieldElementCollector } from '@aracna/web';

      class MyElement extends HTMLElement {
        connectedCallback() {
          this.uid = ID.generate();
          this.setAttribute('uid', this.uid);

          FormFieldElementCollector.set(this);
        }
      }
      customElements.define('my-element', MyElement);

      (async () => {
        let element;

        element = document.createElement('my-element');
        element.id = 'id';
        element.path = 'value';
        element.target = { value: 0 };

        document.getElementById('root').append(element);
        await element.update;

        console.log(FormFieldElementCollector.get(element.id));
        console.log(FormFieldElementCollector.get(element.uid));
        console.log(
          FormFieldElementCollector.get(element.target, element.path)
        );
      })();
    </script>
  `
};
