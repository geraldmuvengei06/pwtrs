<script setup lang="ts">
definePageMeta({
    auth: false,
    title: "404"
})
const props = defineProps<{
    statusCode?:  number,
    message: string,
    stack: string,
}>()
</script>

<template>
    <div>
        <h1 class="text-5xl text-primary italic font-bold">{{ statusCode }}</h1>
        <p class="my-4 text-4xl text-[#505560]  break-all">{{ message || "Something gone missing..." }}</p>
        <slot />
    </div>
</template>

<style scoped></style>
