import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  vite: {
    optimizeDeps: {
      exclude: import.meta.env.DEV
        ? [
            // '@aracna/core',
            '@aracna/icons-feather-react',
            '@aracna/icons-feather-web',
            '@aracna/react',
            '@aracna/react-components',
            '@aracna/state-manager',
            '@aracna/state-manager-react',
            '@aracna/web',
            '@aracna/web-components'
          ]
        : []
    }
  }
})
