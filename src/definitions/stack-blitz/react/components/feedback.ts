import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_ALERT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Alert } from './Alert';

      export function App() {
        return <Alert />;
      }
    </script>
  `,
  'Alert.jsx': html`
    <script>
      import React from 'react';
      import { AracnaAlert } from '@aracna/react-components/components/feedback/alert';

      export function Alert(props) {
        <AracnaAlert></AracnaAlert>;
      }
    </script>
  `
};

export const SB_ALERT_DIALOG: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { AlertDialog } from './AlertDialog';

      export function App() {
        return <AlertDialog />;
      }
    </script>
  `,
  'AlertDialog.jsx': html`
    <script>
      import React from 'react';
      import { AracnaAlertDialog } from '@aracna/react-components/components/feedback/alert-dialog';

      export function AlertDialog(props) {
        <AracnaAlertDialog></AracnaAlertDialog>;
      }
    </script>
  `
};

export const SB_DIALOG: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Dialog } from './Dialog';

      export function App() {
        return <Dialog />;
      }
    </script>
  `,
  'Dialog.jsx': html`
    <script>
      import React from 'react';
      import { AracnaDialog } from '@aracna/react-components/components/feedback/dialog';

      export function Dialog(props) {
        <AracnaDialog></AracnaDialog>;
      }
    </script>
  `
};

export const SB_METER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Meter } from './Meter';

      export function App() {
        return <Meter />;
      }
    </script>
  `,
  'Meter.jsx': html`
    <script>
      import React from 'react';
      import { AracnaMeter } from '@aracna/react-components/components/feedback/meter';

      export function Meter(props) {
        <AracnaMeter></AracnaMeter>;
      }
    </script>
  `
};
