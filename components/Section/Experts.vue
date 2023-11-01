<script setup>
const { experts } = contentStore();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="">
    <div class="container mx-auto py-8 sm:py-16 max-w-7xl">
      <div class="section-header my-8 text-center max-w-lg mx-auto">
        <h2 class="text-2xl sm:text-4xl">A Wide Selection of Expert Writers</h2>
        <p>
          A wide selection of expert writers who can handle a variety of topics,
          subjects, and academic levels!
        </p>
      </div>

      <PrimeCarousel
        :value="experts"
        :numVisible="4"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        circular
        :autoplayInterval="3000"
        class="mb-4"
      >
        <template #item="slotProps">
          <UiExpert v-bind="slotProps.data" />
        </template>
      </PrimeCarousel>

      <!-- <div class="flex gap-4 items-center justify-center">

                <button class="sm:mt-9 btn btn-primary flex">Hire an Expert Writer</button>
            </div> -->
    </div>
  </div>
</template>
