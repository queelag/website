import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_MEMORY_STORAGE_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item1', { name: 'John', surname: 'Doe' });
      MemoryStorage.set('item2', { name: 'Paul', surname: 'Smith' });
      console.log(MemoryStorage.has('item1'), MemoryStorage.has('item2')); // will log true, true

      MemoryStorage.clear();
      console.log(MemoryStorage.has('item1'), MemoryStorage.has('item2')); // will log false, false
    </script>
  `
};

export const SB_MEMORY_STORAGE_COPY: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });

      const target = {};
      MemoryStorage.copy('item', target);

      console.log(target); // will log { name: "John", surname: "Doe" }
    </script>
  `
};

export const SB_MEMORY_STORAGE_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      console.log(MemoryStorage.get('item')); // will log { name: "John", surname: "Doe" }
    </script>
  `
};

export const SB_MEMORY_STORAGE_HAS: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      console.log(MemoryStorage.has('item')); // will log true
    </script>
  `
};

export const SB_MEMORY_STORAGE_REMOVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      console.log(MemoryStorage.has('item')); // will log true

      MemoryStorage.remove('item');
      console.log(MemoryStorage.has('item')); // will log false
    </script>
  `
};

export const SB_MEMORY_STORAGE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { MemoryStorage } from '@aracna/core';

      MemoryStorage.set('item', { name: 'John', surname: 'Doe' });
      console.log(MemoryStorage.get('item')); // will log { name: "John", surname: "Doe" }
    </script>
  `
};
