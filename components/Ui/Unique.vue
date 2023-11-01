<script setup lang="ts">
interface Props {
  icon?: string;
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "pi pi-verified",
  title: "",
  description:
    "",
});
</script>

<template>
  <div class="card glass hover:shadow-md">
    <div class="card-body p-4">
      <div class="avatar">
        <div class="bg-primary text-white p-2 rounded-lg">
          <span class="text-2xl" :class="icon"></span>
        </div>
      </div>
      <h2 class="card-title">{{ title }}</h2>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
