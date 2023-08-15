import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_API_BASE_URL: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      const api = new API('https://dummyjson.com/');

      (async () => {
        let response;

        response = await api.get('test');
        if (response instanceof Error) return;

        console.log(response.data); // will log { status: "ok", method: "GET" }
      })();
    </script>
  `
};

export const SB_API_CONFIG: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      const api = new API('https://dummyjson.com/', {
        headers: {
          authorization: 'Bearer my-token'
        }
      });

      (async () => {
        let response;

        response = await api.get('test');
        if (response instanceof Error) return;

        console.log(response.data); // will log { status: "ok", method: "GET" }
      })();
    </script>
  `
};

export const SB_API_STATUS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, wf } from '@aracna/core';

      const api = new API('https://dummyjson.com/');

      (async () => {
        console.log(api.status.get('GET', 'test')); // will log "IDLE"

        api.get('test').then(() => {
          console.log(api.status.get('GET', 'test')); // will log "SUCCESS"
        });

        console.log(api.status.get('GET', 'test')); // will log "PENDING"

        await wf(() => api.status.isSuccess('GET', 'test'));

        console.log(api.status.get('GET', 'unknown')); // will log "IDLE"

        api.get('unknown').then(() => {
          console.log(api.status.get('GET', 'unknown')); // will log "ERROR"
        });

        console.log(api.status.get('GET', 'unknown')); // will log "PENDING"
      })();
    </script>
  `
};

export const SB_API_TRANSFORM_BODY: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      class MyAPI extends API {
        async transformBody(method, path, body, config) {
          body.firstName = body.name.split(' ')[0];
          body.lastName = body.name.split(' ')[1];

          return body;
        }
      }

      const api = new MyAPI('https://dummyjson.com/');

      (async () => {
        let body, response;

        body = {
          email: 'john.doe@email.com',
          name: 'John Doe'
        };

        response = await api.post('users/add', body);
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_API_TRANSFORM_QUERY_PARAMETERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API, serializeQueryParameters } from '@aracna/core';

      class MyAPI extends API {
        async transformQueryParameters(method, path, body, config) {
          if (config.query.limit === 0) {
            delete config.query.limit;
          }

          return serializeQueryParameters(config.query);
        }
      }

      const api = new MyAPI('https://dummyjson.com/');

      (async () => {
        let query, response;

        query = {
          limit: 0,
          select: ['email', 'firstName', 'lastName']
        };

        response = await api.get('users', { query });
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_API_HANDLE_ERROR: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      class MyAPI extends API {
        async handleError(method, path, body, config, error) {
          if (path === 'unknown') {
            return true;
          }

          return false;
        }
      }

      const api = new MyAPI('https://dummyjson.com/');

      (async () => {
        await api.get('unknown');
        console.log(api.status.get('GET', 'unknown')); // will log "SUCCESS"
      })();
    </script>
  `
};

export const SB_API_HANDLE_PENDING: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      class MyAPI extends API {
        async handlePending(method, path, body, config) {
          if (path === 'users') {
            return false;
          }

          return true;
        }
      }

      const api = new MyAPI('https://dummyjson.com/');

      (async () => {
        let response;

        response = await api.get('users');
        console.log(response); // will log Error
      })();
    </script>
  `
};

export const SB_API_HANDLE_SUCCESS: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      class MyAPI extends API {
        async handleSuccess(method, path, body, config, response) {
          if (path === 'users') {
            return false;
          }

          return true;
        }
      }

      const api = new MyAPI('https://dummyjson.com/');

      (async () => {
        let response;

        response = await api.get('users');
        console.log(response); // will log Error
      })();
    </script>
  `
};

