<script setup>

const props = defineProps({
  article: {}
})
</script>

<template>
  <article :key="article?.id" class="flex max-w-xl flex-col items-start justify-between">
    <figure v-if="article?.cover" class="min-w-full">
      <NuxtLink :to="article?._path" class="w-full">
        <NuxtImg format="webp" loading="lazy" :src="article?.cover" alt="Shoes"
          class="rounded-xl min-w-full ring ring-slate-100 overflow-hidden" />
      </NuxtLink>
    </figure>
    <div class="group relative">
      <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <NuxtLink :to="article?._path">
          <span class="absolute inset-0" />
          {{ article?.title }}
        </NuxtLink>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ article?.description }}</p>
      <div class="text-xs mt-4">
        <time :datetime="article?.datetime" class="text-gray-500">{{ article?.date }}</time>
      </div>

    </div>
  </article>
</template>