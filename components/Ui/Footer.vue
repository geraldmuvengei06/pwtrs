<script setup>
let { services, menu, legal } = contentStore();

const year = new Date().getFullYear();
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

          <ContentList path="/services" v-slot="{ list }">
            <NuxtLink
              v-for="service in list"
              :key="service?._path"
              :to="service?._path"
              class="flex flex-col my-1 max-w-xs text-ellipsis overflow-hidden"
            >
              {{ service?.title }}
            </NuxtLink>
          </ContentList>
          <header class="font-bold text-slate-100">Blog</header>

          <ContentList path="/blog" v-slot="{ list }">
            <NuxtLink
              v-for="blog in list"
              :key="blog?._path"
              :to="blog?._path"
              class="flex flex-col my-1 max-w-xs text-ellipsis overflow-hidden"
            >
              {{ blog?.title }}
            </NuxtLink>
          </ContentList>
        </nav>
        <nav>
          <header class="font-bold text-slate-100">Company</header>
          <NuxtLink
            v-for="(item, i) in menu"
            :key="i + 'x'"
            :to="item?.link"
            class="link link-hover"
            ><span v-if="item.icon" class="mr-2" :class="item.icon"></span
            >{{ item.name }}</NuxtLink
          >
        </nav>
        <nav>
          <header class="font-bold text-slate-100">Legal</header>
          <NuxtLink
            v-for="(l, i) in legal"
            :key="i"
            :to="l.link"
            class="link link-hover"
            >{{ l.name }}</NuxtLink
          >
        </nav>
      </footer>
    </div>
  </div>
</template>
