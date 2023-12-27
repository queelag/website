import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_MEMORY_STORAGE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item1', { name: 'John', surname: 'Doe' });
      MemoryStorage.set('item2', { name: 'Paul', surname: 'Smith' });
      MemoryStorage.clear();

      // will log false, false
      console.log(MemoryStorage.has('item1'), MemoryStorage.has('item2'));
    </script>
  `
};

export const SB_MEMORY_STORAGE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      const target = {};

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      MemoryStorage.copy('item', target);

      // will log { name: "John", surname: "Doe" }
      console.log(target);
    </script>
  `
};

export const SB_MEMORY_STORAGE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(MemoryStorage.get('item'));
    </script>
  `
};

export const SB_MEMORY_STORAGE_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(MemoryStorage.has('item'));
    </script>
  `
};

export const SB_MEMORY_STORAGE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      MemoryStorage.remove('item');

      // will log false
      console.log(MemoryStorage.has('item'));
    </script>
  `
};

export const SB_MEMORY_STORAGE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(MemoryStorage.get('item'));
    </script>
  `
};
