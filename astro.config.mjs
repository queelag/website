import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
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
    },
    plugins: [tailwindcss()]
  }
})
