<script setup>

const { how_it_works } = contentStore();
</script>

<template>
  <div class="container mx-auto py-8 sm:py-16 max-w-7xl">
    <div class="section-header my-8 text-center max-w-lg mx-auto">
      <h2 class="text-2xl sm:text-4xl">How to Order</h2>
      <p class="">How to Hire a Professional to "Do My Paper Online"?</p>
    </div>

    <div>
      <PrimeTimeline :value="how_it_works" align="alternate" class="customized-timeline max-w-5xl mx-auto">
        <template #marker="slotProps">
          <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-1 shadow-1 bg-primary">
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <div class="card shadow-lg">
            <div class="card-body p-4">
              <div class="card-subtitle">
                <strong class="text-xl sm:text-2xl">{{
                                  slotProps.item.title
                                  }}</strong>
                <br />
                {{ slotProps.item.date }}
              </div>
              <NuxtImg format="webp" loading="lazy" alt="How it works" v-if="slotProps.item.image"
                :src="`/img/${slotProps.item.image}`" :alt="slotProps.item.name" class="shadow-1" />
              <span class="prose prose-slate list text-left" v-html="slotProps.item.description"></span>
            </div>
          </div>
        </template>
      </PrimeTimeline>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }

    .p-card {
      margin-top: 1rem;
    }
  }
}
</style>
