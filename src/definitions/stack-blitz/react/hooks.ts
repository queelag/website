import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_USE_DISPATCH: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { Fragment, useRef } from 'react';
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

export const SB_USE_DOM_RECT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { useRef } from 'react';
      import { useDOMRect } from '@aracna/react';

      export function App() {
        const ref = useRef();
        const rect = useDOMRect(ref);

        return <pre ref={ref}>{JSON.stringify(rect, null, 2)}</pre>;
      }
    </script>
  `,
  'App.css': html`
    <style>
      pre {
        background: black;
        border-radius: 16px;
        color: white;
        padding: 16px;
      }
    </style>
  `
};

export const SB_USE_ELEMENT_REF: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { useElementRef } from '@aracna/react';

      export function App() {
        const ref = useElementRef('div');

        // will log HTMLDivElement
        console.log(ref.current);

        return <div ref={ref} />;
      }
    </script>
  `
};

export const SB_USE_EVENT_LISTENER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { useRef, useState } from 'react';
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
      import React, { useRef } from 'react';
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
              filter: 'invert(' + (isIntersecting() ? 1 : 0) + ')',
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
      import React, { useEffect } from 'react';
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

export const SB_USE_OBSERVABLE_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useComponent } from '@aracna/react';
      import { AracnaButton } from '@aracna/react-components/components/input/button';

      export function App() {
        const { ref } = useObservableElementComponent();

        return (
          <AracnaButton ref={ref}>
            <button>Button</button>
          </AracnaButton>
        );
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

export const SB_USE_WINDOW_SIZE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { useWindowSize } from '@aracna/react';

      export function App() {
        const size = useWindowSize();

        return <pre>{JSON.stringify(size, null, 2)}</pre>;
      }
    </script>
  `,
  'App.css': html`
    <style>
      pre {
        background: black;
        border-radius: 16px;
        color: white;
        padding: 16px;
      }
    </style>
  `
};
