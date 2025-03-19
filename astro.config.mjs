import { defineConfig } from 'astro/config'
import swup from '@swup/astro'
import alpinejs from '@astrojs/alpinejs'

export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  devToolbar: {
    enabled: false
  },
  integrations: [
    swup({
      theme: false,
      containers: ['.page'],
      animationClass: false,
      smoothScrolling: false,
      globalInstance: true,
      accessibility: false,
      reloadScripts: false,
      parallel: true,
    }),
    alpinejs({
      entrypoint: '/src/js/setup-alpine.js'
    }),
  ]
})
