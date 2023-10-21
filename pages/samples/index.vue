
<script setup>

let title = "Free Samples"
useSeoMeta({
    title: title,
    ogTitle: title,
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: '',
    twitterCard: 'summary_large_image',
})
</script>


<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col sm:flex-row-reverse">

                    <div class="w-full sm:max-w-sm md:max-w-lg lg:max-w-xl sm:w-80 md:w-4/12">
                        <UiOrderFormDescription type="verticle" />
                    </div>

                    <div class="sm:z-10">
                        <h1 class="text-3xl sm:text-5xl font-bold "><span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work
                                Sample</span></h1>
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service
                            with the
                            <b>fastest
                                delivery time</b> and fully original content.
                        </p>


                        <UiPayment class="hidden sm:inline" />


                    </div>

                </div>

            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <SectionSamples />
        <SectionReviews />
        <SectionCTA />
    </div>
</template>