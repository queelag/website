import { html } from '@/functions/html.js'
import type { ProjectFiles } from '@stackblitz/sdk'

export const SB_FETCH_COMPARISON: ProjectFiles = {
  'with-aracna.ts': html`
    <script>
      import { Fetch, FetchError, FetchResponse } from '@aracna/core'

      /**
       * Async / Await
       */
      async function main() {
        let response: FetchResponse | FetchError

        response = await Fetch.get('https://dummyjson.com/products')
        if (response instanceof Error) return

        // will log the already parsed JSON
        console.log(response.data)
      }

      /**
       * Callbacks
       */
      Fetch.get('https://dummyjson.com/products').then((response: FetchResponse | FetchError) => {
        if (response instanceof Error) return

        // will log the already parsed JSON
        console.log(response.data)
      })
    </script>
  `,
  'without-aracna.ts': html`
    <script>
      /**
       * Async / Await
       */
      async function main() {
        try {
          const response: Response = await fetch('https://dummyjson.com/products')
          const json: object = await response.json()

          console.log(json)
        } catch (error: unknown) {
          // handle error
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
              console.log(json)
            })
            .catch((error: Error) => {
              // handle error
            })
        })
        .catch((error: Error) => {
          // handle error
        })
    </script>
  `
}
