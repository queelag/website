import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_WEB_SOCKET_OPEN: ProjectFiles = {
  'app.js': html`
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
  'app.js': html`
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
  'app.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');
        await ws.open();

        // will send "hello"
        ws.send('hello');
      })();
    </script>
  `
};

export const SB_WEB_SOCKET_RECEIVE: ProjectFiles = {
  'app.js': html`
    <script>
      import { WebSocket } from '@aracna/web';

      (async () => {
        const ws = new WebSocket('PieSocket', 'wss://ws.postman-echo.com/raw');

        ws.onMessage = (event) => {
          // will log "hello"
          console.log(event.data);
        };

        await ws.open();
        ws.send('hello');
      })();
    </script>
  `
};
