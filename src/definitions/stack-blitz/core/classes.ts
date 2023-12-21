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
