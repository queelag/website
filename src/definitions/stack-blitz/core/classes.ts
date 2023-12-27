import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

/**
 * Appearence
 */
/** */

export const SB_APPEARENCE_INITIALIZATION: ProjectFiles = {
  'app.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      async () => {
        await appearence.initialize();
        console.log('will log "system"', appearence.theme);

        appearence.setTheme('dark');
        await appearence.store();
        appearence.setTheme('light');
        await appearence.initialize();

        // will log "dark"
        console.log(appearence.theme);
      };
    </script>
  `
};

export const SB_APPEARENCE_ON_CHANGE_THEME: ProjectFiles = {
  'app.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      appearence.on('change-theme', (theme) => {
        // will log "dark"
        console.log(theme);
      });

      appearence.setTheme('dark');
    </script>
  `
};

export const SB_APPEARENCE_SET_THEME: ProjectFiles = {
  'app.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      // will log "system"
      console.log(appearence.theme);

      appearence.setTheme('dark');

      // will log "dark"
      console.log(appearence.theme);
    </script>
  `
};

export const SB_APPEARENCE_TOGGLE_THEME: ProjectFiles = {
  'app.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      // will log "system"
      console.log(appearence.theme);

      appearence.toggleTheme();

      // will log "dark" or "light" depending on the opposite of your system theme
      console.log(appearence.theme);
    </script>
  `
};

export const SB_APPEARENCE_STORE: ProjectFiles = {
  'app.js': html`
    <script>
      import { Appearence, MemoryStorage } from '@aracna/core';

      const appearence = new Appearence();

      (async () => {
        appearence.setTheme('dark');
        await appearence.store();

        // will log { theme: "dark" }
        console.log(MemoryStorage.get('appearence'));
      })();
    </script>
  `
};

/**
 * AracnaBlob
 */
/** */

export const SB_ARACNA_BLOB_RESOLVE_ARRAY_BUFFER: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let binary, blob;

        binary = new Uint8Array([
          0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
        ]);
        blob = new AracnaBlob(new Blob([binary]));

        await blob.resolveArrayBuffer();

        // will log ArrayBuffer
        console.log(blob.arrayBuffer);

        // will log Uint8Array
        console.log(blob.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_RESOLVE_TEXT: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let blob;

        blob = new AracnaBlob(new Blob(['hello']));
        await blob.resolveText();

        // will log "hello"
        console.log(blob.text);

        // will log Uint8Array
        console.log(blob.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_UINT8ARRAY: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let blob;

        blob = new AracnaBlob(new Blob(['hello']));
        await blob.resolveText();

        // will log Uint8Array
        console.log(blob.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_SERIALIZATION: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let blob, serialized, deserialized;

        blob = new AracnaBlob(new Blob(['hello']));
        await blob.resolveText();

        // will log "hello"
        console.log(blob.text);

        // will log Uint8Array
        console.log(blob.uInt8Array);

        serialized = JSON.stringify(blob, null, 2);

        // will log JSON string
        console.log(serialized);

        deserialized = new AracnaBlob(JSON.parse(serialized));

        // will log AracnaBlob
        console.log(deserialized);

        // will log "hello"
        console.log(deserialized.text);

        // will log Uint8Array
        console.log(deserialized.uInt8Array);
      })();
    </script>
  `
};

/**
 * AracnaFile
 */
/** */

export const SB_ARACNA_FILE_RESOLVE_ARRAY_BUFFER: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let binary, file;

        binary = new Uint8Array([
          0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
        ]);
        file = new AracnaFile(new File([binary], 'file.bin'));

        await file.resolveArrayBuffer();

        // will log ArrayBuffer
        console.log(file.arrayBuffer);

        // will log Uint8Array
        console.log(file.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_RESOLVE_TEXT: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let file;

        file = new AracnaFile(new File(['hello'], 'file.txt'));
        await file.resolveText();

        // will log "hello"
        console.log(file.text);

        // will log Uint8Array
        console.log(file.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_UINT8ARRAY: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let file;

        file = new AracnaFile(new File(['hello'], 'file.txt'));
        await file.resolveText();

        // will log Uint8Array
        console.log(file.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_SERIALIZATION: ProjectFiles = {
  'app.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let file, serialized, deserialized;

        file = new AracnaFile(new File(['hello'], 'file.txt'));
        await file.resolveText();

        // will log "file.txt"
        console.log(file.name);

        // will log "hello"
        console.log(file.text);

        // will log Uint8Array
        console.log(file.uInt8Array);

        serialized = JSON.stringify(file, null, 2);

        // will log JSON string
        console.log(serialized);

        deserialized = new AracnaFile(JSON.parse(serialized));

        // will log AracnaFile
        console.log(deserialized);

        // will log "file.txt"
        console.log(deserialized.name);

        // will log "hello"
        console.log(deserialized.text);

        // will log Uint8Array
        console.log(deserialized.uInt8Array);
      })();
    </script>
  `
};

