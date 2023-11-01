<script setup lang="ts">
const { why_us } = contentStore()
</script>

<template>
  <div class="bg-neutral text-neutral-content">
    <div class="container max-w-7xl mx-auto py-8 sm:py-16">
      <div class="flex flex-col items-center sm:flex-row gap-4 px-4">
        <div class="sm:w-3/5">
          <div class="section-header my-8">
            <h2 class="text-2xl sm:text-4xl text-white">Why Us</h2>
          </div>
          <ul class="my-4">
            <li v-for="item, i in why_us" :key="i + 'ds'" class="py-3 sm:pb-4"
              :class="i < 5 && 'border-b border-b-slate-500'">
              <div class="flex items-center">
                <!-- <div class="flex-shrink-0">
                  <span class="text-3xl text-primary pi pi-check"></span>
                </div> -->
                <div class="bg-success text-white px-2 pt-2 rounded-lg">
                  <span class="text-2xl pi pi-verified"></span>
                </div>
                <div class="flex-1 min-w-0 ml-4">
                  <p class="text-lg font-medium text-slate-300">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-slate-100">
                    {{ item.description }}
                  </p>
                </div>
                <!-- <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div> -->
              </div>
            </li>
          </ul>
        </div>

        <div class="py-8 w-full sm:px-8 sm:w-2/5">
          <UiFreeFeature />
        </div>
      </div>
    </div>
  </div>
</template>
