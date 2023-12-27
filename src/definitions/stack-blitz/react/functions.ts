import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_CREATE_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { createElementComponent } from '@aracna/react';

      class MyElement extends HTMLElement {
        connectedCallback() {
          this.innerHTML = 'Hello';
        }
      }
      customElements.define('my-element', MyElement);

      const MyElementComponent = createElementComponent(
        'my-element',
        MyElement
      );

      export function App() {
        return <MyElementComponent />;
      }
    </script>
  `
};

export const SB_CREATE_BASE_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { createBaseElementComponent } from '@aracna/react';
      import { BaseElement } from '@aracna/web-components/elements/core/base-element';
      import { unsafeHTML } from 'lit/directives/unsafe-html.js';

      class MyElement extends BaseElement {
        render() {
          return unsafeHTML('Hello');
        }
      }
      customElements.define('my-element', MyElement);

      const MyElementComponent = createBaseElementComponent(
        'my-element',
        MyElement
      );

      export function App() {
        return <MyElementComponent />;
      }
    </script>
  `
};

export const SB_CREATE_FLOATING_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { createFloatingElementComponent } from '@aracna/react';
      import { FloatingElement } from '@aracna/web-components/elements/core/floating-element';
      import { unsafeHTML } from 'lit/directives/unsafe-html.js';

      class MyElement extends FloatingElement {
        render() {
          return unsafeHTML('Hello');
        }
      }
      customElements.define('my-element', MyElement);

      const MyElementComponent = createFloatingElementComponent(
        'my-element',
        MyElement
      );

      export function App() {
        return <MyElementComponent />;
      }
    </script>
  `
};

export const SB_CREATE_FOCUS_TRAP_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { createFocusTrapElementComponent } from '@aracna/react';
      import { FocusTrapElement } from '@aracna/web-components/elements/core/focus-trap-element';
      import { unsafeHTML } from 'lit/directives/unsafe-html.js';

      class MyElement extends FocusTrapElement {
        render() {
          return unsafeHTML('Hello');
        }
      }
      customElements.define('my-element', MyElement);

      const MyElementComponent = createFocusTrapElementComponent(
        'my-element',
        MyElement
      );

      export function App() {
        return <MyElementComponent />;
      }
    </script>
  `
};

export const SB_CREATE_FORM_CONTROL_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { createFormFieldElementComponent } from '@aracna/react';
      import { FormFieldElement } from '@aracna/web-components/elements/core/form-field-element';
      import { unsafeHTML } from 'lit/directives/unsafe-html.js';

      class MyElement extends FormFieldElement {
        render() {
          return unsafeHTML('Hello');
        }
      }
      customElements.define('my-element', MyElement);

      const MyElementComponent = createFormFieldElementComponent(
        'my-element',
        MyElement
      );

      export function App() {
        return <MyElementComponent />;
      }
    </script>
  `
};

export const SB_FORWARD_REF: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { useEffect, useRef } from 'react';
      import { forwardRef } from '@aracna/react';

      const Component = forwardRef((props, ref) => (
        <div {...props} ref={ref} />
      ));

      export function App() {
        const ref = useRef();

        useEffect(() => {
          console.log(ref);
        }, []);

        return <Component ref={ref} />;
      }
    </script>
  `
};
