import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_AVATAR: ProjectFiles = {
  'index.html': html`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./index.css" />
      </head>
      <body>
        <div id="root">
          <aracna-avatar background="lightgray" shape="squircle" size="32">
            D
          </aracna-avatar>
        </div>
        <script type="module" src="./index.js"></script>
      </body>
    </html>
  `,
  'index.js': html`
    <script>
      import '@aracna/web-components/elements/data/avatar-element.js';
    </script>
  `
};
