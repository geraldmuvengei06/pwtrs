<script setup lang="ts">
const { faqs } = contentStore();
</script>

<template>
  <div>
    <div class="section-header my-8 text-center max-w-lg mx-auto">
      <h2 class="text-2xl sm:text-4xl">FAQs</h2>
      <p>
        Got questions about 'write my essay for me' and 'write my paper'
        services? We've got you covered. Explore our FAQ section to find
        comprehensive answers, ensuring you make informed decisions and trust
        the best online writers in the field.
      </p>
    </div>
    <PrimeAccordion :activeIndex="0">
      <PrimeAccordionTab
        v-once
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
