<script setup>
let { key_factors } = contentStore()

const { path } = useRoute();

const { data, pending, error, refresh } = await useAsyncData(
    `content-${path}`,
    () => queryContent()
      .where({_path: path})
      .findOne()
);

console.log( data, pending, error, refresh);

// useSeoMeta({
//     title: title,
//     ogTitle: title,
//     description: 'This is my amazing site, let me tell you all about it.',
//     ogDescription: 'This is my amazing site, let me tell you all about it.',
//     ogImage: '',
//     twitterCard: 'summary_large_image',
// })

</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content container flex-col sm:flex-row-reverse">
                    <div class="w-full md:max-w-lg lg:max-w-xl sm:w-80 md:w-4/12">
                        <UiOrderFormDescription type="verticle" />
                    </div>


                    <div class="sm:w-2/3">
                        <h1 class="text-3xl sm:text-5xl font-bold "><span
                                class="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">{{ data?.title }}</span>
                        </h1>
                      
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">{{ data?.subtitle }}
                        </p>
                        <ul class="w-full text-lg hover:bg-transparent py-4">
                            <li v-for="factor, i in key_factors" :key="i + 'f'" class="hover:bg-transparent"><span
                                    class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item
                                    }}</span>
                            </li>
                        </ul>

                        <UiPayment class="hidden sm:inline" />


                    </div>

                </div>

            </div>
        </div>
    </div>

    <div>
        <!-- <SectionSamples /> -->
        <!-- <SectionCTADark /> -->
        <div class="container mx-auto max-w-4xl py-12 px-4">

          <article class="prose prose-slate  max-w-3xl mx-auto">
            <!-- <ContentDoc /> -->
            <ContentRenderer :value="data">
              <ContentRendererMarkdown :value="data" ></ContentRendererMarkdown>
            </ContentRenderer>
            
          </article>


            <!-- Service content -->


        </div>
        <SectionFaq />
        <SectionReviews />

        <SectionCTA />
    </div>
</template>

<style lang="scss" scoped>
// h1 {
//     @apply text-3xl sm:text-5xl mt-3 mb-2;
// }
// h2 {
//     @apply text-2xl sm:text-4xl mt-3 mb-2;
// }
// h3 {
//     @apply text-xl sm:text-3xl mt-3 mb-2;
// }
// h4 {
//     @apply text-lg sm:text-2xl mt-3 mb-2;
// }

// h5 {
//     @apply text-base sm:text-xl mt-3 mb-2;
// }

</style>