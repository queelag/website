import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    optimizeDeps: {
      exclude: import.meta.env.DEV
        ? [
            '@aracna/core',
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
