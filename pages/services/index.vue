<script setup>
const { page_content } = contentStore();
let title = "Services";
let content = page_content[title];

useSeoMeta({
  title: content.metaTitle,
  ogTitle: content.metaTitle,
  description: content?.metaDescription,
  ogDescription: content?.metaDescription,
});

</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="container mx-auto py-8">
      <div class="hero rounded-xl min-h-min relative">
        <UiBgShade />
        <div class="hero-content flex-col-reverse sm:flex-row-reverse">
          <div class="md:flex max-w-xs sm:max-w-sm md:max-w-md w-full sm:w-2/5">
            <UiOrderFormDescription />
          </div>

          <div class="sm:z-10">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{{ content.title
              }}</span>
            </h1>
            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              {{ content?.description }}
            </p>

            <div class="flex flex-row justify-start items-center gap-4 mt-4">
              <div class="hidden sm:flex items-center justify-center sm:justify-start flex-row rounded-lg">
                <UiProtection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <ContentList path="/services" v-slot="{ list }">

      <div
        class="mx-auto my-10 grid grid-flow-row-dense max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <UiArticleItem v-for="article in list" :key="article?.id" v-bind:article="article" />
      </div>

    </ContentList>
    <!-- <SectionExperts /> -->
    <!-- <SectionCTAMaleDark /> -->
    <SectionUnique />
  </div>
</template>
