<script setup lang="ts">

let props = defineProps<{
  classnames?: string
}>()

</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4" :class="classnames || 'justify-between md:justify-center'">
    <div
      class="flex items-center justify-center border border-slate-200 bg-white hover:shadow sm:justify-start flex-row rounded-lg px-2 py-2">
      <div class="w-24">
        <NuxtImg alt="" id="nuxt-img" src="/img/reviewsio.png" />
      </div>
      <p class="text-base sm:text-lg w-1/4 flex flex-row items-center">
        <span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span>
        <span class=" text-black">4.5</span>
      </p>
    </div>

    <div
      class="flex items-center justify-center border border-slate-200 bg-white hover:shadow sm:justify-start flex-row rounded-lg px-2 py-2">
      <div class="w-24">
        <NuxtImg alt="" id="nuxt-img" src="/img/sitejabber.png" />
      </div>
      <p class="text-base sm:text-lg w-1/4 flex flex-row items-center">
        <span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span>
        <span class=" text-black">4.7</span>
      </p>

    </div>
  </div>
</template>