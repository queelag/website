import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DOCUMENT_COOKIE_SET: ProjectFiles = {
  'app.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      DocumentCookie.set('item', item, options);
      console.log(document.cookie); // will log "item_name=john; item_surname=doe"
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_GET: ProjectFiles = {
  'app.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      DocumentCookie.set('item', item, options);
      console.log(DocumentCookie.get('item')); // will log { name: "john", surname: "doe" }
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_REMOVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      DocumentCookie.set('item', item, options);
      console.log(document.cookie); // will log "item_name=john; item_surname=doe"

      DocumentCookie.remove('item', options);
      console.log(document.cookie); // will log ""
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_CLEAR: ProjectFiles = {
  'app.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      DocumentCookie.set('item1', item, options);
      DocumentCookie.set('item2', item, options);
      console.log(document.cookie); // will log "item1_name=john; item1_surname=doe; item2_name=john; item2_surname=doe;"

      DocumentCookie.clear(options);
      console.log(document.cookie); // will log ""
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_COPY: ProjectFiles = {
  'app.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      const item = {
        name: 'john',
        surname: 'doe'
      };

      const options = {
        sameSite: 'none',
        secure: true
      };

      const target = {};

      DocumentCookie.set('item', item, options);
      DocumentCookie.copy('item', target);

      console.log(target); // will log { name: "john", surname: "doe" }
    </script>
  `
};
