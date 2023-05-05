import { html } from '@/functions/html'
import type { ProjectFiles } from '@stackblitz/sdk'

export const SB_AVATAR_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import '@aracna/web-components/elements/data/avatar-element.js'

      const root = document.getElementById('root')
      const avatar = document.createElement('aracna-avatar')

      avatar.background = 'lightgray'
      avatar.innerHTML = 'D'
      avatar.shape = 'squircle'
      avatar.size = 32

      root.append(avatar)
    </script>
  `
}
