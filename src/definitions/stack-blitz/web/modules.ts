import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_DOCUMENT_COOKIE_SHOWCASE: ProjectFiles = {
  'index.ts': html`
    <script>
      import { DocumentCookie } from '@aracna/web';

      async function main() {
        // will set the token_expiration and token_value cookies
        await DocumentCookie.set('token', {
          expiration: Date.now(),
          value: 'secret'
        });

        // will log the cookies that start with token_
        console.log(await DocumentCookie.get('token'));

        // will remove the cookies that start with token_
        await DocumentCookie.remove('token');
      }
    </script>
  `
};
