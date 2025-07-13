/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // allows using test(), expect(), etc. globally
    environment: 'jsdom', // simulates a browser environment
    setupFiles: './src/tests/setup.ts', // run this file before tests
  },
});
