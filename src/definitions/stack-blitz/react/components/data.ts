import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_AVATAR: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Avatar } from './Avatar';

      export function App() {
        return <Avatar />;
      }
    </script>
  `,
  'Avatar.jsx': html`
    <script>
      import React from 'react';
      import { AracnaAvatar } from '@aracna/react-components/components/data/avatar';

      export function Avatar(props) {
        <AracnaAvatar></AracnaAvatar>;
      }
    </script>
  `
};

export const SB_BADGE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Badge } from './Badge';

      export function App() {
        return <Badge />;
      }
    </script>
  `,
  'Badge.jsx': html`
    <script>
      import React from 'react';
      import { AracnaBadge } from '@aracna/react-components/components/data/badge';

      export function Badge(props) {
        <AracnaBadge></AracnaBadge>;
      }
    </script>
  `
};

export const SB_CAROUSEL: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Carousel } from './Carousel';

      export function App() {
        return <Carousel />;
      }
    </script>
  `,
  'Carousel.jsx': html`
    <script>
      import React from 'react';
      import { AracnaCarousel } from '@aracna/react-components/components/data/carousel';

      export function Carousel(props) {
        <AracnaCarousel></AracnaCarousel>;
      }
    </script>
  `
};

export const SB_CHIP: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Chip } from './Chip';

      export function App() {
        return <Chip />;
      }
    </script>
  `,
  'Chip.jsx': html`
    <script>
      import React from 'react';
      import { AracnaChip } from '@aracna/react-components/components/data/chip';

      export function Chip(props) {
        <AracnaChip></AracnaChip>;
      }
    </script>
  `
};

export const SB_FEED: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Feed } from './Feed';

      export function App() {
        return <Feed />;
      }
    </script>
  `,
  'Feed.jsx': html`
    <script>
      import React from 'react';
      import { AracnaFeed } from '@aracna/react-components/components/data/feed';

      export function Feed(props) {
        <AracnaFeed></AracnaFeed>;
      }
    </script>
  `
};

export const SB_ICON: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Icon } from './Icon';

      export function App() {
        return <Icon />;
      }
    </script>
  `,
  'Icon.jsx': html`
    <script>
      import React from 'react';
      import { AracnaIcon } from '@aracna/react-components/components/data/icon';

      export function Icon(props) {
        <AracnaIcon></AracnaIcon>;
      }
    </script>
  `
};

export const SB_IMAGE: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Image } from './Image';

      export function App() {
        return <Image />;
      }
    </script>
  `,
  'Image.jsx': html`
    <script>
      import React from 'react';
      import { AracnaImage } from '@aracna/react-components/components/data/image';

      export function Image(props) {
        <AracnaImage></AracnaImage>;
      }
    </script>
  `
};

export const SB_LIST: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { List } from './List';

      export function App() {
        return <List />;
      }
    </script>
  `,
  'List.jsx': html`
    <script>
      import React from 'react';
      import { AracnaList } from '@aracna/react-components/components/data/list';

      export function List(props) {
        <AracnaList></AracnaList>;
      }
    </script>
  `
};

export const SB_TOOLTIP: ProjectFiles = {
  'App.jsx': html`
    <script>
      import React from 'react';
      import { Tooltip } from './Tooltip';

      export function App() {
        return <Tooltip />;
      }
    </script>
  `,
  'Tooltip.jsx': html`
    <script>
      import React from 'react';
      import { AracnaTooltip } from '@aracna/react-components/components/data/tooltip';

      export function Tooltip(props) {
        <AracnaTooltip></AracnaTooltip>;
      }
    </script>
  `
};
