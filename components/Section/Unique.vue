<script setup lang="ts">
const { unique } = contentStore();
</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] via-[#FEF6F4] to-transparent">
    <div class="container mx-auto py-8 sm:py-16 max-w-7xl">
      <div class="section-header my-8 text-center max-w-lg mx-auto">
        <h2 class="text-2xl sm:text-4xl">How We Stand Out from the Crowd</h2>
        <p>
          One key aspect that sets our service apart is our commitment to
          originality. Plagiarism is the cardinal sin of academia, and we take
          it very seriously.
        </p>
      </div>
      <div
        class="max max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <UiUnique v-once v-for="(un, i) in unique" :key="i" v-bind="un" />
      </div>
    </div>
  </div>
</template>
