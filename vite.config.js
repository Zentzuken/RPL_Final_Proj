import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: "./",
  plugins: [react()],
  assetsInclude: ["**/*.ttf"],
  resolve: {
    alias: {
      '@model': path.resolve(__dirname, '../model'),
    },
  },
});

// https://vitejs.dev/config/
