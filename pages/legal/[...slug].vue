<script lang="ts" setup>
const { path } = useRoute();

const { data, pending, error, refresh } = await useAsyncData(
  `content-${path}`,
  () => queryContent().where({ _path: path }).findOne(),
);
</script>

<template>
  <div class="bg-slate-50">
    <div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4">
      <h2 class="text-2xl sm:text-4xl">{{ data?.title }}</h2>
    </div>
  </div>
  <div class="container mx-auto max-w-3xl py-8 sm:py-16 px-4">
    <article
      class="prose prose-slate max-w-3xl mx-auto prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl bg-white shadow-lg ring-1 ring-gray-900/5 p-4 sm:p-6 rounded-lg"
    >
      <ContentDoc>
        <template #not-found>
          <UiContentNotFound />
        </template>

        <template #empty>
          <UiContentNotFound />
        </template>
      </ContentDoc>
    </article>
  </div>

  <SectionCTADark />
</template>
