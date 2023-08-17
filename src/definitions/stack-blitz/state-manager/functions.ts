import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_AUTORUN: ProjectFiles = {
  'index.js': html`
    <script>
      import { autorun, observe } from '@aracna/state-manager';

      const store = observe({ value: 0 });

      autorun(() => {
        // will log every second
        console.log(store.value);
      });

      setInterval(() => {
        store.value++;
      }, 1000);
    </script>
  `
};

export const SB_IS_OBSERVABLE: ProjectFiles = {
  'index.js': html`
    <script>
      import { isObservable, observe } from '@aracna/state-manager';

      const store = observe({ value: 0 });

      // will log true
      console.log(isObservable(store));
    </script>
  `
};

export const SB_OBSERVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { autorun, observe } from '@aracna/state-manager';

      const store = observe({ value: 0 });

      autorun(() => {
        // will log every second
        console.log(store.value);
      });

      setInterval(() => {
        store.value++;
      }, 1000);
    </script>
  `
};

export const SB_REACTION: ProjectFiles = {
  'index.js': html`
    <script>
      import { observe, reaction } from '@aracna/state-manager';

      const store = observe({ value: 0 });

      reaction(
        () => store.value,
        () => {
          // will log every second
          console.log(store.value);
        }
      );

      setInterval(() => {
        store.value++;
      }, 1000);
    </script>
  `
};

export const SB_TO_JS: ProjectFiles = {
  'index.js': html`
    <script>
      import { isObservable, observe, toJS } from '@aracna/state-manager';

      const store = observe({ value: 0 });
      console.log(store, isObservable(store));

      const plain = toJS(store);
      console.log(plain, isObservable(plain));
    </script>
  `
};

export const SB_WHEN_CALLBACK: ProjectFiles = {
  'index.js': html`
    <script>
      import { observe, when } from '@aracna/state-manager';

      const store = observe({ value: 0 });
      console.log('observing', Date.now());

      when(
        () => store.value > 1,
        () => {
          // will log after 2s
          console.log(store.value, Date.now());
        }
      );

      setInterval(() => {
        store.value++;
      }, 1000);
    </script>
  `
};

export const SB_WHEN_PROMISE: ProjectFiles = {
  'index.js': html`
    <script>
      import { observe, when } from '@aracna/state-manager';

      const store = observe({ value: 0 });
      console.log('observing', Date.now());

      (async () => {
        await when(() => store.value > 1);

        // will log 2 after 2s
        console.log(store.value, Date.now());
      })();

      setInterval(() => {
        store.value++;
      }, 1000);
    </script>
  `
};
