/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ALGOLIA_API_KEY: string
  readonly PUBLIC_ALGOLIA_APP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