/**
 * AsyncStorage
 */
/** */

export const SB_ASYNC_STORAGE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(sm.get('item'));
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(await storage.get('item'));
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(sm.has('item'));

        await storage.remove('item');

        // will log false
        console.log(sm.has('item'));
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item1', { name: 'John', surname: 'Doe' });
        await storage.set('item2', { name: 'Paul', surname: 'Smith' });

        // will log true, true
        console.log(sm.has('item1'), sm.has('item2'));

        await storage.clear();

        // will log false, false
        console.log(sm.has('item1'), sm.has('item2'));
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        let target = {};

        await storage.set('item', { name: 'John', surname: 'Doe' });
        await storage.copy('item', target);

        // will log { name: "John", surname: "Doe" }
        console.log(target);
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { AsyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new AsyncStorage(
        'storage',
        async () => sm.clear(),
        async (key) => sm.get(key),
        async (key) => sm.has(key),
        async (key) => sm.remove(key),
        async (key, item) => sm.set(key, item)
      );

      (async () => {
        await storage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(await storage.has('item'));
      })();
    </script>
  `
};

/**
 * Cookie
 */
/** */

export const SB_COOKIE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        () => document.cookie,
        (cookies) => {
          document.cookie = cookies;
        }
      );

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      cookie.set('item', item, options);

      // will log "item_name=john; item_surname=doe"
      console.log(document.cookie);
    </script>
  `
};

export const SB_COOKIE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        () => document.cookie,
        (cookies) => {
          document.cookie = cookies;
        }
      );

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      cookie.set('item', item, options);

      // will log { name: "john", surname: "doe" }
      console.log(cookie.get('item'));
    </script>
  `
};

export const SB_COOKIE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        () => document.cookie,
        (cookies) => {
          document.cookie = cookies;
        }
      );

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      cookie.set('item', item, options);
      cookie.remove('item', options);

      // will log ""
      console.log(document.cookie);
    </script>
  `
};

export const SB_COOKIE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        () => document.cookie,
        (cookies) => {
          document.cookie = cookies;
        }
      );

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      cookie.set('item1', item, options);
      cookie.set('item2', item, options);
      cookie.clear(options);

      // will log ""
      console.log(document.cookie);
    </script>
  `
};

export const SB_COOKIE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { Cookie } from '@aracna/core';

      const cookie = new Cookie(
        'cookie',
        () => document.cookie,
        (cookies) => {
          document.cookie = cookies;
        }
      );

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      const target = {};

      cookie.set('item', item, options);
      cookie.copy('item', target);

      // will log { name: "john", surname: "doe" }
      console.log(target);
    </script>
  `
};

/**
 * DeferredPromise
 */
/** */

export const SB_DEFERRED_PROMISE_RESOLVE: ProjectFiles = {
  'app.js': html`
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

export const SB_DEFERRED_PROMISE_REJECT: ProjectFiles = {
  'app.js': html`
    <script>
      import { DeferredPromise } from '@aracna/core';

      (async () => {
        let promise;

        promise = new DeferredPromise();
        console.log('promise created', Date.now());

        setTimeout(() => promise.reject(), 1000);

        try {
          await promise.instance;
        } catch (error) {
          console.log('promise rejected', error);
        }
      })();
    </script>
  `
};

/**
 * EventEmitter
 */
/** */

export const SB_EVENT_EMITTER_ON: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        // will log "hello"
        console.log(data);
      });

      emitter.emit('event', 'hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_ONCE: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.once('event', (data) => {
        // will log "hello" only once
        console.log(data);
      });

      emitter.emit('event', 'hello');
      emitter.emit('event', 'hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_PREPEND: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        // will log "hello" second
        console.log('on', data);
      });

      emitter.prepend('event', (data) => {
        // will log "hello" first
        console.log('prepend', data);
      });

      emitter.emit('event', 'hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_EMIT: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        // will log "hello"
        console.log(data);
      });

      emitter.emit('event', 'hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_OFF: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      emitter.on('event', listener);
      emitter.emit('event', 'hello');
      emitter.off('event', listener);
      emitter.emit('event', 'hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_LISTENERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      emitter.on('event', listener);

      // will log [listener]
      console.log(emitter.getListeners('event'));
    </script>
  `
};

