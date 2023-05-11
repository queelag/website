import { html } from '@/functions/html';
import type { ProjectFiles } from '@stackblitz/sdk';

export const SB_UTILS_SHOWCASE: ProjectFiles = {
  'index.ts': html`
    <script>
      import { cloneDeepObject, getCamelCaseString } from '@aracna/core';

      const object = { person: { name: 'John' } };
      const cobject = cloneDeepObject(object);

      cobject.person.name = 'Mike';

      // will still log "John" because object was deeply cloned
      console.log(object.person.name);

      // will log "helloWorld"
      console.log(getCamelCaseString('hello_world'));
    </script>
  `
};
