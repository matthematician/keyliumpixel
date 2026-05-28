import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'media/KeyliumPixel1.mp4',
      ],
      manifest: {
        name: 'Keylium Kiosk Display',
        short_name: 'Keylium',
        display: 'fullscreen',
        background_color: '#000000',
        theme_color: '#000000',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,mp4,webm}'],
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
      },
    }),
  ],
})