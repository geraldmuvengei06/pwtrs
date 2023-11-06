<script setup>
let { menu, legal } = contentStore();

const year = new Date().getFullYear();

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation('services'))

const services = navigation?.value?.length > 0 ? navigation?.value[0]?.children : []

</script>

<template>
  <div class="bg-neutral text-neutral-content">
    <div class="container mx-auto">
      <footer class="footer px-4 py-10">
        <aside>
          <UiLogoLight class="mb-4" />
          <p>&COPY; {{ year }} Reliable Expert Writers</p>
          <header class="font-bold text-slate-100 mt-4">Contact Us</header>

          <UiContact :minimal="true" />
          <br />
          <small>We accept:</small>
          <UiPayment />
          <br />
          <small>Protected by:</small>
          <UiProtection />
        </aside>
        <nav>
          <header class="font-bold text-slate-100">Services</header>
          <div v-once>
            <NuxtLink v-for="service, i in services" :key="service?._path" :to="service?._path"
              class="flex flex-col mb-2 max-w-xs text-ellipsis overflow-hidden">
              {{ service?.title }}
            </NuxtLink>
          </div>
        </nav>
        <nav>
          <header class="font-bold text-slate-100">Company</header>
          <NuxtLink v-for="(item, i) in menu" :key="i + 'x'" :to="item?.link" class="link link-hover"><span
              v-if="item.icon" class="mr-2" :class="item.icon"></span>{{ item.name }}</NuxtLink>
        </nav>
        <nav>
          <header class="font-bold text-slate-100">Legal</header>
          <NuxtLink v-for="(l, i) in legal" :key="i" :to="l.link" class="link link-hover">{{ l.name }}</NuxtLink>
        </nav>
      </footer>
    </div>
  </div>
</template>
