import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DOCUMENT_COOKIE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

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

        await DocumentCookie.set('item', item, options);
        console.log(document.cookie); // will log "item_name=john; item_surname=doe"
      })();
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

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

        await DocumentCookie.set('item', item, options);
        console.log(await cookie.get('item')); // will log { name: "john", surname: "doe" }
      })();
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_REMOVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

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

        await DocumentCookie.set('item', item, options);
        console.log(document.cookie); // will log "item_name=john; item_surname=doe"

        await DocumentCookie.remove('item', options);
        console.log(document.cookie); // will log ""
      })();
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

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

        await DocumentCookie.set('item1', item, options);
        await DocumentCookie.set('item2', item, options);
        console.log(document.cookie); // will log "item1_name=john; item1_surname=doe; item2_name=john; item2_surname=doe;"

        await DocumentCookie.clear(options);
        console.log(document.cookie); // will log ""
      })();
    </script>
  `
};

export const SB_DOCUMENT_COOKIE_COPY: ProjectFiles = {
  'index.js': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

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

        await DocumentCookie.set('item', item, options);
        await DocumentCookie.copy('item', target);

        console.log(target); // will log { name: "john", surname: "doe" }
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        await LocalStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(localStorage.getItem('item'));
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        await LocalStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(await LocalStorage.get('item'));
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_REMOVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        await LocalStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(localStorage.hasItem('item'));

        await LocalStorage.remove('item');

        // will log false
        console.log(localStorage.hasItem('item'));
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        await LocalStorage.set('item1', { name: 'John', surname: 'Doe' });
        await LocalStorage.set('item2', { name: 'Paul', surname: 'Smith' });

        // will log true, true
        console.log(
          localStorage.hasItem('item1'),
          localStorage.hasItem('item2')
        );

        await LocalStorage.clear();

        // will log false, false
        console.log(localStorage.hasItem('item1'), sm.hasItem('item2'));
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_COPY: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        let target;

        await LocalStorage.set('item', { name: 'John', surname: 'Doe' });

        target = {};
        await LocalStorage.copy('item', target);

        // will log { name: "John", surname: "Doe" }
        console.log(target);
      })();
    </script>
  `
};

export const SB_LOCAL_STORAGE_HAS: ProjectFiles = {
  'index.js': html`
    <script>
      import { LocalStorage } from '@aracna/web';

      (async () => {
        await LocalStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(await LocalStorage.has('item'));
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_SET: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        await SessionStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(sessionStorage.getItem('item'));
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_GET: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        await SessionStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log { name: "John", surname: "Doe" }
        console.log(await SessionStorage.get('item'));
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_REMOVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        await SessionStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(sessionStorage.hasItem('item'));

        await SessionStorage.remove('item');

        // will log false
        console.log(sessionStorage.hasItem('item'));
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_CLEAR: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        await SessionStorage.set('item1', { name: 'John', surname: 'Doe' });
        await SessionStorage.set('item2', { name: 'Paul', surname: 'Smith' });

        // will log true, true
        console.log(
          sessionStorage.hasItem('item1'),
          sessionStorage.hasItem('item2')
        );

        await SessionStorage.clear();

        // will log false, false
        console.log(sessionStorage.hasItem('item1'), sm.hasItem('item2'));
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_COPY: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        let target;

        await SessionStorage.set('item', { name: 'John', surname: 'Doe' });

        target = {};
        await SessionStorage.copy('item', target);

        // will log { name: "John", surname: "Doe" }
        console.log(target);
      })();
    </script>
  `
};

export const SB_SESSION_STORAGE_HAS: ProjectFiles = {
  'index.js': html`
    <script>
      import { SessionStorage } from '@aracna/web';

      (async () => {
        await SessionStorage.set('item', { name: 'John', surname: 'Doe' });

        // will log true
        console.log(await SessionStorage.has('item'));
      })();
    </script>
  `
};

export const SB_WEB_SOCKET_OPEN: ProjectFiles = {
  'index.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');
        await ws.open();

        // will log true
        console.log(ws.isReadyStateOpen);
      })();
    </script>
  `
};

export const SB_WEB_SOCKET_CLOSE: ProjectFiles = {
  'index.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');
        await ws.open();

        // will log true
        console.log(ws.isReadyStateOpen);

        await ws.close();

        // will log true
        console.log(ws.isReadyStateClosed);
      })();
    </script>
  `
};

export const SB_WEB_SOCKET_SEND: ProjectFiles = {
  'index.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');
        await ws.open();

        // will send "Hello"
        ws.send('Hello');
      })();
    </script>
  `
};

export const SB_WEB_SOCKET_RECEIVE: ProjectFiles = {
  'index.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');

        ws.onMessage = (event) => {
          // will log "Hello"
          console.log(event.data);
        };

        await ws.open();
        ws.send('Hello');
      })();
    </script>
  `
};
