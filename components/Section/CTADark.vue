<script lang="ts" setup>
let { order_url, goTo } = contentStore();
</script>

<template>
  <div class="">
    <div class="container mx-auto py-8 sm:py-16 max-w-7xl px-4 sm:px-8">
      <div
        class="flex flex-col items-center sm:flex-row bg-neutral text-neutral-content rounded-lg gap-4 hover:shadow-lg">
        <NuxtImg alt="our A+ essay is just a click away" id="nuxt-img" class="w-48 sm:w-1/3 max-w-xs m-4"
          src="/img/creative-writing-animate.svg" />

        <div class="px-4 sm:px-8 py-8">
          <h2 class="text-2xl sm:text-4xl">
            Your A+ essay is just a click away.
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Are you ready?</span>
          </h2>
          <p class="my-4">
            "They turned my paper into a masterpiece!" - Customer_4549, a
            satisfied student.
          </p>

          <button @click="goTo(`${order_url}`)" class="sm:mt-9 btn btn-primary flex">
            Hire an Expert Writer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
