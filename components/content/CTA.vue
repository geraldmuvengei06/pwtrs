<script setup lang="ts">
let { order_url, goTo } = contentStore();

const props = defineProps<{
  title: string;
  action: string;
}>();
</script>

<template>
  <div class="">
    <div class="container mx-auto py-8 sm:py-16 max-w-7xl">
      <div
        class="flex flex-col items-center sm:flex-row bg-neutral text-neutral-content rounded-lg gap-4 hover:shadow-lg">
        <NuxtImg alt="Order Now" id="nuxt-img" class="w-48 sm:w-1/3 max-w-xs m-4" src="/img/Creative-writing-amico.png" />

        <div class="px-4 sm:px-8 py-8">
          <h2 class="text-2xl sm:text-4xl">
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{{ title }}</span>
          </h2>
          <p class="my-4">
            <slot />
          </p>

          <button @click="goTo(`${order_url}`)" class="sm:mt-9 btn btn-primary flex" v-if="action">
            {{ action }}
          </button>
          <button @click="goTo(`${order_url}`)" class="sm:mt-9 btn btn-primary flex" v-else>
            Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
