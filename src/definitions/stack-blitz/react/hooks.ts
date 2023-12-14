import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

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

export const SB_USE_OBSERVABLE_ELEMENT_COMPONENT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import { useComponent } from '@aracna/react';
      import { AracnaButton } from '@aracna/react-components/components/input/button';

      export function App() {
        const { ref } = useObservableElementComponent();

        return (
          <AracnaButton ref={ref} native>
            Button
          </AracnaButton>
        );
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
