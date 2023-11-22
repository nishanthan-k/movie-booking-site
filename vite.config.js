import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteStyleImport from 'vite-plugin-style-import';  

export default defineConfig({
  plugins: [
    react(),
    ViteStyleImport({
      libs: [
        {
          libraryName: '@fortawesome/fontawesome-svg-core',
          esModule: true,
          resolveStyle: (name) => `@fortawesome/${name}/styles.css`,
        },
        {
          libraryName: '@fortawesome/free-solid-svg-icons',
          esModule: true,
          resolveStyle: (name) => `@fortawesome/free-solid-svg-icons/${name}.js`,
        },
      ],
    }),
  ],
});
