<script setup>
let title = 'Essay Writing Service'

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
    <div class="min-w-full">
        <SectionHero />
        <SectionSamples />
        <SectionReviews />
        <SectionExperts />
        <SectionUnique />
        <SectionFreeFeatures />
        <SectionCTA />
        <SectionHowItWorks />
        <SectionFaq />
        <SectionSeo />
        <SectionCTAMale />
    </div>
</template>