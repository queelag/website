import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

/**
 * cafs
 */
/** */

export const SB_CAFS: ProjectFiles = {
  'app.js': html`
    <script>
      import { cafs } from '@aracna/core';

      (async () => {
        let number;

        await cafs(
          async () => number++,
          async () => number++
        );

        // will log 2
        console.log(number);
      })();
    </script>
  `
};

/**
 * cafsue
 */
/** */

export const SB_CAFSUE: ProjectFiles = {
  'app.js': html`
    <script>
      import { cafsue } from '@aracna/core';

      (async () => {
        let number;

        await cafsue(
          async () => number++,
          async () => new Error(),
          async () => number++
        );

        // will log 1
        console.log(number);
      })();
    </script>
  `
};

/**
 * cafsueof
 */
/** */

export const SB_CAFSUEOF: ProjectFiles = {
  'app.js': html`
    <script>
      import { cafsueof } from '@aracna/core';

      (async () => {
        let number;

        await cafsueof(
          async () => number++,
          async () => new Error(),
          async () => number++
        );

        // will log 1
        console.log(number);

        await cafsueof(
          async () => number++,
          async () => false,
          async () => number++
        );

        // will log 2
        console.log(number);
      })();
    </script>
  `
};

/**
 * debounce
 */
/** */

export const SB_DEBOUNCE: ProjectFiles = {
  'app.js': html`
    <script>
      import { debounce } from '@aracna/core';

      function fn() {
        console.log('fn ran', Date.now());
      }

      // will be ignored
      debounce(fn, 1000);

      // will be ignored
      debounce(fn, 1000);

      // will run after 1s
      debounce(fn, 1000);

      setTimeout(() => {
        // will run after 2s
        debounce(fn, 1000);
      }, 2000);
    </script>
  `
};

export const SB_DEBOUNCE_CUSTOM_KEY: ProjectFiles = {
  'app.js': html`
    <script>
      import { debounce } from '@aracna/core';

      const key = 'dfn';

      // will be ignored
      debounce(() => console.log('fn1 ran', Date.now()), 1000, key);

      // will be ignored
      debounce(() => console.log('fn2 ran', Date.now()), 1000, key);

      // will run after 1s
      debounce(() => console.log('fn3 ran', Date.now()), 1000, key);

      setTimeout(() => {
        // will run after 2s
        debounce(() => console.log('fn4 ran', Date.now()), 1000, key);
      }, 2000);
    </script>
  `
};

/**
 * gql
 */
/** */

export const SB_GQL: ProjectFiles = {
  'app.js':
    "import { gql } from '@aracna/core';\n\nconst GET_USERS_QUERY = gql`\n  query getUsers {\n    users {\n      id\n      name\n      email\n    }\n  }\n`"
};

/**
 * ma
 */
/** */

export const SB_MA: ProjectFiles = {
  'app.js': html`
    <script>
      import { ma } from '@aracna/core';

      (async () => {
        let add, result;

        add = ma((a, b) => a + b);
        result = add(1, 2);

        // will log Promise
        console.log(result);

        // will log 3
        console.log(await result);
      })();
    </script>
  `
};

/**
 * mtc
 */
/** */

export const SB_MTC: ProjectFiles = {
  'app.js': html`
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

        // will log 1.5
        console.log(divide(3, 2));

        // will log Error
        console.log(divide(1, 0));
      })();
    </script>
  `
};

/**
 * mtcp
 */
/** */

export const SB_MTCP: ProjectFiles = {
  'app.js': html`
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

        // will log 1.5
        console.log(await divide(3, 2));

        // will log Error
        console.log(await divide(1, 0));
      })();
    </script>
  `
};

/**
 * noop
 */
/** */

export const SB_NOOP: ProjectFiles = {
  'app.js': html`
    <script>
      import { noop } from '@aracna/core';

      function fn(callback) {
        callback();
      }

      // will do nothing
      fn(noop);
    </script>
  `
};

/**
 * rc
 */
/** */

export const SB_RC: ProjectFiles = {
  'app.js': html`
    <script>
      import { rc } from '@aracna/core';

      function add(a, b) {
        return a + b;
      }

      // will log 0
      console.log(rc(() => add(1, 2), 0));
    </script>
  `
};

/**
 * rcp
 */
/** */

export const SB_RCP: ProjectFiles = {
  'app.js': html`
    <script>
      import { rcp } from '@aracna/core';

      (async () => {
        async function add(a, b) {
          return a + b;
        }

        // will log 0
        console.log(await rcp(() => add(1, 2), 0));
      })();
    </script>
  `
};

/**
 * rne
 */
/** */

