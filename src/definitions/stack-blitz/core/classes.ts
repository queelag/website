import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_APPEARENCE_INITIALIZATION: ProjectFiles = {
  'index.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      async () => {
        await appearence.initialize();
        console.log(appearence.theme); // will log "system"

        appearence.setTheme('dark');
        await appearence.store();

        await appearence.initialize();
        console.log(appearence.theme); // will log "dark"
      };
    </script>
  `
};

export const SB_APPEARENCE_ON_CHANGE_THEME: ProjectFiles = {
  'index.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();

      appearence.on('change-theme', (theme) => {
        console.log(theme); // will log "dark"
      });

      appearence.setTheme('dark');
    </script>
  `
};

export const SB_APPEARENCE_SET_THEME: ProjectFiles = {
  'index.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();
      console.log(appearence.theme); // will log "system"

      appearence.setTheme('dark');
      console.log(appearence.theme); // will log "dark"
    </script>
  `
};

export const SB_APPEARENCE_TOGGLE_THEME: ProjectFiles = {
  'index.js': html`
    <script>
      import { Appearence } from '@aracna/core';

      const appearence = new Appearence();
      console.log(appearence.theme); // will log "system"

      appearence.toggleTheme();
      console.log(appearence.theme); // will log "dark" or "light" depending on the opposite of your system theme
    </script>
  `
};

export const SB_APPEARENCE_STORE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Appearence, MemoryStorage } from '@aracna/core';

      const appearence = new Appearence();

      (async () => {
        appearence.setTheme('dark');
        await appearence.store();

        console.log(MemoryStorage.get('appearence')); // will log { theme: "dark" }
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_RESOLVE_ARRAY_BUFFER: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let binary, blob;

        binary = new Uint8Array([
          0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
        ]);
        blob = new AracnaBlob(new Blob([binary]));

        await blob.resolveArrayBuffer();

        console.log(blob.arrayBuffer); // will log ArrayBuffer
        console.log(blob.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_RESOLVE_TEXT: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let text, blob;

        text = 'Hello';
        blob = new AracnaBlob(new Blob([text]));

        await blob.resolveText();

        console.log(blob.text); // will log "Hello"
        console.log(blob.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_UINT8ARRAY: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let text, blob;

        text = 'Hello';
        blob = new AracnaBlob(new Blob([text]));

        await blob.resolveText();

        console.log(blob.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_SERIALIZATION: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let text, blob, serialized, deserialized;

        text = 'Hello';
        blob = new AracnaBlob(new Blob([text]));

        await blob.resolveText();

        console.log(blob.text); // will log "Hello"
        console.log(blob.uInt8Array); // will log Uint8Array

        serialized = JSON.stringify(blob, null, 2);
        console.log(serialized); // will log JSON string

        deserialized = new AracnaBlob(JSON.parse(serialized));
        console.log(deserialized); // will log AracnaBlob

        console.log(deserialized.text); // will log "Hello"
        console.log(deserialized.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_RESOLVE_ARRAY_BUFFER: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let binary, file;

        binary = new Uint8Array([
          0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
        ]);
        file = new AracnaFile(new File([binary], 'file.bin'));

        await file.resolveArrayBuffer();

        console.log(file.arrayBuffer); // will log ArrayBuffer
        console.log(file.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_RESOLVE_TEXT: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let text, file;

        text = 'Hello';
        file = new AracnaFile(new File([text], 'file.txt'));

        await file.resolveText();

        console.log(file.text); // will log "Hello"
        console.log(file.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_UINT8ARRAY: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let text, file;

        text = 'Hello';
        file = new AracnaFile(new File([text], 'file.txt'));

        await file.resolveText();

        console.log(file.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_SERIALIZATION: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      (async () => {
        let text, file, serialized, deserialized;

        text = 'Hello';
        file = new AracnaFile(new File([text], 'file.txt'));

        await file.resolveText();

        console.log(file.name); // will log "file.txt"
        console.log(file.text); // will log "Hello"
        console.log(file.uInt8Array); // will log Uint8Array

        serialized = JSON.stringify(file, null, 2);
        console.log(serialized); // will log JSON string

        deserialized = new AracnaFile(JSON.parse(serialized));
        console.log(deserialized); // will log AracnaFile

        console.log(deserialized.name); // will log "file.txt"
        console.log(deserialized.text); // will log "Hello"
        console.log(deserialized.uInt8Array); // will log Uint8Array
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_SET: ProjectFiles = {
  'index.js': html`
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
        console.log(sm.get('item')); // will log { name: "John", surname: "Doe" }
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_GET: ProjectFiles = {
  'index.js': html`
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
        console.log(await storage.get('item')); // will log { name: "John", surname: "Doe" }
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_REMOVE: ProjectFiles = {
  'index.js': html`
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
        console.log(sm.has('item')); // will log true

        await storage.remove('item');
        console.log(sm.has('item')); // will log false
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_CLEAR: ProjectFiles = {
  'index.js': html`
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
        console.log(sm.has('item1'), sm.has('item2')); // will log true, true

        await storage.clear();
        console.log(sm.has('item1'), sm.has('item2')); // will log false, false
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_COPY: ProjectFiles = {
  'index.js': html`
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
        let target;

        await storage.set('item', { name: 'John', surname: 'Doe' });

        target = {};
        await storage.copy('item', target);

        console.log(target); // will log { name: "John", surname: "Doe" }
      })();
    </script>
  `
};

export const SB_ASYNC_STORAGE_HAS: ProjectFiles = {
  'index.js': html`
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
        console.log(await storage.has('item')); // will log true
      })();
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

