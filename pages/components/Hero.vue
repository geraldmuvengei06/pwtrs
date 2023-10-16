<script setup>
import OrderForm from './OrderForm.vue';

</script>

<template>
    <section class=" bg-white dark:bg-gray-900">
        <div
            class="container sm:min-h-[540px] grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-6">
                <h1
                    class="max-w-2xl mb-4 leading-none md:text-5xl xl:text-6xl dark:text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Get your papers done by expert writers</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi, perspiciatis maxime
                    similique iure tenetur facere!
                </p>

                <ul
                    class="my-6 ml-6 list-disc [&>li]:mt-2 text-primary flex flex-col sm:flex-row sm:items-center sm:gap-8 font-extrabold tracking-tight">
                    <li>Confidential</li>
                    <li>Top rated</li>
                        <li>Reliable</li>
                        <li>Unique Work</li>
                    </ul>

                <div class="flex flex-row justify-start items-center gap-4">
                    <div class="w-28">
                        <client-only>
                            <Vue3Lottie animationLink="/lotties/visa-mastercard.json" />
                        </client-only>
                    </div>
                    <div class="w-28">
                            <client-only>
                                <Vue3Lottie animationLink="/lotties/amex-slow.json" />
                            </client-only>
                        </div>
                </div>

            </div>
            <div class="hidden md:mt-0 md:col-span-6 md:flex">
                <client-only>
                    <Vue3Lottie class="md:h-96" animationLink="/lotties/hero-2.json" />
                </client-only>
            </div>

            <div class="col-span-12 flex justify-stretch min-w-full sm:justify-center my-8">
                <OrderForm/>
            </div>
        </div>
    </section>
</template>