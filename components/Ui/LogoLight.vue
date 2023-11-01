<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/" class="rounded-lg overflow-hidden">
    <NuxtImg class="w-24 sm:w-24 text-primary-focus font-bold text-xl" :alt="runtimeConfig?.public?.websiteName"
      src="/logo-light.png" />
  </NuxtLink>
</template>
