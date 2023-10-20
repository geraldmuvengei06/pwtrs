<script lang="ts" setup>
definePageMeta({
    auth: false,
    title: "404"
})
const props = defineProps<{
    statusCode?: string | number,
    message: string
}>()
</script>

<template>
    <div>
        <h1 class="text-5xl text-primary italic font-bold">{{ statusCode }}</h1>
        <p class="my-4 text-4xl text-[#505560]  break-all">{{ message || "Something gone missing..." }}</p>
        <p class="my-4">We couldn’t find the page, The page was removed or renamed</p>
        <slot />
    </div>
</template>

<style scoped></style>
