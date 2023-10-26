<script setup lang="ts">
const props = defineProps<{
    title: string,
    action: string,
}>()
</script>

<template>
    <div class="">
        <div class="container mx-auto py-8 sm:py-16">

            <div
                class="flex flex-col items-center sm:flex-row bg-neutral text-neutral-content rounded-lg gap-4 hover:shadow-lg">

                <NuxtImg alt="" id="nuxt-img" class="w-48 sm:w-1/3 max-w-xs m-4" src="/img/creative-writing-animate.svg" />

                <div class="px-4 py py-8">

                    <h2 class="text-2xl sm:text-4xl "> <span
                            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{{ title
                            }}</span></h2>
                    <p class="my-4">
                        <slot />
                    </p>

                    <NuxtLink to="/orders/ordernow" class="sm:mt-9 btn btn-primary flex" v-if="action"> {{ action }}
                    </NuxtLink>
                    <NuxtLink to="/orders/ordernow" class="sm:mt-9 btn btn-primary flex" v-else>Hire an Expert Writer
                    </NuxtLink>

                </div>
            </div>


        </div>
    </div>
</template>