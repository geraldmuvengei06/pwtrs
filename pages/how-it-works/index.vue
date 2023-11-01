<script setup>
const { page_content } = contentStore();
let title = "How It Works";
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
        <div class="hero-content flex-col sm:flex-row-reverse">
          <NuxtImg
            alt="How it Works"
            id="nuxt-img"
            src="/img/Problem-solving-pana.png"
            class="md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
          />

          <div class="sm:z-10">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >{{ content.title }}</span
              >
            </h1>
            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              Trust your assignments to an essay writing service with the
              <b>fastest delivery time</b> and fully original content.
            </p>

            <p>{{ content.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <SectionHowItWorksTimeline />
    <div class="container max-w-5xl mx-auto bg-primary rounded-2xl">
      <UiCalculator />
    </div>
    <SectionReviews />
    <SectionUnique />
    <SectionCTAMale />
  </div>
</template>
