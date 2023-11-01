<script lang="ts" setup>
let { order_url, goTo, free_features } = contentStore();

const total_saved = free_features.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.cost;
}, 0);
</script>

<template>
  <div class="card bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-90 text-base-content shadow-lg">
    <div class="card-body px-4" v-once>
      <div v-for="feat, i in free_features" :key="i + 'l'" class="py-1 flex flex-row gap-1 justify-between items-center">
        <span>{{ feat?.feat }}</span>
        <span class="flex flex-row items-center gap-1">
          <strike class="font-bold">${{ feat?.cost }}</strike>
          <div class="badge badge-success">Off!</div>
        </span>
      </div>
      <div class="divider font-bold text-xl">Saved ${{ total_saved }}</div>
      <h6 class="text-center">Get These Features for Free</h6>
      <button @click="goTo(`${order_url}`)" class="sm:mt-4 btn btn-success mx-auto">
        Order Now
      </button>
    </div>
  </div>
</template>
