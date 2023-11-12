import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_BUTTON: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Button } from './Button';

      export function App() {
        return <Button />;
      }
    </script>
  `,
  'Button.jsx': html`
    <script>
      import React from 'react';
      import { AracnaButton } from '@aracna/react-components/components/input/button';

      export function Button(props) {
        <AracnaButton></AracnaButton>;
      }
    </script>
  `
};

export const SB_BUTTON_GROUP: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { ButtonGroup } from './ButtonGroup';

      export function App() {
        return <ButtonGroup />;
      }
    </script>
  `,
  'ButtonGroup.jsx': html`
    <script>
      import React from 'react';
      import { AracnaButtonGroup } from '@aracna/react-components/components/input/button-group';

      export function ButtonGroup(props) {
        <AracnaButtonGroup></AracnaButtonGroup>;
      }
    </script>
  `
};

export const SB_CHECK_BOX: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { CheckBox } from './CheckBox';

      export function App() {
        return <CheckBox />;
      }
    </script>
  `,
  'CheckBox.jsx': html`
    <script>
      import React from 'react';
      import { AracnaCheckBox } from '@aracna/react-components/components/input/check-box';

      export function CheckBox(props) {
        <AracnaCheckBox></AracnaCheckBox>;
      }
    </script>
  `
};

export const SB_FORM: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Form } from './Form';

      export function App() {
        return <Form />;
      }
    </script>
  `,
  'Form.jsx': html`
    <script>
      import React from 'react';
      import { AracnaForm } from '@aracna/react-components/components/input/form';

      export function Form(props) {
        <AracnaForm></AracnaForm>;
      }
    </script>
  `
};

export const SB_INPUT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Input } from './Input';

      export function App() {
        return <Input />;
      }
    </script>
  `,
  'Input.jsx': html`
    <script>
      import React from 'react';
      import { AracnaInput } from '@aracna/react-components/components/input/input';

      export function Input(props) {
        <AracnaInput></AracnaInput>;
      }
    </script>
  `
};

export const SB_INPUT_FILE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { InputFile } from './InputFile';

      export function App() {
        return <InputFile />;
      }
    </script>
  `,
  'InputFile.jsx': html`
    <script>
      import React from 'react';
      import { AracnaInputFile } from '@aracna/react-components/components/input/input-file';

      export function InputFile(props) {
        <AracnaInputFile></AracnaInputFile>;
      }
    </script>
  `
};

export const SB_RADIO_GROUP: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { RadioGroup } from './RadioGroup';

      export function App() {
        return <RadioGroup />;
      }
    </script>
  `,
  'RadioGroup.jsx': html`
    <script>
      import React from 'react';
      import { AracnaRadioGroup } from '@aracna/react-components/components/input/radio-group';

      export function RadioGroup(props) {
        <AracnaRadioGroup></AracnaRadioGroup>;
      }
    </script>
  `
};

export const SB_SELECT: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Select } from './Select';

      export function App() {
        return <Select />;
      }
    </script>
  `,
  'Select.jsx': html`
    <script>
      import React from 'react';
      import { AracnaSelect } from '@aracna/react-components/components/input/select';

      export function Select(props) {
        <AracnaSelect></AracnaSelect>;
      }
    </script>
  `
};

export const SB_SLIDER: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Slider } from './Slider';

      export function App() {
        return <Slider />;
      }
    </script>
  `,
  'Slider.jsx': html`
    <script>
      import React from 'react';
      import { AracnaSlider } from '@aracna/react-components/components/input/slider';

      export function Slider(props) {
        <AracnaSlider></AracnaSlider>;
      }
    </script>
  `
};

export const SB_SWITCH: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Switch } from './Switch';

      export function App() {
        return <Switch />;
      }
    </script>
  `,
  'Switch.jsx': html`
    <script>
      import React from 'react';
      import { AracnaSwitch } from '@aracna/react-components/components/input/switch';

      export function Switch(props) {
        <AracnaSwitch></AracnaSwitch>;
      }
    </script>
  `
};

export const SB_TEXT_AREA: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { TextArea } from './TextArea';

      export function App() {
        return <TextArea />;
      }
    </script>
  `,
  'TextArea.jsx': html`
    <script>
      import React from 'react';
      import { AracnaTextArea } from '@aracna/react-components/components/input/text-area';

      export function TextArea(props) {
        <AracnaTextArea></AracnaTextArea>;
      }
    </script>
  `
};
