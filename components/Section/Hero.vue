<script setup>
let { key_factors } = contentStore()
</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <!-- <div class=" max-w-xs sm:max-w-sm md:max-w-md"> -->
                    <!-- <client-only>
                            <Vue3Lottie animationLink="/lotties/hero-2.json" />
                        </client-only> -->
                    <!-- </div> -->
                    <img src="/img/typing-animate.svg" class=" sm:absolute lg:relative sm:right-1 sm:z-0 md:flex sm:max-w-sm md:max-w-md" />

                    <div class="sm:z-10">
                        <h1 class="text-3xl sm:text-5xl font-bold ">Let <span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert
                                Writers</span> Ace your Essays!</h1>
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the <b>fastest
                                delivery time</b> and fully original content.
                        </p>    

                        <ul class="w-full text-lg hover:bg-transparent py-4">
                            <li v-for="factor, i in key_factors" :key="i + 'f'" class="hover:bg-transparent"><span
                                    class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item
                                    }}</span>
                            </li>
                        </ul>

                        <UiPayment class="hidden sm:inline" />

                        <div class="flex gap-4">
                            <!-- <div class="rounded overflow-hidden shadow w-28 "><img class="grayscale" src="/img/visa-mastercard.jpg" /></div>
                            <div class="rounded overflow-hidden shadow w-28 "><img class="grayscale" src="/img/trustpilog.png" /></div> -->
                            <button class="sm:mt-9 btn btn-primary flex sm:hidden ">Order Now</button>
                            <button class="sm:mt-9 btn btn-secondary btn-outline flex sm:hidden ">Talk to An
                                Expert</button>
                        </div>

                    </div>

                </div>

            </div>

            <div class="hidden sm:block max-w-screen-xl mx-auto">
                <UiOrderForm />
            </div>
        </div>
</div></template> 