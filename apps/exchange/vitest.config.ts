import { defineConfig } from 'vitest/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  // @ts-ignore
  plugins: [tsconfigPaths(), react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@plexswap/wagmi/connectors/binanceWallet': r('../../packages/wagmi/connectors/binanceWallet/index.ts'),
      '@plexswap/wagmi/connectors/blocto': r('../../packages/wagmi/connectors/blocto/index.ts'),
      '@plexswap/wagmi/connectors/miniProgram': r('../../packages/wagmi/connectors/miniProgram/index.ts'),
    },
  },
  test: {
    setupFiles: ['./vitest.setup.js'],
    environment: 'jsdom',
    globals: true,
    exclude: ['src/config/__tests__'],
  },
})