export const SB_RNE: ProjectFiles = {
  'app.js': html`
    <script>
      import { rne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return rne('cannot divide by zero');
        }

        return a / b;
      }

      // will log 1.5
      console.log(divide(3, 2));

      // will log Error
      console.log(divide(1, 0));
    </script>
  `
};

/**
 * rv
 */
/** */

export const SB_RV: ProjectFiles = {
  'app.js': html`
    <script>
      import { rv } from '@aracna/core';

      function add(a, b) {
        return a + b;
      }

      // will log undefined
      console.log(rv(() => add(1, 2)));
    </script>
  `
};

/**
 * rvp
 */
/** */

export const SB_RVP: ProjectFiles = {
  'app.js': html`
    <script>
      import { rvp } from '@aracna/core';

      (async () => {
        async function add(a, b) {
          return a + b;
        }

        // will log undefined
        console.log(await rvp(() => add(1, 2)));
      })();
    </script>
  `
};

/**
 * sleep
 */
/** */

export const SB_SLEEP: ProjectFiles = {
  'app.js': html`
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

/**
 * tc
 */
/** */

export const SB_TC: ProjectFiles = {
  'app.js': html`
    <script>
      import { tc } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          throw new Error('cannot divide by zero');
        }

        return a / b;
      }

      // will log 1.5
      console.log(tc(() => divide(3, 1)));

      // will log Error
      console.log(tc(() => divide(1, 0)));
    </script>
  `
};

/**
 * tcp
 */
/** */

export const SB_TCP: ProjectFiles = {
  'app.js': html`
    <script>
      import { tcp } from '@aracna/core';

      (async () => {
        async function divide(a, b) {
          if (b === 0) {
            throw new Error('cannot divide by zero');
          }

          return a / b;
        }

        // will log 1.5
        console.log(await tcp(() => divide(3, 1)));

        // will log Error
        console.log(await tcp(() => divide(1, 0)));
      })();
    </script>
  `
};

/**
 * throttle
 */
/** */

export const SB_THROTTLE_FN_AS_KEY: ProjectFiles = {
  'app.js': html`
    <script>
      import { throttle } from '@aracna/core';

      function fn() {
        console.log('fn ran', Date.now());
      }

      // will run
      throttle(fn, 1000);

      // will be ignored
      throttle(fn, 1000);

      // will be ignored
      throttle(fn, 1000);

      // will run after 2s
      setTimeout(() => throttle(fn, 1000), 2000);
    </script>
  `
};

export const SB_THROTTLE_NAME_AS_KEY: ProjectFiles = {
  'app.js': html`
    <script>
      import { throttle } from '@aracna/core';

      const key = 'dfn';

      // will run
      throttle(() => console.log('fn1 ran', Date.now()), 1000, key);

      // will be ignored
      throttle(() => console.log('fn2 ran', Date.now()), 1000, key);

      // will be ignored
      throttle(() => console.log('fn3 ran', Date.now()), 1000, key);

      setTimeout(() => {
        // will run after 2s
        throttle(() => console.log('fn4 ran', Date.now()), 1000, key);
      }, 2000);
    </script>
  `
};

/**
 * tie
 */
/** */

export const SB_TIE: ProjectFiles = {
  'app.js': html`
    <script>
      import { tie } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return tie(new Error('cannot divide by zero'));
        }

        return a / b;
      }

      // will log 1.5
      console.log(divide(3, 2));

      // will log Error: cannot divide by zero
      console.log(divide(1, 0));
    </script>
  `
};

/**
 * tne
 */
/** */

export const SB_TNE: ProjectFiles = {
  'app.js': html`
    <script>
      import { tne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          tne('cannot divide by zero');
        }

        return a / b;
      }

      // will log 5
      console.log(divide(3, 2));

      // will throw Error: Cannot divide by zero
      console.log(divide(1, 0));
    </script>
  `
};

/**
 * typeahead
 */
/** */

export const SB_TYPEAHEAD: ProjectFiles = {
  'app.js': html`
    <script>
      import { typeahead } from '@aracna/core';

      const key = 'fruits';
      const input = document.createElement('input');
      const items = ['apple', 'banana', 'cherry'];

      input.addEventListener('keydown', (event) => {
        event.preventDefault();
        event.stopPropagation();

        typeahead(key, event.key)
          .setItems(items)
          .setListeners([])
          .setPredicate((item, query) => item.startsWith(query))
          .on('match', (item) => console.log('match', item));
      });

      document.getElementById('root').append(input);
    </script>
  `
};

/**
 * wf
 */
/** */

export const SB_WF: ProjectFiles = {
  'app.js': html`
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

/**
 * wfp
 */
/** */

export const SB_WFP: ProjectFiles = {
  'app.js': html`
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
