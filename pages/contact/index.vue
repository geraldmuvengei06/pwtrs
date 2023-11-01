<script setup>
const { page_content } = contentStore();
let title = "Contact Us";
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
          <div class="md:flex max-w-xs sm:max-w-sm md:max-w-md w-full sm:w-2/5">
            <div class="">
              <div class="card glass my-8">
                <div class="card-body p-4">
                  <UiContact />
                </div>
              </div>
            </div>
          </div>

          <div class="sm:z-10">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >{{ content.title }}</span
              >
            </h1>
            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">
              {{ content?.description }}
            </p>

            <UiProtection class="hidden sm:inline" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <SectionExperts />
    <SectionUnique />
    <SectionCTA />
  </div>
</template>
