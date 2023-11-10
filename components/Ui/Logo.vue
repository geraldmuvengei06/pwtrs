<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/" class="rounded-lg overflow-hidden">
    <NuxtImg class="w-48 sm:w-64 text-primary-focus font-bold text-xl py-2" :alt="runtimeConfig?.public?.websiteName"
      src="/logo-dark.png" />
  </NuxtLink>
</template>
