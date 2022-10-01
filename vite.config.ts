import { rmSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron, { onstart } from 'vite-plugin-electron'
import pkg from './package.json'

rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true }) 

export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'styles': path.join(__dirname, 'src/assets/styles'),
    },
  },
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            sourcemap: true,
            outDir: 'dist/electron/main',
          },
          plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
        },
      },
      preload: {
        input: {
          index: path.join(__dirname, 'electron/preload/index.ts'),
        },
        vite: {
          build: {
            // For Debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          }
        },
      },
      renderer: {},
    }),
  ],
  server: process.env.VSCODE_DEBUG ? {
    host: pkg.debug.env.VITE_DEV_SERVER_HOSTNAME,
    port: pkg.debug.env.VITE_DEV_SERVER_PORT,
  } : undefined,
})
