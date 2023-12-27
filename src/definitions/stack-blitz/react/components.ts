import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_MEMO: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React, { useState } from 'react';
      import { Memo } from '@aracna/react';

      export function App() {
        const [bigint, setBigInt] = useState(0n);
        const [number, setNumber] = useState(0);

        const onClickBigInt = () => {
          setBigInt(bigint + 1n);
        };

        const onClickNumber = () => {
          setNumber(number + 1);
        };

        return (
          <Memo deps={[number]}>
            <button data-testid='bigint' onClick={onClickBigInt}>
              {bigint.toString()}
            </button>
            <button data-testid='number' onClick={onClickNumber}>
              {number}
            </button>
          </Memo>
        );
      }
    </script>
  `
};
