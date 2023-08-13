import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ARACNA_BLOB_RESOLVE_ARRAY_BUFFER: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';
      import './index.css';

      function readBlobAsAracnaBlob(blob) {
        const aracnaBlob = new AracnaBlob(blob);
        return aracnaBlob.resolveArrayBuffer().then(() => aracnaBlob);
      }

      // Example usage:
      const binaryData = new Uint8Array([
        0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
      ]);
      const blob = new Blob([binaryData], { type: 'application/octet-stream' });

      readBlobAsAracnaBlob(blob).then((aracnaBlob) => {
        console.log(new Uint8Array(aracnaBlob.arrayBuffer));
      });
    </script>
  `
};

export const SB_ARACNA_BLOB_RESOLVE_TEXT: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';
      import './index.css';

      function readBlobAsAracnaBlob(blob) {
        const aracnaBlob = new AracnaBlob(blob);
        return aracnaBlob.resolveText().then(() => aracnaBlob);
      }

      // Example usage:
      const textData = 'Hello, world!';
      const blob = new Blob([textData], { type: 'text/plain' });

      readBlobAsAracnaBlob(blob).then((aracnaBlob) => {
        console.log(aracnaBlob.text);
      });
    </script>
  `
};

export const SB_ARACNA_BLOB_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';
      import './index.css';

      function readBlobAsAracnaBlob(blob) {
        const aracnaBlob = new AracnaBlob(blob);
        return aracnaBlob.resolveArrayBuffer().then(() => aracnaBlob);
      }

      // Example usage:
      const binaryData = new Uint8Array([
        0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
      ]);
      const blob = new Blob([binaryData], { type: 'application/octet-stream' });

      readBlobAsAracnaBlob(blob).then((aracnaBlob) => {
        console.log(aracnaBlob.base64);
      });
    </script>
  `
};

export const SB_ARACNA_BLOB_UINT8ARRAY: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';
      import './index.css';

      function readBlobAsAracnaBlob(blob) {
        const aracnaBlob = new AracnaBlob(blob);
        return aracnaBlob.resolveArrayBuffer().then(() => aracnaBlob);
      }

      // Example usage:
      const binaryData = new Uint8Array([
        0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
      ]);
      const blob = new Blob([binaryData], { type: 'application/octet-stream' });

      readBlobAsAracnaBlob(blob).then((aracnaBlob) => {
        const uInt8Array = aracnaBlob.uInt8Array;
        console.log(uInt8Array);
      });
    </script>
  `
};

export const SB_ARACNA_BLOB_SERIALIZATION: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';
      import './index.css';

      function readBlobAsAracnaBlob(blob) {
        const aracnaBlob = new AracnaBlob(blob);
        return aracnaBlob.resolveArrayBuffer().then(() => aracnaBlob);
      }

      // Example usage:
      const binaryData = new Uint8Array([
        0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64
      ]);
      const blob = new Blob([binaryData], { type: 'application/octet-stream' });

      readBlobAsAracnaBlob(blob).then((aracnaBlob) => {
        const serialized = JSON.stringify(aracnaBlob);
        console.log(serialized);
        const deserializedAracnaBlob = new AracnaBlob(JSON.parse(serialized));
        console.log(deserializedAracnaBlob.uInt8Array);
      });
    </script>
  `
};
