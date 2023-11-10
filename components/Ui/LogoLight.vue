<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <NuxtLink to="/">
    <NuxtImg class="w-48 sm:w-64 text-primary-focus font-bold text-xl" :alt="runtimeConfig?.public?.websiteName"
      src="/logo-light.png" />
  </NuxtLink>
</template>