export const SB_BASE16: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base16 } from '@aracna/core';

      let binary, encoded, decoded;

      binary = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      encoded = Base16.encode(binary);
      console.log(encoded); // will log "48656C6C6F20576F726C64"

      decoded = Base16.decode(encoded);
      console.log(decoded); // will log Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_BASE32: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base32 } from '@aracna/core';

      let binary, encoded, decoded;

      binary = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      encoded = Base32.encode(binary);
      console.log(encoded); // will log "JBSWY3DPEBLW64TMMQQQ===="

      decoded = Base32.decode(encoded);
      console.log(decoded); // will log Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { Base64 } from '@aracna/core';

      let binary, encoded, decoded;

      binary = new Uint8Array([
        72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100
      ]);

      encoded = Base64.encode(binary);
      console.log(encoded); // will log "SGVsbG8gV29ybGQ="

      decoded = Base64.decode(encoded);
      console.log(decoded); // will og Uint8Array [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    </script>
  `
};

export const SB_COOKIE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        async () => document.cookie,
        async (cookies) => {
          document.cookie = cookies;
        }
      );

      (async () => {
        let item, options;

        item = {
          name: 'john',
          surname: 'doe'
        };

        options = {
          sameSite: 'none',
          secure: true
        };

        await cookie.set('item', item, options);
        console.log(document.cookie); // will log "item_name=john; item_surname=doe"
      })();
    </script>
  `
};

export const SB_COOKIE_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        async () => document.cookie,
        async (cookies) => {
          document.cookie = cookies;
        }
      );

      (async () => {
        let item, options;

        item = {
          name: 'john',
          surname: 'doe'
        };

        options = {
          sameSite: 'none',
          secure: true
        };

        await cookie.set('item', item, options);
        console.log(await cookie.get('item')); // will log { name: "john", surname: "doe" }
      })();
    </script>
  `
};

export const SB_COOKIE_REMOVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        async () => document.cookie,
        async (cookies) => {
          document.cookie = cookies;
        }
      );

      (async () => {
        let item, options;

        item = {
          name: 'john',
          surname: 'doe'
        };

        options = {
          sameSite: 'none',
          secure: true
        };

        await cookie.set('item', item, options);
        console.log(document.cookie); // will log "item_name=john; item_surname=doe"

        await cookie.remove('item', options);
        console.log(document.cookie); // will log ""
      })();
    </script>
  `
};

export const SB_COOKIE_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        async () => document.cookie,
        async (cookies) => {
          document.cookie = cookies;
        }
      );

      (async () => {
        let item, options;

        item = {
          name: 'john',
          surname: 'doe'
        };

        options = {
          sameSite: 'none',
          secure: true
        };

        await cookie.set('item1', item, options);
        await cookie.set('item2', item, options);
        console.log(document.cookie); // will log "item1_name=john; item1_surname=doe; item2_name=john; item2_surname=doe;"

        await cookie.clear(options);
        console.log(document.cookie); // will log ""
      })();
    </script>
  `
};

export const SB_COOKIE_COPY: ProjectFiles = {
  'index.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        async () => document.cookie,
        async (cookies) => {
          document.cookie = cookies;
        }
      );

      (async () => {
        let item, options, target;

        item = {
          name: 'john',
          surname: 'doe'
        };

        options = {
          sameSite: 'none',
          secure: true
        };

        target = {};

        await cookie.set('item', item, options);
        await cookie.copy('item', target);

        console.log(target); // will log { name: "john", surname: "doe" }
      })();
    </script>
  `
};

export const SB_DEFERRED_PROMISE: ProjectFiles = {
  'index.js': html`
    <script>
      import { DeferredPromise } from '@aracna/core';

      (async () => {
        let promise;

        promise = new DeferredPromise();
        console.log('promise created', Date.now());

        setTimeout(() => promise.resolve(), 1000);

        await promise.instance;
        console.log('promise resolved', Date.now());
      })();
    </script>
  `
};

