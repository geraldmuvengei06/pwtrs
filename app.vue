<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Onlinessaywriting` : 'Onlinessaywriting';
  }
})
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtLoadingIndicator :duration="2000" :height="5" :color="'#7CB078'" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>



<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */
</style>