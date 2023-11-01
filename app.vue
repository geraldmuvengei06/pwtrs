<script setup>
const runtimeConfig = useRuntimeConfig();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${runtimeConfig.public.websiteName}`
      : runtimeConfig.public.websiteName;
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :duration="2000" :height="5" :color="'#3f50b5'" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
