import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DEBOUNCE_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { debounce } from '@aracna/core';

      function fn() {
        console.log('fn ran', Date.now());
      }

      debounce(fn, 1000); // will be ignored
      debounce(fn, 1000); // will be ignored
      debounce(fn, 1000); // will run after 1s

      setTimeout(() => {
        debounce(fn, 1000); // will run after 2s
      }, 2000);
    </script>
  `
};

export const SB_DEBOUNCE_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { debounce } from '@aracna/core';

      const ID = 'dfn';

      debounce(ID, () => console.log('fn1 ran', Date.now()), 1000); // will be ignored
      debounce(ID, () => console.log('fn2 ran', Date.now()), 1000); // will be ignored
      debounce(ID, () => console.log('fn3 ran', Date.now()), 1000); // will run after 1s

      setTimeout(() => {
        debounce(ID, () => console.log('fn4 ran', Date.now()), 1000); // will run after 2s
      }, 2000);
    </script>
  `
};

export const SB_GQL: ProjectFiles = {
  'index.js':
    "import { gql } from '@aracna/core';\n\nconst GET_USERS_QUERY = gql`\n  query getUsers {\n    users {\n      id\n      name\n      email\n    }\n  }\n`"
};

export const SB_MA: ProjectFiles = {
  'index.js': html`
    <script>
      import { ma } from '@aracna/core';

      (async () => {
        let add, result;

        add = ma((a, b) => a + b);
        result = add(1, 2);

        console.log(result); // will log Promise
        console.log(await result); // will log 3
      })();
    </script>
  `
};

export const SB_MTC: ProjectFiles = {
  'index.js': html`
    <script>
      import { mtc } from '@aracna/core';

      (async () => {
        let divide;

        divide = mtc((a, b) => {
          if (b === 0) {
            throw new Error('cannot divide by zero');
          }

          return a / b;
        });

        console.log(divide(3, 2)); // will log 1.5
        console.log(divide(1, 0)); // will log Error
      })();
    </script>
  `
};

export const SB_MTCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { mtcp } from '@aracna/core';

      (async () => {
        let divide;

        divide = mtcp(async (a, b) => {
          if (b === 0) {
            throw new Error('cannot divide by zero');
          }

          return a / b;
        });

        console.log(await divide(3, 2)); // will log 1.5
        console.log(await divide(1, 0)); // will log Error
      })();
    </script>
  `
};

export const SB_NOOP: ProjectFiles = {
  'index.js': html`
    <script>
      import { noop } from '@aracna/core';

      function fn(callback) {
        callback();
      }

      fn(noop); // will do nothing
    </script>
  `
};

export const SB_RC: ProjectFiles = {
  'index.js': html`
    <script>
      import { rc } from '@aracna/core';

      function add(a, b) {
        return a + b;
      }

      console.log(rc(() => add(1, 2), 0)); // will log 0
    </script>
  `
};

export const SB_RCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { rcp } from '@aracna/core';

      (async () => {
        async function add(a, b) {
          return a + b;
        }

        console.log(await rcp(() => add(1, 2), 0)); // will log 0
      })();
    </script>
  `
};

export const SB_RNE: ProjectFiles = {
  'index.js': html`
    <script>
      import { rne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return rne('cannot divide by zero');
        }

        return a / b;
      }

      console.log(divide(3, 2)); // will log 1.5
      console.log(divide(1, 0)); // will log Error
    </script>
  `
};

export const SB_RV: ProjectFiles = {
  'index.js': html`
    <script>
      import { rv } from '@aracna/core';

      function add(a, b) {
        return a + b;
      }

      console.log(rv(() => add(1, 2))); // will log undefined
    </script>
  `
};

export const SB_RVP: ProjectFiles = {
  'index.js': html`
    <script>
      import { rvp } from '@aracna/core';

      (async () => {
        async function add(a, b) {
          return a + b;
        }

        console.log(await rvp(() => add(1, 2))); // will log undefined
      })();
    </script>
  `
};

export const SB_SLEEP: ProjectFiles = {
  'index.js': html`
    <script>
      import { sleep } from '@aracna/core';

      (async () => {
        console.log('before sleep', Date.now());
        await sleep(2000);
        console.log('after sleep', Date.now());
      })();
    </script>
  `
};

export const SB_TC: ProjectFiles = {
  'index.js': html`
    <script>
      import { tc } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          throw new Error('cannot divide by zero');
        }

        return a / b;
      }

      console.log(tc(() => divide(3, 1))); // will log 1.5
      console.log(tc(() => divide(1, 0))); // will log Error
    </script>
  `
};

export const SB_TCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { tcp } from '@aracna/core';

      (async () => {
        async function divide(a, b) {
          if (b === 0) {
            throw new Error('cannot divide by zero');
          }

          return a / b;
        }

        console.log(await tcp(() => divide(3, 1))); // will log 1.5
        console.log(await tcp(() => divide(1, 0))); // will log Error
      })();
    </script>
  `
};

export const SB_THROTTLE_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { throttle } from '@aracna/core';

      function fn() {
        console.log('fn ran', Date.now());
      }

      throttle(fn, 1000); // will run
      throttle(fn, 1000); // will be ignored
      throttle(fn, 1000); // will be ignored

      setTimeout(() => throttle(fn, 1000), 2000); // will run after 2s
    </script>
  `
};

export const SB_THROTTLE_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { throttle } from '@aracna/core';

      const ID = 'dfn';

      throttle(ID, () => console.log('fn1 ran', Date.now()), 1000); // will run
      throttle(ID, () => console.log('fn2 ran', Date.now()), 1000); // will be ignored
      throttle(ID, () => console.log('fn3 ran', Date.now()), 1000); // will be ignored

      setTimeout(() => {
        throttle(ID, () => console.log('fn4 ran', Date.now()), 1000); // will run after 2s
      }, 2000);
    </script>
  `
};

export const SB_TIE: ProjectFiles = {
  'index.js': html`
    <script>
      import { tie } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return tie(new Error('cannot divide by zero'));
        }

        return a / b;
      }

      console.log(divide(3, 2)); // will log 1.5
      console.log(divide(1, 0)); // will log Error: cannot divide by zero
    </script>
  `
};

export const SB_TNE: ProjectFiles = {
  'index.js': html`
    <script>
      import { tne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          tne('cannot divide by zero');
        }

        return a / b;
      }

      console.log(divide(3, 2)); // will log 5
      console.log(divide(1, 0)); // will throw Error: Cannot divide by zero
    </script>
  `
};

export const SB_WF: ProjectFiles = {
  'index.js': html`
    <script>
      import { wf } from '@aracna/core';

      (async () => {
        await wf(() => {
          let random;

          random = Math.random();
          console.log(random);

          return random > 0.5;
        });

        console.log('condition met');
      })();
    </script>
  `
};

export const SB_WFP: ProjectFiles = {
  'index.js': html`
    <script>
      import { wfp } from '@aracna/core';

      (async () => {
        await wfp(async () => {
          let random;

          random = Math.random();
          console.log(random);

          return random > 0.5;
        });

        console.log('condition met');
      })();
    </script>
  `
};
