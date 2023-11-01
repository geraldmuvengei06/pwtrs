<script setup>
let title = "Your Trusted Partner for Writing Excellence";
const runtimeConfig = useRuntimeConfig();

const site_name = runtimeConfig.public.websiteName;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: `Discover ${site_name}, the best online nursing essay service. We are your dedicated team of expert writers, ready to craft top-quality essays and papers for you.`,
  ogDescription: `Discover ${site_name}, the best online nursing essay service. We are your dedicated team of expert writers, ready to craft top-quality essays and papers for you.`,
  ogImage: "",
});
</script>

<template>
  <div class="min-w-full">
    <SectionHero />
    <SectionStats />
    <SectionReviews />
    <SectionSamples />
    <SectionCTADark />
    <SectionExperts />
    <SectionUnique />
    <SectionCTA />
    <SectionFreeFeatures />
    <SectionHowItWorksCards />
    <SectionFaq />
    <SectionCTAMaleDark />
    <SectionSeo />
    <SectionCTAMale />
  </div>
</template>
