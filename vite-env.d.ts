interface ImportMetaEnv {
  readonly VITE_ACCECSS_TOKEN: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
