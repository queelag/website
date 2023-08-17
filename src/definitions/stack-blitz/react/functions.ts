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
      import { createBaseElementComponent } from '@aracna/react';
      import { BaseElement } from '@aracna/web-components/elements/core/base-element.js';
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
      import { createFloatingElementComponent } from '@aracna/react';
      import { FloatingElement } from '@aracna/web-components/elements/core/floating-element.js';
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
      import { createFocusTrapElementComponent } from '@aracna/react';
      import { FocusTrapElement } from '@aracna/web-components/elements/core/focus-trap-element.js';
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

export const SB_CREATE_FORM_FIELD_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { createFormFieldElementComponent } from '@aracna/react';
      import { FormFieldElement } from '@aracna/web-components/elements/core/form-field-element.js';
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
      import { useEffect, useRef } from 'react';
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

export const SB_USE_BASE_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useComponent } from '@aracna/react';
      import { AracnaButton } from '@aracna/react-components/components/input/button.js';

      export function App() {
        const { ref } = useComponent();

        return (
          <AracnaButton ref={ref} native>
            Button
          </AracnaButton>
        );
      }
    </script>
  `
};

export const SB_USE_DISPATCH: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { Fragment, useRef } from 'react';
      import { useDispatch } from '@aracna/react';

      export function App() {
        const value = useRef(0);
        const dispatch = useDispatch();

        const onClick = () => {
          value.current++;
          dispatch();
        };

        return (
          <Fragment>
            <button onClick={onClick}>Increase Value ({value.current})</button>
          </Fragment>
        );
      }
    </script>
  `
};

export const SB_USE_EVENT_LISTENER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useRef, useState } from 'react';
      import { useEventListener } from '@aracna/react';

      export function App() {
        const ref = useRef();

        useEventListener(ref, 'click', (event) => {
          console.log(event);
        });

        return <button ref={ref}>Button</button>;
      }
    </script>
  `
};

export const SB_USE_INTERSECTION_OBSERVER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useRef } from 'react';
      import { useIntersectionObserver } from '@aracna/react';

      function Block(props) {
        const ref = useRef();
        const { isIntersecting } = useIntersectionObserver([ref]);

        return (
          <div
            {...props}
            ref={ref}
            style={{
              alignItems: 'center',
              background: 'white',
              display: 'flex',
              filter: 'invert(' + (isIntersecting ? 1 : 0) + ')',
              height: '100vh',
              justifyContent: 'center',
              transition: 'all linear 1s'
            }}
          />
        );
      }

      export function App() {
        return (
          <div style={{ width: '100%' }}>
            <Block>1</Block>
            <Block>2</Block>
            <Block>3</Block>
          </div>
        );
      }
    </script>
  `
};

export const SB_USE_LIFE_CYCLE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useEffect } from 'react';
      import { useLifeCycle } from '@aracna/react';

      export function App() {
        const life = useLifeCycle();

        // will log "CONSTRUCTED"
        console.log(life.current);

        useEffect(() => {
          // will log "MOUNTED"
          console.log(life.current);

          return () => {
            // will log "UNMOUNTED"
            console.log(life.current);
          };
        }, []);

        return null;
      }
    </script>
  `
};

export const SB_USE_SAFE_REF: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { useSafeRef } from '@aracna/react';

      export function App() {
        const ref = useSafeRef('div');

        // will log HTMLDivElement
        console.log(ref.current);

        return <div ref={ref} />;
      }
    </script>
  `
};

export const SB_USE_WINDOW_EVENT_LISTENER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { useWindowEventListener } from '@aracna/react';

      export function App() {
        useWindowEventListener('scroll', () => {
          console.log('scrolling');
        });

        return <div style={{ height: '200vh' }} />;
      }
    </script>
  `
};
