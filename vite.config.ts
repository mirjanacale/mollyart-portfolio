import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Empty inline config so Vite doesn't pick up stray postcss/tailwind
  // configs from parent directories on this machine.
  css: { postcss: {} },
});
