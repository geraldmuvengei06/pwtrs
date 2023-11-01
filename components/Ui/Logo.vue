<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/" class="rounded-lg overflow-hidden">
    <NuxtImg class="w-16 sm:w-20 text-primary-focus font-bold text-xl" :alt="runtimeConfig?.public?.websiteName"
      src="/logo-dark.png" />
  </NuxtLink>
</template>
