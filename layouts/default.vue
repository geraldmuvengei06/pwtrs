<script setup lang="ts">
    let notification = ref(false)
</script>

<template>

    <!-- Promo -->
    <UiAlert v-if="notification" />
    <UiHeader />
   <slot></slot>
</template>