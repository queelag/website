import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_API_BASE_URL: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Make a GET request to "https://example.com/api/users"
      api
        .get('users')
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_CONFIG: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/" and a default "Authorization" header
      const api = new API('https://example.com/api/', {
        headers: {
          Authorization: 'Bearer my-token'
        }
      });

      // Make a GET request to "https://example.com/api/users" with the default "Authorization" header
      api
        .get('users')
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_STATUS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Make a GET request to "https://example.com/api/users"
      api
        .get('users')
        .then((response) => {
          console.log(api.status.get('GET', 'users')); // This will log "SUCCESS"
        })
        .catch((error) => {
          console.log(api.status.get('GET', 'users')); // This will log "ERROR"
        });

      console.log(api.status.get('GET', 'users')); // This will log "PENDING"
    </script>
  `
};

export const SB_API_TRANSFORM_BODY: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Define a function to transform the request body into JSON format
      async function transformBody(method, path, body, config) {
        if (typeof body === 'object') {
          return JSON.stringify(body);
        }

        return body;
      }

      // Set the "transformBody" method of the API instance to our custom function
      api.transformBody = transformBody;

      // Make a POST request to "https://example.com/api/users" with a JSON request body
      api
        .post('users', { name: 'John Doe', email: 'john.doe@example.com' })
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_TRANSFORM_QUERY_PARAMETERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Define a function to transform the query parameters into a URL-encoded string
      async function transformQueryParameters(method, path, body, config) {
        if (typeof config.query === 'object') {
          return new URLSearchParams(query).toString();
        }

        return config.query ?? '';
      }

      // Set the "transformQueryParameters" method of the API instance to our custom function
      api.transformQueryParameters = transformQueryParameters;

      // Make a GET request to "https://example.com/api/users?name=John%20Doe&email=john.doe%40example.com"
      api
        .get('users', {
          config: { name: 'John Doe', email: 'john.doe@example.com' }
        })
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_HANDLE_ERROR: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      class MyCustomError extends Error {}

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Define a function to handle a specific type of error
      async function handleError(method, path, body, config, error) {
        if (error instanceof MyCustomError) {
          // Handle the error
          return true;
        }

        return false;
      }

      // Set the "handleError" method of the API instance to our custom function
      api.handleError = handleError;

      // Make a GET request to "https://example.com/api/users"
      api
        .get('users')
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_HANDLE_PENDING: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Define a function to always handle pending requests
      async function handlePending(method, path, body, config) {
        // Always handle pending requests
        return true;
      }

      // Set the "handlePending" method of the API instance to our custom function
      api.handlePending = handlePending;

      // Make a GET request to "https://example.com/api/users"
      api
        .get('users')
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_API_HANDLE_SUCCESS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, RequestMethod } from '@aracna/core';

      // Create a new instance of the API class with a base URL of "https://example.com/api/"
      const api = new API('https://example.com/api/');

      // Define a function to handle successful responses
      async function handleSuccess(method, path, body, config, response) {
        // Check if the response status code is 200
        if (response.status === 200) {
          // Handle the successful response
          return true;
        }

        return false;
      }

      // Set the "handleSuccess" method of the API instance to our custom function
      api.handleSuccess = handleSuccess;

      // Make a GET request to "https://example.com/api/users"
      api
        .get('users')
        .then((response) => {
          // Handle the response
        })
        .catch((error) => {
          // Handle the error
        });
    </script>
  `
};

export const SB_BASE16: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base16 } from '@aracna/core';

      // Define a binary data array
      const binaryData = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      // Encode the binary data as a Base16-encoded string
      const encodedString = Base16.encode(binaryData);

      console.log(encodedString); // Output: "48656C6C6F20576F726C64"

      // Decode the Base16-encoded string into binary data
      const decodedArray = Base16.decode(encodedString);

      console.log(decodedArray); // Output: Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_BASE32: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base32 } from '@aracna/core';

      // Define a binary data array
      const binaryData = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      // Encode the binary data as a Base32-encoded string
      const encodedString = Base32.encode(binaryData);

      console.log(encodedString); // Output: "JBSWY3DPEBLW64TMMQQQ===="

      // Decode the Base32-encoded string into binary data
      const decodedArray = Base32.decode(encodedString);

      console.log(decodedArray); // Output: Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base64 } from '@aracna/core';

      // Define a binary data array
      const binaryData = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      // Encode the binary data as a Base64-encoded string
      const encodedString = Base64.encode(binaryData);

      console.log(encodedString); // Output: "SGVsbG8gV29ybGQ="

      // Decode the Base64-encoded string into binary data
      const decodedArray = Base64.decode(encodedString);

      console.log(decodedArray); // Output: Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_COOKIE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';
    </script>
  `
};