export const SB_DEFERRED_PROMISE_RESOLVE: ProjectFiles = {
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

export const SB_DEFERRED_PROMISE_REJECT: ProjectFiles = {
  'index.js': html`
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

export const SB_EVENT_EMITTER_ON: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        console.log(data); // will log "Hello"
      });

      emitter.emit('event', 'Hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_ONCE: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.once('event', (data) => {
        console.log(data); // will log "Hello" only once
      });

      emitter.emit('event', 'Hello');
      emitter.emit('event', 'Hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_PREPEND: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        console.log('on', data); // will log "Hello" second
      });

      emitter.prepend('event', (data) => {
        console.log('prepend', data); // will log "Hello" first
      });

      emitter.emit('event', 'Hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_EMIT: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      emitter.on('event', (data) => {
        console.log(data); // will log "Hello"
      });

      emitter.emit('event', 'Hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_OFF: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener);
      emitter.emit('event', 'Hello');
      emitter.off('event', listener);
      emitter.emit('event', 'Hello');
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_LISTENERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener);
      console.log(emitter.getListeners('event')); // will log [listener]
    </script>
  `
};

export const SB_EVENT_EMITTER_COUNT_LISTENERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener);
      console.log(emitter.countListeners('event')); // will log 1
    </script>
  `
};

export const SB_EVENT_EMITTER_HAS_LISTENERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener);
      console.log(emitter.hasListeners('event')); // will log true
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_EVENT_NAMES: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener);
      console.log(emitter.getEventNames()); // will log ["event"]
    </script>
  `
};

export const SB_EVENT_EMITTER_GET_MAX_LISTENERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();
      console.log(emitter.getMaxListeners()); // will log 10
    </script>
  `
};

export const SB_EVENT_EMITTER_SET_MAX_LISTENERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { EventEmitter } from '@aracna/core';

      const emitter = new EventEmitter();
      emitter.setMaxListeners(1);

      const listener = (data) => {
        console.log(data); // will log "Hello" only once
      };

      emitter.on('event', listener); // will register
      emitter.on('event', listener); // will not register
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

export const SB_LOCALIZATION_INITIALIZE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en');

      (async () => {
        localization.setLanguage('it');
        await localization.store();

        await localization.initialize();
        console.log(localization.language); // will log "it"
      })();
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
        {
          data: { hello: 'Hello', hello_with_name: 'Hello {name}' },
          language: 'en'
        },
        {
          data: { hello: 'Ciao', hello_with_name: 'Ciao {name}' },
          language: 'it'
        }
      ]);

      console.log(localization.get('hello')); // will log "Hello"
      console.log(localization.get('it', 'hello')); // will log "Ciao"

      console.log(localization.get('hello_with_name', { name: 'John' })); // will log "Hello John"
      console.log(localization.get('it', 'hello_with_name', { name: 'Mario' })); // will log "Ciao Mario"

      localization.setLanguage('it');

      console.log(localization.get('hello')); // will log "Ciao"
      console.log(localization.get('hello_with_name', { name: 'Mario' })); // will log "Ciao Mario"
    </script>
  `
};

export const SB_LOCALIZATION_HAS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en', [
        { data: { hello: 'Hello' }, language: 'en' },
        { data: { hello: 'Ciao' }, language: 'it' }
      ]);

      console.log(localization.has('hello')); // will log true
      console.log(localization.has('it', 'hello')); // will log true

      localization.setLanguage('it');
      console.log(localization.has('hello')); // will log true
    </script>
  `
};

export const SB_LOCALIZATION_SET_LANGUAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization('en');
      console.log(localization.language); // will log "en"

      localization.setLanguage('it');
      console.log(localization.language); // will log "it"
    </script>
  `
};

