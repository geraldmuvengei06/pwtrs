// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Proswriters",
    },
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],
  css: [
    'primevue/resources/themes/lara-dark-teal/theme.css',
    '@/assets/css/main.scss',
    "primeicons/primeicons.css"
  ],
  components: [
    {
      path: '~/components/ui',
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: UiButton
      prefix: 'Ui'
    },
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],

  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true
    },
    components: {
      prefix: 'Prime',
      include: ['Carousel', 'Button', 'Rating'],
      exclude: undefined
    },
  }

})