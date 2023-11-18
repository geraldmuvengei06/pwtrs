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
      <div class="max-w-7xl mx-auto rounded-xl min-h-min relative">
        <UiBgShade />

        <div class="flex flex-wrap sm:items-center">
          <div class="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4">
            <!-- Content for the first column -->
            <h1 class="text-3xl sm:text-5xl font-bold ">
              <span class="text-base-content">{{ data?.title }}</span>
            </h1>

            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              {{ data?.subtitle }}
            </p>

            <UiPayment />
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <!-- Content for the second column -->
            <UiOrderFormDescription type="verticle" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container mx-auto max-w-7xl py-12 px-4 grid gap-4 grid-cols-12">
      <div class="col-span-12 sm:col-span-8 order-last sm:order-first">
        <article
          class="prose prose-slate min-w-full prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl bg-white p-4 rounded-lg">
          <NuxtImg class="rounded w-full overflow-hidden" v-if="data?.cover" format="webp" loading="lazy"
            :src="data?.cover" />
          <ContentDoc>
            <template #not-found>
              <UiContentNotFound />
            </template>
          </ContentDoc>
        </article>
      </div>

      <aside class="col-span-12 sm:col-span-4">
        <UiTableOfContents :toc="data?.body?.toc" />
      </aside>
    </div>
    <SectionSamples />
    <SectionReviews />
    <SectionCTA />
  </div>
</template>