export const SB_EVENT_EMITTER_COUNT_LISTENERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      emitter.on('event', listener);

      // will log 1
      console.log(emitter.countListeners('event'));
    </script>
  `
};

export const SB_EVENT_EMITTER_HAS_LISTENERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      emitter.on('event', listener);

      // will log true
      console.log(emitter.hasListeners('event'));
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_EVENT_NAMES: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      emitter.on('event', listener);

      // will log ["event"]
      console.log(emitter.getEventNames());
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_MAX_LISTENERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      // will log 10
      console.log(emitter.getMaxListeners());
    </script>
  `
};

export const SB_EVENT_EMITTER_SET_MAX_LISTENERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();
      emitter.setMaxListeners(1);

      const listener = (data) => {
        // will log "hello" only once
        console.log(data);
      };

      // will register
      emitter.on('event', listener);

      // will not register
      emitter.on('event', listener);
    </script>
  `
};

/**
 * Fetch
 */
/** */

export const SB_FETCH: ProjectFiles = {
  'app.js': html`
    <script>
      import { Fetch } from '@aracna/core';

      (async () => {
        let response;

        response = await Fetch.send('https://dummyjson.com/users');
        if (response instanceof Error) return;

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

/**
 * GraphQlAPI
 */
/** */

export const SB_GRAPHQL_API_QUERY: ProjectFiles = {
  'app.js': html`
    <script>
      import { GraphQlAPI } from '@aracna/core';

      const api = new GraphQlAPI('https://graphqlzero.almansi.me/api');

      (async () => {
        let query, response;

        query =
          'query getUsers($limit: Int) { users(options: { paginate: { limit: $limit } }) { data { email id name username } } }';

        response = await api.query(query);
        if (response instanceof Error) return;

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

export const SB_GRAPHQL_API_MUTATION: ProjectFiles = {
  'app.js': html`
    <script>
      import { GraphQlAPI } from '@aracna/core';

      const api = new GraphQlAPI('https://graphqlzero.almansi.me/api');

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

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

/**
 * Localization
 */
/** */

export const SB_LOCALIZATION_INITIALIZE: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en');

      (async () => {
        localization.setLanguage('it');
        await localization.store();
        localization.setLanguage('en');
        await localization.initialize();

        // will log "it"
        console.log(localization.language);
      })();
    </script>
  `
};

export const SB_LOCALIZATION_PACKS: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello' }, language: 'en' }
      ]);

      localization.push({ data: { hello: 'Ciao' }, language: 'it' });

      // will log both packs
      console.log(localization.packs);
    </script>
  `
};

export const SB_LOCALIZATION_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        {
          data: { hello: 'Hello', hello_with_name: 'Hello {name}' },
          language: 'en'
        },
        {
          data: { hello: 'Ciao', hello_with_name: 'Ciao {name}' },
          language: 'it'
        }
      ]);

      // will log "Hello"
      console.log(localization.get('hello'));

      // will log "Ciao"
      console.log(localization.get('it', 'hello'));

      // will log "Hello John"
      console.log(localization.get('hello_with_name', { name: 'John' }));

      // will log "Ciao Mario"
      console.log(localization.get('it', 'hello_with_name', { name: 'Mario' }));

      localization.setLanguage('it');

      // will log "Ciao"
      console.log(localization.get('hello'));

      // will log "Ciao Mario"
      console.log(localization.get('hello_with_name', { name: 'Mario' }));
      x;
    </script>
  `
};

export const SB_LOCALIZATION_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello' }, language: 'en' },
        { data: { hello: 'Ciao' }, language: 'it' }
      ]);

      // will log true
      console.log(localization.has('hello'));

      // will log true
      console.log(localization.has('it', 'hello'));

      localization.setLanguage('it');

      // will log true
      console.log(localization.has('hello'));
    </script>
  `
};

