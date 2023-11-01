<script setup>
const { how_it_works } = contentStore();
</script>

<template>
  <div class="bg-white py-8 sm:py-16">
    <div class="mx-auto container max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-primary">
          How to order
        </h2>
        <h5 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Follow these steps to place your order
        </h5>
        <p class="mt-6 text-lg leading-8 text-gray-600"></p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="step in how_it_works" :key="step.title" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span :class="step?.icon" class="text-2xl text-white" aria-hidden="true"></span>
              </div>
              {{ step.title }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              <!-- <NuxtImg alt="" v-if="step.image" :src="`/img/${step.image}`" :alt="step.name" class="shadow-1" /> -->
              <span class="prose prose-stone list text-left" v-html="step.description"></span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
