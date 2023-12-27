import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_LOCAL_STORAGE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(localStorage.getItem('item'));
    </script>
  `
};

export const SB_LOCAL_STORAGE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(LocalStorage.get('item'));
    </script>
  `
};

export const SB_LOCAL_STORAGE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(localStorage.hasItem('item'));

      LocalStorage.remove('item');

      // will log false
      console.log(localStorage.hasItem('item'));
    </script>
  `
};

export const SB_LOCAL_STORAGE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item1', { name: 'John', surname: 'Doe' });
      LocalStorage.set('item2', { name: 'Paul', surname: 'Smith' });

      // will log true, true
      console.log(localStorage.hasItem('item1'), localStorage.hasItem('item2'));

      LocalStorage.clear();

      // will log false, false
      console.log(localStorage.hasItem('item1'), sm.hasItem('item2'));
    </script>
  `
};

export const SB_LOCAL_STORAGE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item', { name: 'John', surname: 'Doe' });

      const target = {};
      LocalStorage.copy('item', target);

      // will log { name: "John", surname: "Doe" }
      console.log(target);
    </script>
  `
};

export const SB_LOCAL_STORAGE_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      LocalStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(LocalStorage.has('item'));
    </script>
  `
};

export const SB_SESSION_STORAGE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(sessionStorage.getItem('item'));
    </script>
  `
};

export const SB_SESSION_STORAGE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log { name: "John", surname: "Doe" }
      console.log(SessionStorage.get('item'));
    </script>
  `
};

export const SB_SESSION_STORAGE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(sessionStorage.hasItem('item'));

      SessionStorage.remove('item');

      // will log false
      console.log(sessionStorage.hasItem('item'));
    </script>
  `
};

export const SB_SESSION_STORAGE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item1', { name: 'John', surname: 'Doe' });
      SessionStorage.set('item2', { name: 'Paul', surname: 'Smith' });

      // will log true, true
      console.log(
        sessionStorage.hasItem('item1'),
        sessionStorage.hasItem('item2')
      );

      SessionStorage.clear();

      // will log false, false
      console.log(sessionStorage.hasItem('item1'), sm.hasItem('item2'));
    </script>
  `
};

export const SB_SESSION_STORAGE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item', { name: 'John', surname: 'Doe' });

      const target = {};
      SessionStorage.copy('item', target);

      // will log { name: "John", surname: "Doe" }
      console.log(target);
    </script>
  `
};

export const SB_SESSION_STORAGE_HAS: ProjectFiles = {
  'app.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      SessionStorage.set('item', { name: 'John', surname: 'Doe' });

      // will log true
      console.log(SessionStorage.has('item'));
    </script>
  `
};
