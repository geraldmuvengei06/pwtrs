<template>
  <div class="shadow z-10 min-w-full sticky top-0">
    <PrimeMenubar :model="menu" class="min-w-full flex justify-between">
      <template #start>
        <UiLogo />
      </template>

      <template #item="{ name, item, props, root, hasSubmenu }" class=" ">
        <NuxtLink
          v-if="item.link"
          v-slot="routerProps"
          :to="item.link"
          custom
          class=""
        >
          <a :href="routerProps.href" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.name">{{ item.name || item.item }}</span>
          </a>
        </NuxtLink>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.name">{{ item.name || item.item }}</span>
          <span
            :class="[
              hasSubmenu &&
                (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right'),
            ]"
            v-bind="props.submenuicon"
          />
        </a>
      </template>
    </PrimeMenubar>
  </div>
</template>

<script setup>
let { menu, services } = contentStore();
</script>

<style lang="scss">
.p-menubar-button {
  @apply border-2 border-primary-focus rounded-lg w-10 h-10 text-primary-focus;
}

.router-link-exact-active {
  @apply rounded-lg text-primary font-semibold hover:text-primary;
}

.p-menubar-root-list {
  @apply bg-gradient-to-br from-[#F4F4F8] to-[#FEF6F4];
}

.p-menubar {
  @apply sticky z-50 w-full backdrop-blur bg-white/75;
}
</style>
