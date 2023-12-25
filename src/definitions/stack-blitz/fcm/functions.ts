import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_REGISTER_TO_FCM: ProjectFiles = {
  'index.js': html`
    <script>
      import {
        createFcmECDH,
        generateFcmAuthSecret,
        registerToFCM
      } from '@aracna/fcm';

      const authSecret = generateFcmAuthSecret();
      const ecdh = createFcmECDH();

      registerToFCM({
        appID: 'YOUR_APP_ID',
        ece: {
          authSecret: authSecret,
          publicKey: ecdh.getPublicKey()
        },
        firebase: {
          apiKey: 'YOUR_FIREBASE_API_KEY',
          appID: 'YOUR_FIREBASE_APP_ID',
          projectID: 'YOUR_FIREBASE_PROJECT_ID'
        },
        vapidKey: 'YOUR_VAPID_KEY'
      })
        .catch(() => {})
        .then((registration) => {
          // will log { acg: { id: bigint, securityToken: bigint }, token: string }
          console.log(registration);
        });
    </script>
  `
};

export const SB_SEND_FCM_MESSAGE: ProjectFiles = {
  'index.js': html`
    <script>
      import { sendFcmMessage } from '@aracna/fcm';
      import GOOGLE_SERVICE_ACCOUNT from './google-service-account.json';

      const message = {
        token: 'YOUR_FCM_TOKEN'
      };

      sendFcmMessage(GOOGLE_SERVICE_ACCOUNT, message)
        .catch(() => {})
        .then((message) => {
          console.log(message);
        });
    </script>
  `
};

export const SB_SUBSCRIBE_TO_FCM: ProjectFiles = {
  'index.js': html`
    <script>
      import { subscribeToFCM } from '@aracna/fcm';

      const authSecret = generateFcmAuthSecret();
      const ecdh = createFcmECDH();

      subscribeToFCM({
        appID: 'YOUR_APP_ID',
        ece: {
          authSecret: authSecret,
          publicKey: ecdh.getPublicKey()
        },
        senderID: 'YOUR_SENDER_ID'
      })
        .catch(() => {})
        .then((subscription) => {
          // will log { acg: { id: bigint, securityToken: bigint }, token: string }
          console.log(subscription);
        });
    </script>
  `
};
