// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "nursingessayonline",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        // ...
        {
          hid: 'tawk.to',
          src:
            'https://embed.tawk.to/6293c890b0d10b6f3e74a1ff/1g48keu47',

          defer: true
        }
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' },

  },
  runtimeConfig: {
    public: {
      websiteUrl:  process.env.NUXT_WEBSITE_URL,
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@pinia/nuxt',
    "@nuxt/image",
    'nuxt-simple-sitemap',
    '@nuxt/content',
    // '@productdevbook/chatwoot'
  ],
  css: [
    'primevue/resources/themes/tailwind-light/theme.css',
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
      include: ['Carousel', 'Button', 'Rating', 'InputText', 'InputNumber', 'Message', 'Accordion', 'AccordionTab', 'Timeline', 'Menubar'],
      exclude: undefined
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  router: {
    options: {
      strict: true,
    },
  },

  // chatwoot: {
  //   init: {
  //     websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB'
  //   },
  //   settings: {
  //     locale: 'en',
  //     position: 'left',
  //     launcherTitle: 'Hello Chat',
  //     // ... and more settings
  //   },
  //   // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
  //   partytown: false,
  // },
  site: {
    url: 'https://nursingessayonline.com',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }

})