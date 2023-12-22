import { html } from '@/functions/html.js';
import type { ProjectFiles } from '@stackblitz/sdk';

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

export const SB_ENVIRONMENT: ProjectFiles = {
  'index.js': html`
    <script>
      import { Environment } from '@aracna/core';

      console.log(Environment.isDocumentDefined); // will log true
      console.log(Environment.isWindowDefined); // will log true
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

      console.log(ID.generate({ prefix: 'pre' })); // will log pre_...
      console.log(ID.generate({ suffix: 'post' })); // will log ..._post
      console.log(ID.generate({ prefix: 'pre', separator: '-' })); // will log pre-...
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

export const SB_TEXT_CODEC: ProjectFiles = {
  'index.js': html`
    <script>
      import { TextCodec } from '@aracna/core';

      const encoded = TextCodec.encode('Hello');
      console.log(encoded); // will log [72, 101, 108, 108, 111]

      const decoded = TextCodec.decode(encoded);
      console.log(decoded); // will log "Hello"
    </script>
  `
};

export const SB_TIMEOUT_FN_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { Timeout } from '@aracna/core';

      function fn() {
        console.log('running', Date.now());
      }

      Timeout.set(fn, 1000);
      console.log('timeout set', Date.now());

      setTimeout(() => {
        Timeout.set(fn, 1000);
        Timeout.unset(fn); // will not run anymore after 1s
      }, 2000);
    </script>
  `
};

export const SB_TIMEOUT_NAME_AS_KEY: ProjectFiles = {
  'index.js': html`
    <script>
      import { Timeout } from '@aracna/core';

      const ID = 'timeout';

      Timeout.set(ID, () => console.log('running t1', Date.now()), 1000);
      console.log('timeout set', Date.now());

      setTimeout(() => {
        Timeout.set(ID, () => console.log('running t2', Date.now()), 1000);
        Timeout.unset(ID); // will not run anymore after 1s
      }, 2000);
    </script>
  `
};

export const SB_TIMEOUT_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { Timeout } from '@aracna/core';

      Timeout.set(() => console.log('running t1', Date.now()), 1000);
      Timeout.set(() => console.log('running t2', Date.now()), 1000);

      Timeout.clear(); // both timeouts will not run
    </script>
  `
};

export const SB_TYPEAHEAD: ProjectFiles = {
  'index.js': html`
    <script>
      import { Typeahead } from '@aracna/core';

      const typeahead = new Typeahead((item) => {
        console.log(item);
      });

      const input = document.createElement('input');
      const items = ['apple', 'banana', 'cherry'];

      input.addEventListener('keydown', (event) => {
        event.preventDefault();
        event.stopPropagation();

        typeahead.handle(event.key, items);
      });

      document.getElementById('root').append(input);
    </script>
  `
};
