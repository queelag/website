import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

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

        console.log(blob.arrayBuffer);
        console.log(blob.uInt8Array);
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

        console.log(blob.text);
        console.log(blob.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_BLOB_BASE64: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaBlob } from '@aracna/core';

      (async () => {
        let text, blob;

        text = 'Hello';
        blob = new AracnaBlob(new Blob([text]));

        await blob.resolveText();

        console.log(blob.text);
        console.log(blob.base64);
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

        console.log(blob.uInt8Array);
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

        console.log(blob.text);
        console.log(blob.uInt8Array);

        serialized = JSON.stringify(blob, null, 2);
        console.log(serialized);

        deserialized = new AracnaBlob(JSON.parse(serialized));
        console.log(deserialized);

        console.log(deserialized.text);
        console.log(deserialized.uInt8Array);
      })();
    </script>
  `
};

export const SB_ARACNA_FILE_EXTRA_GETTERS: ProjectFiles = {
  'index.js': html`
    <script>
      import { AracnaFile } from '@aracna/core';

      const file = new AracnaFile(new File(['Hello'], 'file.txt'));

      console.log(file.lastModified);
      console.log(file.lastModifiedDate);
      console.log(file.name);
      console.log(file.webkitRelativePath);
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

        console.log(file.name);
        console.log(file.text);
        console.log(file.uInt8Array);

        serialized = JSON.stringify(file, null, 2);
        console.log(serialized);

        deserialized = new AracnaFile(JSON.parse(serialized));
        console.log(deserialized);

        console.log(deserialized.name);
        console.log(deserialized.text);
        console.log(deserialized.uInt8Array);
      })();
    </script>
  `
};
