<script setup lang="ts">
interface Props {
  img?: string;
  customer?: string;
  rating?: number;
  review?: string;
  type_of_service?: string;
}
let props = withDefaults(defineProps<Props>(), {
  img: "",
  customer: "",
  rating: 4,
  review: "",
  type_of_service: "",
});

let _rating = toRef(props?.rating);
</script>

<template>
  <div class="card mx-1 bg-slate-50 hover:shadow-md">
    <!-- <figure class="px-10 pt-10"> -->
    <!-- <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <NuxtImg alt=""  id="nuxt-img" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div> -->
    <!-- <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">JO</span>
                </div>
            </div>  -->
    <!-- </figure> -->
    <div class="card-body p-4">
      <h4 class="card-title mb-0">{{ customer }}</h4>

      <div class="divider py-0 my-0 border-slate-50">{{ type_of_service }}</div>

      <p>{{ review }}</p>
      <div class="card-actions">
        <!-- <PrimeRating class="text-primary" v-model="_rating" readonly /> -->
        <div class="flex items-center space-x-1">
          <svg
            class="w-4 h-4"
            v-for="i in 5"
            :key="i + 'rate'"
            :class="
              i <= rating
                ? 'text-orange-400'
                : 'text-gray-300 dark:text-gray-500'
            "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-rating-item-active {
  @apply bg-primary;
}
</style>
