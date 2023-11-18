import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';



export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId: runtimeConfig.public.tawkPropertyId,
    widgetId: runtimeConfig.public.tawkWidgetId,
  })
})  