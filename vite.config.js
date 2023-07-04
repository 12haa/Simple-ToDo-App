import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA(
        {
            manifest: {
                name: 'My PWA App',
                short_name: 'PWA App',
                start_url: '/',
                display: 'standalone',
                theme_color: '#000000',
                background_color: '#ffffff',
                icons: [
                    {
                        src: '/icons/icon-512.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },

                ],
            },
        }
    )],
})
