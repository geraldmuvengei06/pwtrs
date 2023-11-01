<script setup lang="ts">
interface Props {
  type?: string;
}

let { order_url, goTo } = contentStore();

let props = withDefaults(defineProps<Props>(), {
  type: "horizontal",
});
</script>

<template>
  <div class="card shadow hover:shadow-lg sm:max-w-7xl mx-auto bg-white">
    <div
      class="card-body p-4 flex"
      :class="type == 'verticle' ? 'flex-column' : 'flex-column md:flex-row'"
    >
      <div class="card-title" v-if="type == 'verticle'">
        <h4 class="text-2xl sm:text-4xl">Calculate the Price</h4>
      </div>

      <button
        @click="goTo(`${order_url}`)"
        class="btn btn-primary"
        :class="type == 'verticle' ? '' : 'sm:mt-5'"
      >
        Order Now
      </button>
    </div>
  </div>
</template>
