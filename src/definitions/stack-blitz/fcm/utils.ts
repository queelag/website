import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_CREATE_FCM_ECDH: ProjectFiles = {
  'index.js': html`
    <script>
      import { createFcmECDH } from '@aracna/fcm';

      const ecdh = createFcmECDH();

      // will log ECDH
      console.log(ecdh);
    </script>
  `
};

export const SB_GENERATE_FCM_AUTH_SECRET: ProjectFiles = {
  'index.js': html`
    <script>
      import { generateFcmAuthSecret } from '@aracna/fcm';

      const authSecret = generateFcmAuthSecret();

      // will log Uint8Array
      console.log(authSecret);
    </script>
  `
};