export const SB_LOCALIZATION_SET_LANGUAGE: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en');

      // will log "en"
      console.log(localization.language);

      localization.setLanguage('it');

      // will log "it"
      console.log(localization.language);
    </script>
  `
};

export const SB_LOCALIZATION_SET_VARIABLES: ProjectFiles = {
  'app.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization(
        'en',
        [{ data: { hello: 'Hello {name}' }, language: 'en' }],
        { name: 'John' }
      );

      // will log "Hello John"
      console.log(localization.get('hello'));

      localization.setVariables({ name: 'Mark' });

      // will log "Hello Mark"
      console.log(localization.get('hello'));

      // will log "Hello Paul"
      console.log(localization.get('hello', { name: 'Paul' }));
    </script>
  `
};

export const SB_LOCALIZATION_STORAGE: ProjectFiles = {
  'app.js': html`
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
        // will log "Hello John"
        console.log(localization.get('hello', { name: 'John' }));

        await localization.storeLanguage('it');

        // will log "Ciao Mario"
        console.log(localization.get('hello', { name: 'Mario' }));

        localization.setLanguage('en');

        // will log "Hello John"
        console.log(localization.get('hello', { name: 'John' }));

        await localization.initialize();

        // will log "Hello John"
        console.log(localization.get('hello', { name: 'John' }));
      })();
    </script>
  `
};

/**
 * Logger
 */

export const SB_LOGGER: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');

      // will log "warn" as a warning
      logger.warn('warn');

      // will log "error" as an error
      logger.error('error');
    </script>
  `
};

export const SB_LOGGER_COLORS: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');

      logger.enableColors();

      // will log "warn" with ANSI colors
      logger.warn('warn log');

      logger.disableColors();

      // will log "warn" without ANSI colors
      logger.warn('warn log');
    </script>
  `
};

export const SB_LOGGER_SET_LEVEL: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.setLevel('verbose');

      // will log "verbose" as a verbose log
      logger.verbose('verbose log');
    </script>
  `
};

export const SB_LOGGER_SET_SEPARATOR: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.setSeparator(' ~> ');

      // will log "multi ~> part ~> log"
      logger.warn('multi', 'part', 'log');
    </script>
  `
};

export const SB_LOGGER_STATUS: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.disable();

      // will not log
      logger.warn('warn log');

      logger.enable();

      // will log
      logger.warn('warn log');
    </script>
  `
};

export const SB_LOGGER_ENVIRONMENT: ProjectFiles = {
  'app.js': html`
    <script>
      import { Logger } from '@aracna/core';

      process.env.LOGGER_APP_LEVEL = 'verbose';
      process.env.LOGGER_APP_STATUS = 'on';

      const logger = new Logger('APP');

      // will log "verbose"
      logger.verbose('verbose log');
    </script>
  `
};

/**
 * RestAPI
 */
/** */

export const SB_REST_API_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI } from '@aracna/core';

      const api = new RestAPI('https://dummyjson.com/');

      (async () => {
        let response;

        response = await api.get('users');
        if (response instanceof Error) return;

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

export const SB_REST_API_STATUS: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI, wf } from '@aracna/core';

      const api = new RestAPI('https://dummyjson.com/');

      (async () => {
        // will log "IDLE"
        console.log(api.status.get('GET', 'test'));

        api.get('test').then(() => {
          // will log "SUCCESS"
          console.log(api.status.get('GET', 'test'));
        });

        // will log "PENDING"
        console.log(api.status.get('GET', 'test'));

        await wf(() => api.status.isSuccess('GET', 'test'));

        // will log "IDLE"
        console.log(api.status.get('GET', 'unknown'));

        api.get('unknown').then(() => {
          // will log "ERROR"
          console.log(api.status.get('GET', 'unknown'));
        });

        // will log "PENDING"
        console.log(api.status.get('GET', 'unknown'));
      })();
    </script>
  `
};

