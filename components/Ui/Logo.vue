

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

</script>

<template>
    <NuxtLink to="/" class="rounded-lg overflow-hidden">
        <h3 class="text-primary-focus font-bold text-xl sm:text-3xl">{{ runtimeConfig.public.websiteName }}</h3>
        <!-- <NuxtImg class="w-36 sm:w-56 text-primary-focus font-bold text-xl" alt="proswriters" src="/logo.png" /> -->
    </NuxtLink>
</template>