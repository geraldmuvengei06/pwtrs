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
                class="flex flex-col items-center sm:flex-row bg-gradient-to-tr from-[#F2F8FC]  to-[#FEF6F4] rounded-lg gap-4 hover:shadow-lg">

                <NuxtImg alt=""  id="nuxt-img" class="w-48 sm:w-1/3 max-w-xs m-4" src="/img/creative-writing-animate.svg" />

                <div class="px-4 py py-8">

                    <h2 class="text-2xl sm:text-4xl "> <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{{ title }}</span></h2>
                    <p class="my-4">
                        <slot />
                    </p>

                    <button class=" sm:mt-9 btn btn-primary flex">{{ action || 'Hire an Expert Writer'}}</button>

                </div>
            </div>


        </div>
    </div>
</template>