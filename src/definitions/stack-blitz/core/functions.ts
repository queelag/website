import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_TC_COMPARISON_WITH_VANILLA: ProjectFiles = {
  'aracna.ts': html`
    <script>
      import { tc } from '@aracna/core';

      function willThrow(): void {
        throw new Error();
      }

      // tc is straight forward, type safe and won't cause nesting
      const value: void | Error = tc(() => willThrow());

      if (value instanceof Error) {
        // handle error
      }
    </script>
  `,
  'vanilla.ts': html`
    <script>
      function willThrow(): void {
        throw new Error();
      }

      // now in vanilla es you would just try catch it
      try {
        willThrow();
      } catch (error) {
        // handle error
      }
      // but this try catch made you nest your code by one level
    </script>
  `
};

export const SB_INTERVAL_AND_TIMEOUT_COMPARISON_WITH_VANILLA: ProjectFiles = {
  'aracna.ts': html`
    <script>
      import { Interval, Timeout } from '@aracna/core';

      function fn(): void {}

      // set the interval to run fn every second
      Interval.start(fn, 1000);

      // clear the interval
      Interval.stop(fn);

      // set the timeout to run fn after 1 second
      Timeout.set(fn, 1000);

      // clear the timeout
      Timeout.unset(fn);
    </script>
  `,
  'vanilla.ts': html`
    <script>
      function fn(): void {}

      // need to define a variable to save the id
      const intervalID: number = setInterval(fn, 1000);

      // clear the interval
      clearInterval(intervalID);

      // need to define a variable to save the id
      const timeoutID: number = setTimeout(fn, 1000);

      // clear the timeout
      clearTimeout(timeoutID);
    </script>
  `
};
