<script lang="ts" setup>
let { order_url, goTo } = contentStore();
</script>

<template>
  <div
    class="card bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-90 text-base-content shadow-lg"
  >
    <div class="card-body px-4">
      <div
        v-for="i in 7"
        :key="i + 'l'"
        class="py-1 flex flex-row gap-1 justify-between items-center"
      >
        <span>Cover Page</span>
        <span class="flex flex-row items-center gap-1">
          <small class="font-bold">$5.00</small>
          <div class="badge badge-primary">Off!</div>
        </span>
      </div>
      <div class="divider font-bold">Saved <small>$5.00</small></div>
      <h6 class="text-center">Get All These Features</h6>
      <button
        @click="goTo(`${order_url}`)"
        class="sm:mt-4 btn btn-primary mx-auto"
      >
        Order Now
      </button>
    </div>
  </div>
</template>
