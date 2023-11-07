// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.NUXT_WEBSITE_NAME,
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        // ...
        {
          hid: "tawk.to",
          src: "https://embed.tawk.to/" + process.env.NUXT_TAWK_CODE,

          defer: true,
        },
      ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      websiteName: process.env.NUXT_WEBSITE_NAME,
      websiteUrl: process.env.NUXT_WEBSITE_URL,
      orderUrl: process.env.NUXT_ORDER_URL || "/orders/ordernow/",
      homeUrl: process.env.NUXT_HOME_URL || "/orders/home/",
      whatsappNumber: process.env.NUXT_WHATSAPP_NUMBER,
      supportEmail: process.env.NUXT_SUPPORT_EMAIL,
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
      baseToken: process.env.NUXT_PUBLIC_API_TOKEN
    },
  },
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-simple-sitemap",
    "@nuxt/content",
    // '@productdevbook/chatwoot'
  ],
  css: [
    "primevue/resources/themes/tailwind-light/theme.css",
    "@/assets/css/main.scss",
    "primeicons/primeicons.css",
  ],
  components: [
    {
      path: "~/components/Ui",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
      // prefix for your components, eg: UiButton
      prefix: "Ui",
    },
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],

  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    components: {
      prefix: "Prime",
      include: [
        "Carousel",
        "Toast",
        "Avatar",
        "Button",
        "Rating",
        "InputText",
        "InputNumber",
        "Message",
        "Accordion",
        "AccordionTab",
        "Timeline",
        "Menubar",
        "InputNumber",
        "Dropdown",
        "Dialog",
      ],
      exclude: undefined,
    },
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  router: {
    options: {
      strict: true,
    },
  },
  routeRules: {
    '/': { prerender: true },
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
    url: process.env.NUXT_WEBSITE_URL,
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
      ignore: ["/orders"],
    },
  },
});
