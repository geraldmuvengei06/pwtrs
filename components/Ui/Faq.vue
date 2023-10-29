<script setup lang="ts">
const { faqs } = contentStore();
</script>

<template>
  <div>
    <div class="section-header my-8 text-center max-w-lg mx-auto">
      <h2 class="text-2xl sm:text-4xl">FAQs</h2>
      <p>
        Get answers to your questions about our online writing service. Explore
        our frequently asked questions for all the information you need.
      </p>
    </div>
    <PrimeAccordion :activeIndex="0">
      <PrimeAccordionTab
        v-for="(faq, i) in faqs"
        :key="i"
        :header="faq.question"
      >
        <p>
          {{ faq.answer }}
        </p>
      </PrimeAccordionTab>
    </PrimeAccordion>
  </div>
</template>
