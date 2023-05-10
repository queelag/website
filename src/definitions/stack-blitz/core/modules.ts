import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_FETCH_SHOWCASE: ProjectFiles = {
  'index.ts': html`
    <script>
      import { Fetch, FetchError, FetchResponse } from '@aracna/core';

      async function getProducts() {
        let response: FetchResponse<object> | FetchError;

        response = await Fetch.get('https://dummyjson.com/products');
        if (response instanceof Error) return;

        // automatically parses the response body, no need to call .json()
        console.log(response.data);
      }

      async function createProduct(title: string) {
        let body: object, response: FetchResponse<object> | FetchError;

        body = {
          title
        };

        // automatically serializes the body and sets the correct headers
        response = await Fetch.post('https://dummyjson.com/products/add', body);
        if (response instanceof Error) return;

        // automatically parses the response body, no need to call .json()
        console.log(response.data);
      }
    </script>
  `
};

export const SB_FETCH_COMPARISON_WITH_VANILLA: ProjectFiles = {
  'aracna.ts': html`
    <script>
      import { Fetch, FetchError, FetchResponse } from '@aracna/core';

      /**
       * Async / Await
       */
      async function main() {
        let response: FetchResponse<object> | FetchError;

        // Fetch exposes a function for each request method, in this case a GET
        response = await Fetch.get('https://dummyjson.com/products');
        if (response instanceof Error) return;

        // will log the already parsed JSON
        console.log(response.data);
      }

      /**
       * Callbacks
       */
      Fetch.get('https://dummyjson.com/products').then(
        (response: FetchResponse<object> | FetchError) => {
          if (response instanceof Error) return;

          // will log the already parsed JSON
          console.log(response.data);
        }
      );
    </script>
  `,
  'vanilla.ts': html`
    <script>
      /**
       * Async / Await
       */
      async function main() {
        let response: Response, json: object;

        try {
          // if the request is not a GET you will need to manually specify the method
          response = await fetch('https://dummyjson.com/products');
        } catch (error) {
          // handle fetch error
        }

        try {
          // need to manually decide what content to parse
          json = await response.json();
        } catch (error) {
          // handle json error
        }
      }

      /**
       * Callbacks
       */
      fetch('https://dummyjson.com/products')
        .then((response: Response) => {
          response
            .json()
            .then((json: object) => {
              console.log(json);
            })
            .catch((error: Error) => {
              // handle json error
            });
        })
        .catch((error: Error) => {
          // handle fetch error
        });
    </script>
  `
};

export const SB_LOCALIZATION_SHOWCASE: ProjectFiles = {
  'index.ts': html`
    <script>
      import { Localization } from '@aracna/core';
      import { SessionStorage } from '@aracna/web';

      const localization: Localization = new Localization(
        'en-US',
        [
          {
            data: {
              apple: 'Apple',
              fruit: 'My favorite fruit is {apple}',
              hello: 'Hello {name}'
            },
            language: 'en-US'
          },
          {
            data: {
              apple: 'Mela',
              fruit: 'Il mio frutto preferito è la {apple}',
              hello: 'Ciao {name}'
            },
            language: 'it-IT'
          }
        ],
        SessionStorage
      );

      // will log "Apple"
      console.log(localization.get('apple'));

      // will log "My favorite fruit is Apple"
      console.log(localization.get('fruit'));

      // will log "Il mio frutto preferito è la Mela"
      console.log(localization.get('it-IT', 'fruit'));

      // will log "Hello John"
      console.log(localization.get('hello', { name: 'John' }));

      // will log "Ciao John"
      console.log(localization.get('it-IT', 'hello', { name: 'John' }));
    </script>
  `
};
