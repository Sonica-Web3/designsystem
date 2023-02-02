/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugin: [
    react(),
    svgrPlugin({
      exportAsDefault: false,
      svgrOptions: {
        icon: false,
      },
      include: '**/*.svg',
    }),
  ],
})
