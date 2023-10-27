<script setup lang="ts">

let props = defineProps<{
  classnames?: string
}>()

</script>

<template>
  <div class="flex flex-row gap-2 sm:gap-4" :class="classnames || 'justify-between md:justify-center'">
    <div class="flex items-center justify-center sm:justify-start flex-row rounded-lg ">
      <div class="w-24">
        <NuxtImg alt="" id="nuxt-img" src="/img/reviewsio.png" />
      </div>
      <p class="text-base sm:text-lg w-1/4 flex flex-row items-center">
        <span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span>
        <span class=" text-black">4.5</span>
      </p>
    </div>

    <div class="flex items-center justify-center sm:justify-start flex-row rounded-lg ">
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