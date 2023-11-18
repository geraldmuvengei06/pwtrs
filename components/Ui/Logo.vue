<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/" class="rounded-lg overflow-hidden">
    <NuxtImg format="webp" loading="lazy" class="w-12 sm:w-16 text-primary-focus font-bold text-xl"
      :alt="runtimeConfig?.public?.websiteName" src="/logo-dark.png" />
  </NuxtLink>
</template>
