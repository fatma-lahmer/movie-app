import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  manifest: {
    name: 'Movie App',
    short_name: 'movie-app',
    description:
      'Responsive React progressive web application that helps users decide what to watch.',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    background_color: '#ffffff',
    theme_color: '#000000',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
