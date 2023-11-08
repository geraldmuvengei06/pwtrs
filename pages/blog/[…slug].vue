<script setup>
let { key_factors } = contentStore();

const { path } = useRoute();

const { data, pending, error, refresh } = await useAsyncData(
  `content-${path}`,
  () => queryContent().where({ _path: path }).findOne(),
);

useSeoMeta({
  title: data?.title,
  ogTitle: data?.title,
  description: data?.description,
  ogDescription: data?.description,
  ogImage: data?.cover,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="mx-auto py-8">
      <div class="hero rounded-xl min-h-min relative">
        <UiBgShade />

        <div class="hero-content flex-col sm:flex-row-reverse">
          <div class="w-full md:max-w-lg lg:max-w-xl sm:w-80 md:w-4/12">
            <h1 class="text-3xl sm:text-5xl font-bold sm:hidden mb-2">
              <span class="text-base-content">{{ data?.title }}</span>
            </h1>

            <UiCalculator type="verticle" />
          </div>

          <div class="sm:w-2/3">
            <h1 class="text-3xl sm:text-5xl font-bold hidden sm:inline">
              <span class="text-base-content">{{ data?.title }}</span>
            </h1>

            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              {{ data?.subtitle }}
            </p>

            <ul class="w-full text-lg hover:bg-transparent py-4">
              <li v-for="(factor, i) in key_factors" :key="i + 'f'" class="hover:bg-transparent">
                <span class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item }}</span>
              </li>
            </ul>

            <UiPayment />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <SectionSamples />
    <div class="container mx-auto max-w-4xl py-12 px-4">
      <article
        class="prose prose-slate max-w-3xl mx-auto prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl bg-white shadow-lg ring-1 ring-gray-900/5 p-4 sm:p-6 rounded-lg">
        <ContentDoc>
          <template #not-found>
            <UiContentNotFound />
          </template>
        </ContentDoc>
      </article>
    </div>
    <SectionReviews />
    <SectionCTA />
  </div>
</template>
