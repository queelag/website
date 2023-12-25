import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_FCM_CLIENT_CONNECT: ProjectFiles = {
  'index.js': html`
    <script>
      import { FcmClient } from '@aracna/fcm';

      const client = new FcmClient({
        acg: {
          id: BigInt('YOUR_ACG_ID'),
          securityToken: BigInt('YOUR_ACG_SECURITY_TOKEN')
        }
      });

      client.connect();
    </script>
  `
};

export const SB_FCM_CLIENT_DISCONNECT: ProjectFiles = {
  'index.js': html`
    <script>
      import { FcmClient } from '@aracna/fcm';

      const client = new FcmClient({
        acg: {
          id: BigInt('YOUR_ACG_ID'),
          securityToken: BigInt('YOUR_ACG_SECURITY_TOKEN')
        }
      });

      client.on('close', () => {
        console.log('disconnected');
      });

      client.connect().then(() => client.disconnect());
    </script>
  `
};

export const SB_FCM_CLIENT_CONNECT_ON_MESSAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { FcmClient } from '@aracna/fcm';

      const client = new FcmClient({
        acg: {
          id: BigInt('YOUR_ACG_ID'),
          securityToken: BigInt('YOUR_ACG_SECURITY_TOKEN')
        },
        ece: {
          authSecret: 'YOUR_AUTH_SECRET',
          privateKey: 'YOUR_ECDH_PRIVATE_KEY'
        }
      });

      client.on('message', (message) => {
        // will log the message
        console.log(message);
      });

      client.on('message-data', (data) => {
        // will log the decrypted message data
        console.log(data);
      });

      client.connect();
    </script>
  `
};
