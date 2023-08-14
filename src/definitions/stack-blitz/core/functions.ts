import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DEBOUNCE_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { debounce } from '@aracna/core';

      function doSomething() {
        console.log('Doing something...');
      }

      const debouncedDoSomething = () => debounce(doSomething, 1000);

      debouncedDoSomething(); // This will execute immediately
      debouncedDoSomething(); // This will be ignored
      debouncedDoSomething(); // This will be ignored

      setTimeout(() => {
        debouncedDoSomething(); // This will execute after 1000ms
      }, 2000);
    </script>
  `
};

export const SB_DEBOUNCE_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { debounce } from '@aracna/core';

      const debouncedDoSomething = () =>
        debounce(
          'doSomething',
          () => {
            console.log('Doing something...');
          },
          1000
        );

      debouncedDoSomething(); // This will execute immediately
      debouncedDoSomething(); // This will be ignored
      debouncedDoSomething(); // This will be ignored

      setTimeout(() => {
        debouncedDoSomething(); // This will execute after 1000ms
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

      function add(a, b) {
        return a + b;
      }

      const asyncAdd = ma(add);

      asyncAdd(2, 3).then((result) => {
        console.log(result); // This will log "5"
      });
    </script>
  `
};

export const SB_MTC: ProjectFiles = {
  'index.js': html`
    <script>
      import { mtc } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          throw new Error('Cannot divide by zero');
        }
        return a / b;
      }

      const safeDivide = mtc(divide);

      console.log(safeDivide(10, 2)); // This will log "5"
      console.log(safeDivide(10, 0)); // This will log an Error object
    </script>
  `
};

export const SB_MTCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { mtcp } from '@aracna/core';

      async function divide(a, b) {
        if (b === 0) {
          throw new Error('Cannot divide by zero');
        }
        return a / b;
      }

      const safeDivide = mtcp(divide);

      safeDivide(10, 2).then((result) => {
        console.log(result); // This will log "5"
      });

      safeDivide(10, 0).then((error) => {
        console.log(error); // This will log an Error object
      });
    </script>
  `
};

export const SB_NOOP: ProjectFiles = {
  'index.js': html`
    <script>
      import { noop } from '@aracna/core';

      function doSomething(callback) {
        // Perform some operation
        callback();
      }

      doSomething(noop);
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

      const result = rc(() => add(2, 3), 10);

      console.log(result); // This will log "10"
    </script>
  `
};

export const SB_RCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { rcp } from '@aracna/core';

      async function multiply(a, b) {
        return a * b;
      }

      const result = rcp(() => multiply(5, 3), 0);

      result.then((value) => {
        console.log(value); // This will log "0"
      });
    </script>
  `
};

export const SB_RNE: ProjectFiles = {
  'index.js': html`
    <script>
      import { rne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return rne('Cannot divide by zero');
        } else {
          return a / b;
        }
      }

      const result1 = divide(10, 2);
      console.log(result1); // This will log "5"

      const result2 = divide(10, 0);
      console.log(result2.message); // This will log "Cannot divide by zero"
    </script>
  `
};

export const SB_RV: ProjectFiles = {
  'index.js': html`
    <script>
      import { rv } from '@aracna/core';

      function multiply(a, b) {
        return a * b;
      }

      rv(() => multiply(5, 3));
      console.log(rv()); // This will log "undefined"
    </script>
  `
};

export const SB_RVP: ProjectFiles = {
  'index.js': html`
    <script>
      import { rvp } from '@aracna/core';

      function logMessage(message) {
        console.log(message);
      }

      rvp(() => logMessage('Hello, world!')).then(() =>
        console.log('Promise resolved')
      );
    </script>
  `
};

export const SB_SLEEP: ProjectFiles = {
  'index.js': html`
    <script>
      import { sleep } from '@aracna/core';

      console.log('Before sleep');
      sleep(2000).then(() => {
        console.log('After sleep');
      });
    </script>
  `
};

export const SB_TC: ProjectFiles = {
  'index.js': html`
    <script>
      import { tc } from '@aracna/core';

      function divide(a, b) {
        return tc(() => {
          if (b === 0) {
            throw new Error('Cannot divide by zero');
          }

          return a / b;
        });
      }

      console.log(divide(10, 2)); // Output: 5
      console.log(divide(10, 0)); // Output: Error: Cannot divide by zero
    </script>
  `
};

export const SB_TCP: ProjectFiles = {
  'index.js': html`
    <script>
      import { tcp } from '@aracna/core';

      function divide(a, b) {
        return tcp(async () => {
          if (b === 0) {
            throw new Error('Cannot divide by zero');
          }

          return a / b;
        });
      }

      divide(10, 2).then((result) => {
        console.log(result); // Output: 5
      });
      divide(10, 0).then((result) => {
        console.log(result); // Output: Error: Cannot divide by zero
      });
    </script>
  `
};

export const SB_THROTTLE_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { throttle } from '@aracna/core';

      function logMessage(message) {
        console.log(message);
      }

      const throttledLogMessage = throttle(logMessage, 1000);

      throttledLogMessage('Hello, world!');
      throttledLogMessage('Hello again!');
    </script>
  `
};

export const SB_THROTTLE_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { throttle } from '@aracna/core';

      const throttledFunction = throttle(
        'myFunction',
        () => {
          console.log('This function is throttled!');
        },
        500
      );

      throttledFunction();
      throttledFunction();
      throttledFunction();
    </script>
  `
};

export const SB_TIE: ProjectFiles = {
  'index.js': html`
    <script>
      import { tie } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          return tie(new Error('Cannot divide by zero'));
        }

        return a / b;
      }

      console.log(divide(10, 2)); // Output: 5
      console.log(divide(10, 0)); // Throws an error: Cannot divide by zero
    </script>
  `
};

export const SB_TNE: ProjectFiles = {
  'index.js': html`
    <script>
      import { tne } from '@aracna/core';

      function divide(a, b) {
        if (b === 0) {
          tne('Cannot divide by zero');
        }

        return a / b;
      }

      console.log(divide(10, 2)); // Output: 5
      console.log(divide(10, 0)); // Throws an error: Cannot divide by zero
    </script>
  `
};

export const SB_WF: ProjectFiles = {
  'index.js': html`
    <script>
      import { wf } from '@aracna/core';

      async function waitForCondition(condition) {
        await wf(() => condition());
        console.log('Condition met');
      }

      waitForCondition(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);

        return randomNumber > 50;
      });
    </script>
  `
};

export const SB_WFP: ProjectFiles = {
  'index.js': html`
    <script>
      import { wfp } from '@aracna/core';

      async function waitForCondition(condition) {
        await wfp(() => condition());
        console.log('Condition met');
      }

      waitForCondition(async () => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);

        return randomNumber > 50;
      });
    </script>
  `
};
