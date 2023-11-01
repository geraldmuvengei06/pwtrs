<script setup lang="ts">
let notification = ref(false);
</script>

<template>
  <UiAlert v-if="notification" />
  <UiNavbar />
  <slot></slot>
  <UiCookiePolicy />
  <UiFooter />
</template>