export const SB_ENVIRONMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { Environment } from '@aracna/core';

      console.log(Environment.isDocumentDefined); // will log true
      console.log(Environment.isWindowDefined); // will log true
    </script>
  `
};

export const SB_FETCH: ProjectFiles = {
  'index.js': html`
    <script>
      import { Fetch } from '@aracna/core';

      (async () => {
        let response;

        response = await Fetch.get('https://dummyjson.com/users');
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_GRAPHQL_API_QUERY: ProjectFiles = {
  'index.js': html`
    <script>
      import { GraphQLAPI } from '@aracna/core';

      const api = new GraphQLAPI('https://graphqlzero.almansi.me/api');

      (async () => {
        let query, response;

        query =
          'query getUsers($limit: Int) { users(options: { paginate: { limit: $limit } }) { data { email id name username } } }';

        response = await api.query(query);
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_GRAPHQL_API_MUTATION: ProjectFiles = {
  'index.js': html`
    <script>
      import { GraphQLAPI } from '@aracna/core';

      const api = new GraphQLAPI('https://graphqlzero.almansi.me/api');

      (async () => {
        let query, variables, response;

        query =
          'mutation createUser($email: String!, $name: String!, $username: String!) { createUser(input: { email: $email, name: $name, username: $username }) { email id name username } }';

        variables = {
          email: 'john.doe@email.com',
          name: 'John Doe',
          username: 'john.doe'
        };

        response = await api.mutation(query, variables);
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_ID: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';

      console.log(ID.generate()); // will log a 32 chars random alphanumeric string
    </script>
  `
};

export const SB_ID_ALPHABET: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';

      console.log(ID.generate({ alphabet: '0123456789' })); // will log a 32 chars random numeric string
    </script>
  `
};

export const SB_ID_PREFIX_SUFFIX_SEPARATOR: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';

      console.log(ID.generate({ prefix: 'pre' })); // will logs pre_...
      console.log(ID.generate({ suffix: 'post' })); // will logs ..._post
      console.log(ID.generate({ prefix: 'pre', separator: '-' })); // will logs pre-...
    </script>
  `
};

export const SB_ID_SIZE: ProjectFiles = {
  'index.js': html`
    <script>
      import { ID } from '@aracna/core';

      console.log(ID.generate({ size: 8 })); // will log a 8 chars random alphanumeric string
    </script>
  `
};

export const SB_INTERVAL_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { Interval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      Interval.start(fn, 1000);

      setTimeout(() => Interval.stop(fn), 2500);
    </script>
  `
};

export const SB_INTERVAL_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { Interval } from '@aracna/core';

      const ID = 'interval';

      Interval.start(ID, () => console.log('running', Date.now()), 1000);

      setTimeout(() => Interval.stop(ID), 2500);
    </script>
  `
};

export const SB_INTERVAL_AUTORUN: ProjectFiles = {
  'index.js': html`
    <script>
      import { Interval } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      Interval.start(fn, 1000, true); // will run fn instantly

      setTimeout(() => Interval.stop(fn), 2500);
    </script>
  `
};

export const SB_INTERVAL_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { Interval } from '@aracna/core';

      Interval.start(() => console.log('running i1', Date.now()), 1000);
      Interval.start(() => console.log('running i2', Date.now()), 1000);

      setTimeout(() => Interval.clear(), 2500);
    </script>
  `
};

export const SB_LOCALIZATION_PACKS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello' }, language: 'en' }
      ]);

      localization.push({ data: { hello: 'Ciao' }, language: 'it' });
      console.log(localization.packs); // will log both packs
    </script>
  `
};

export const SB_LOCALIZATION_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello' }, language: 'en' },
        { data: { hello: 'Ciao' }, language: 'it' }
      ]);

      console.log(localization.get('hello')); // will log "Hello"
      console.log(localization.get('it', 'hello')); // will log "Ciao"

      localization.setLanguage('it');
      console.log(localization.get('hello')); // will log "Ciao"
    </script>
  `
};

