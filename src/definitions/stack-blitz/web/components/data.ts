import { html } from '@/functions/html'
import type { ProjectFiles } from '@stackblitz/sdk'

export const SB_AVATAR_USAGE_FILES: ProjectFiles = {
  'index.ts': html`
    <script>
      import '@aracna/web-components/index.cjs'

      const avatar = document.createElement('aracna-avatar')
      avatar.innerHTML = 'DS'

      document.body.append(avatar)
    </script>
  `
}
