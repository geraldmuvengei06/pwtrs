<script setup lang="ts">
let { order_url, goTo } = contentStore();

interface Props {
  img?: string;
  filename?: string;
  path?: string;
  size?: string;
  type?: string;
  description?: string;
  estimated_read_time?: string;
  num_pages?: number;
}
let props = withDefaults(defineProps<Props>(), {
  img: "",
  filename: "",
  path: "",
  size: "",
  type: "",
  description: "",
  estimated_read_time: "",
  num_pages: 0,
});

const visible = ref(false);
</script>

<template>
  <PrimeDialog maximizable v-model:visible="visible" modal :header="filename" :style="{ width: '600' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
  <PrimeDialog maximizable v-model:visible="visible" modal :header="filename" :style="{ width: '600' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <p>
      <span><b>{{ type }}</b> - <small>{{ num_pages }} pages</small></span>
      <!-- - <small>{{ estimated_read_time }} Read</small> -->
    </p>
    <iframe class="bg-slate-100 border-none" width="100%" height="1240px" :src="path">
      Your browser does not support PDFs.
    </iframe>

    <SectionCTA />
  </PrimeDialog>
  <div class="card mx-1 max-w-xs bg-slate-50 hover:shadow-md">
    <div class="card-body p-4">
      <h4 class="text-lg sm:text-xl flex sm:flex-row gap-1">
        <span class="pi pi-file text-3xl sm:text-5xl"></span>
        <span>{{ filename }}</span>
      </h4>
      <span><b>{{ type }}</b> - <small>{{ num_pages }} pages</small></span>
      <span><b>{{ type }}</b> - <small>{{ num_pages }} pages</small></span>
      <div class="divider py-0 my-0 border-slate-50"></div>

      <div class="card-actions justify-between">
        <button class="btn btn-primary btn-outline btn-sm" @click="visible = true">
        <button class="btn btn-primary btn-outline btn-sm" @click="visible = true">
          View
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-rating-item-active {
  @apply bg-primary;
}

object {
  #toolbar {
    display: none !important;
  }

  #sidenav-container {
    display: none !important;
  }
}
</style>
