import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@eslinter/eslint-config-standard': new URL('index.ts', import.meta.url)
        .pathname,
    },
  },
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['lcov', 'json', 'text'],
      include: ['index.ts'],
    },
  },
})