export const SB_LOCALIZATION_VARIABLES: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello {name}' }, language: 'en' },
        { data: { hello: 'Ciao {name}' }, language: 'it' }
      ]);

      console.log(localization.get('hello', { name: 'John' })); // will log "Hello John"
      console.log(localization.get('it', 'hello', { name: 'Mario' })); // will log "Ciao Mario"

      localization.variables.name = 'Unknown';

      console.log(localization.get('hello')); // will log "Hello Unknown"
    </script>
  `
};

export const SB_LOCALIZATION_STORAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';
      import { LocalStorage } from '@aracna/web';

      const localization = new Localization(
        'en',
        [
          { data: { hello: 'Hello {name}' }, language: 'en' },
          { data: { hello: 'Ciao {name}' }, language: 'it' }
        ],
        LocalStorage
      );

      (async () => {
        console.log(localization.get('hello', { name: 'John' })); // will log "Hello John"

        await localization.storeLanguage('it');
        console.log(localization.get('hello', { name: 'Mario' })); // will log "Ciao Mario"

        localization.setLanguage('en');
        console.log(localization.get('hello', { name: 'John' })); // will log "Hello John"

        await localization.initialize();
        console.log(localization.get('hello', { name: 'John' })); // will log "Hello John"
      })();
    </script>
  `
};

export const SB_LOGGER: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');

      logger.warn('warn log');
      logger.error('error log');
    </script>
  `
};

export const SB_LOGGER_SEPARATOR: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.separator = ' ~> ';

      logger.warn('multi', 'part', 'log');
    </script>
  `
};

export const SB_LOGGER_STATUS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');

      logger.disable();
      logger.warn('warn log'); // will not log

      logger.enable();
      logger.warn('warn log'); // will log
    </script>
  `
};

export const SB_LOGGER_ENVIRONMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      process.env.LOGGER_APP_LEVEL = 'verbose';
      process.env.LOGGER_APP_STATUS = 'on';

      const logger = new Logger('APP');

      logger.verbose('verbose log');
    </script>
  `
};

export const SB_POLYFILL_FETCH: ProjectFiles = {
  'index.js': html`
    <script>
      import { Polyfill } from '@aracna/core';

      (async () => {
        await Polyfill.fetch();

        // will log fetch, Headers, Request, Response
        console.log(fetch, Headers, Request, Response);
      })();
    </script>
  `
};

export const SB_POLYFILL_BLOB: ProjectFiles = {
  'index.js': html`
    <script>
      import { Polyfill } from '@aracna/core';

      (async () => {
        await Polyfill.blob();
        console.log(Blob); // will log Blob
      })();
    </script>
  `
};

export const SB_POLYFILL_FILE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Polyfill } from '@aracna/core';

      (async () => {
        await Polyfill.file();
        console.log(File); // will log File
      })();
    </script>
  `
};

export const SB_POLYFILL_FORM_DATA: ProjectFiles = {
  'index.js': html`
    <script>
      import { Polyfill } from '@aracna/core';

      (async () => {
        await Polyfill.formData();
        console.log(FormData); // will log FormData
      })();
    </script>
  `
};

export const SB_STATUS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Status } from '@aracna/core';

      const status = new Status();

      status.pending('test');
      console.log(status.get('test')); // will log "PENDING"

      status.error('test');
      console.log(status.get('test')); // will log "ERROR"

      status.pending('test');
      console.log(status.get('test')); // will log "SUCCESS"
    </script>
  `
};

export const SB_STATUS_IS_GETTERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Status } from '@aracna/core';

      const status = new Status();

      status.idle('t1');
      console.log(status.isIdle('t1')); // will log true

      status.pending('t2');
      console.log(status.isPending('t2')); // will log true

      console.log(status.areSomeIdle('t1', 't2')); // will log true
      console.log(status.areSomePending('t1', 't2')); // will log true

      status.pending('t1');
      console.log(status.isPending('t1')); // will log true

      console.log(status.isEveryIdle('t1', 't2')); // will log false
      console.log(status.isEveryPending('t1', 't2')); // will log true
    </script>
  `
};

export const SB_STORAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Storage } from '@aracna/core';

      const sm = new Map();
      const storage = new Storage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item', { name: 'John', surname: 'Doe' });
        console.log(await storage.get('item')); // will log { name: "John", surname: "Doe" }
      })();
    </script>
  `
};