export const SB_LOCALIZATION_SET_VARIABLES: ProjectFiles = {
  'index.js': html`
    <script>
      import { Localization } from '@aracna/core';

      const localization = new Localization(
        'en',
        [{ data: { hello: 'Hello {name}' }, language: 'en' }],
        { name: 'John' }
      );

      console.log(localization.get('hello')); // will log "Hello John"

      localization.setVariables({ name: 'Mark' });
      console.log(localization.get('hello')); // will log "Hello Mark"

      console.log(localization.get('hello', { name: 'Paul' })); // will log "Hello Paul"
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

export const SB_LOGGER_COLORS: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');

      logger.enableColors();
      logger.warn('warn log');

      logger.disableColors();
      logger.warn('warn log');
    </script>
  `
};

export const SB_LOGGER_SET_LEVEL: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.setLevel('verbose');

      logger.verbose('verbose log');
    </script>
  `
};

export const SB_LOGGER_SET_SEPARATOR: ProjectFiles = {
  'index.js': html`
    <script>
      import { Logger } from '@aracna/core';

      const logger = new Logger('logger');
      logger.setSeparator(' ~> ');

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

export const SB_REST_API_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { API } from '@aracna/core';

      const api = new API('https://dummyjson.com/');

      (async () => {
        let response;

        response = await api.get('users');
        if (response instanceof Error) return;

        console.log(response.data);
      })();
    </script>
  `
};

export const SB_REST_API_STATUS: ProjectFiles = {
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

export const SB_REST_API_TRANSFORM_BODY: ProjectFiles = {
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

export const SB_REST_API_TRANSFORM_QUERY_PARAMETERS: ProjectFiles = {
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

export const SB_REST_API_HANDLE_ERROR: ProjectFiles = {
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

export const SB_REST_API_HANDLE_PENDING: ProjectFiles = {
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

export const SB_REST_API_HANDLE_SUCCESS: ProjectFiles = {
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

export const SB_STATUS: ProjectFiles = {
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

export const SB_SYNC_STORAGE_SET: ProjectFiles = {
  'index.js': html`
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
      console.log(sm.get('item')); // will log { name: "John", surname: "Doe" }
    </script>
  `
};

export const SB_SYNC_STORAGE_GET: ProjectFiles = {
  'index.js': html`
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
      console.log(storage.get('item')); // will log { name: "John", surname: "Doe" }
    </script>
  `
};

export const SB_SYNC_STORAGE_REMOVE: ProjectFiles = {
  'index.js': html`
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
      console.log(sm.has('item')); // will log true

      storage.remove('item');
      console.log(sm.has('item')); // will log false
    </script>
  `
};

export const SB_SYNC_STORAGE_CLEAR: ProjectFiles = {
  'index.js': html`
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
      console.log(sm.has('item1'), sm.has('item2')); // will log true, true

      storage.clear();
      console.log(sm.has('item1'), sm.has('item2')); // will log false, false
    </script>
  `
};

export const SB_SYNC_STORAGE_COPY: ProjectFiles = {
  'index.js': html`
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

      const target = {};
      storage.copy('item', target);

      console.log(target); // will log { name: "John", surname: "Doe" }
    </script>
  `
};

export const SB_SYNC_STORAGE_HAS: ProjectFiles = {
  'index.js': html`
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
      console.log(storage.has('item')); // will log true
    </script>
  `
};

export const SB_VISIBILITY_CONTROLLER_SHOW: ProjectFiles = {
  'index.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.show('dialog');
        console.log(controller.isVisible('dialog')); // will log true
      })();
    </script>
  `
};

export const SB_VISIBILITY_CONTROLLER_HIDE: ProjectFiles = {
  'index.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.show('dialog');
        console.log(controller.isVisible('dialog')); // will log true

        await controller.hide('dialog');
        console.log(controller.isHidden('dialog')); // will log true
      })();
    </script>
  `
};

export const SB_VISIBILITY_CONTROLLER_TOGGLE: ProjectFiles = {
  'index.js': html`
    <script>
      import { VisibilityController } from '@aracna/core';

      const controller = new VisibilityController();

      (async () => {
        await controller.toggle('dialog');
        console.log(controller.isVisible('dialog')); // will log true

        await controller.toggle('dialog');
        console.log(controller.isHidden('dialog')); // will log true
      })();
    </script>
  `
};