export const SB_REST_API_TRANSFORM_BODY: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI } from '@aracna/core';

      class MyAPI extends RestAPI {
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

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

export const SB_REST_API_TRANSFORM_QUERY_PARAMETERS: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI, serializeQueryParameters } from '@aracna/core';

      class MyAPI extends RestAPI {
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

        // will log FetchResponse
        console.log(response.data);
      })();
    </script>
  `
};

export const SB_REST_API_HANDLE_ERROR: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI } from '@aracna/core';

      class MyAPI extends RestAPI {
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

        // will log "SUCCESS"
        console.log(api.status.get('GET', 'unknown'));
      })();
    </script>
  `
};

export const SB_REST_API_HANDLE_PENDING: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI } from '@aracna/core';

      class MyAPI extends RestAPI {
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

        // will log FetchError
        console.log(response);
      })();
    </script>
  `
};

export const SB_REST_API_HANDLE_SUCCESS: ProjectFiles = {
  'app.js': html`
    <script>
      import { RestAPI } from '@aracna/core';

      class MyAPI extends RestAPI {
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

        // will log FetchError
        console.log(response);
      })();
    </script>
  `
};

/**
 * Status
 */
/** */

export const SB_STATUS: ProjectFiles = {
  'app.js': html`
    <script>
      import { Status } from '@aracna/core';

      const status = new Status();

      status.idle('t1');

      // will log true
      console.log(status.isIdle('t1'));

      status.pending('t2');

      // will log true
      console.log(status.isPending('t2'));

      // will log true
      console.log(status.areSomeIdle('t1', 't2'));

      // will log true
      console.log(status.areSomePending('t1', 't2'));

      status.pending('t1');

      // will log true
      console.log(status.isPending('t1'));

      // will log false
      console.log(status.isEveryIdle('t1', 't2'));

      // will log true
      console.log(status.isEveryPending('t1', 't2'));
    </script>
  `
};

/**
 * SyncStorage
 */
/** */

export const SB_SYNC_STORAGE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      storage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(sm.get('item'));
    </script>
  `
};

export const SB_SYNC_STORAGE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      storage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(storage.get('item'));
    </script>
  `
};

export const SB_SYNC_STORAGE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      storage.set('item', { name: 'John', surname: 'Doe' });
      storage.remove('item');

      // will log false
      console.log(sm.has('item'));
    </script>
  `
};

export const SB_SYNC_STORAGE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      storage.set('item1', { name: 'John', surname: 'Doe' });
      storage.set('item2', { name: 'Paul', surname: 'Smith' });
      storage.clear();

      // will log false, false
      console.log(sm.has('item1'), sm.has('item2'));
    </script>
  `
};

export const SB_SYNC_STORAGE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      const target = {};

      storage.set('item', { name: 'John', surname: 'Doe' });
      storage.copy('item', target);

      // will log { name: "John", surname: "Doe" }
      console.log(target);
    </script>
  `
};

export const SB_SYNC_STORAGE_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { SyncStorage } from '@aracna/core';

      const sm = new Map();
      const storage = new SyncStorage(
        'storage',
        () => sm.clear(),
        (key) => sm.get(key),
        (key) => sm.has(key),
        (key) => sm.remove(key),
        (key, item) => sm.set(key, item)
      );

      storage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(storage.has('item'));
    </script>
  `
};

/**
 * VisibilityController
 */
/** */

export const SB_VISIBILITY_CONTROLLER_SHOW: ProjectFiles = {
  'app.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.show('dialog');

        // will log true
        console.log(controller.isVisible('dialog'));
      })();
    </script>
  `
};

export const SB_VISIBILITY_CONTROLLER_HIDE: ProjectFiles = {
  'app.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.show('dialog');

        // will log true
        console.log(controller.isVisible('dialog'));

        await controller.hide('dialog');

        // will log true
        console.log(controller.isHidden('dialog'));
      })();
    </script>
  `
};

export const SB_VISIBILITY_CONTROLLER_TOGGLE: ProjectFiles = {
  'app.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.toggle('dialog');

        // will log true
        console.log(controller.isVisible('dialog'));

        await controller.toggle('dialog');

        // will log true
        console.log(controller.isHidden('dialog'));
      })();
    </script>
  `
};
