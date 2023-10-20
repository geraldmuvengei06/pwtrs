<script setup>
let key_factors = [
    {
        item: 'Lighting-fast turnaround time',
        icon: '',
    },
    {
        item: 'Help with any assignment',
        icon: '',
    },
    {
        item: 'Plagiarism-free content',
        icon: '',
    },
    {
        item: 'Writers from the US and Canada',
        icon: '',
    }
]
</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col-reverse lg:flex-row-reverse">
                    <!-- <div class=" max-w-xs sm:max-w-sm md:max-w-md"> -->
                    <!-- <client-only>
                            <Vue3Lottie animationLink="/lotties/hero-2.json" />
                        </client-only> -->
                    <!-- </div> -->
                    <img src="/img/Creative writing-amico.png" class="max-w-xs sm:max-w-sm md:max-w-md" />

                    <div class="sm:pt-16">
                        <h1 class="text-5xl font-bold ">Let <span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert
                                Writers</span> Ace your Essays!</h1>
                        <p class="pt-6 text-lg">Trust your assignments to an essay writing service with the <b>fastest
                                delivery time</b> and fully original content.
                        </p>

                        <ul class="menu w-full text-lg hover:bg-transparent py-4">
                            <li v-for="factor, i in key_factors" :key="i + 'f'" class="hover:bg-transparent"><span
                                    class="px-0"><i class="pi pi-check text-xl mr-1 text-primary"></i>{{ factor.item
                                    }}</span>
                            </li>
                        </ul>

                        <UiPayment class="hidden sm:flex" />

                        <div class="flex gap-4">
                            <!-- <div class="rounded overflow-hidden shadow w-28 "><img class="grayscale" src="/img/visa-mastercard.jpg" /></div>
                            <div class="rounded overflow-hidden shadow w-28 "><img class="grayscale" src="/img/trustpilog.png" /></div> -->
                            <button class="sm:mt-9 btn btn-secondary flex sm:hidden text-slate-50">Order Now</button>
                            <button class="sm:mt-9 btn btn-secondary btn-outline flex sm:hidden text-slate-50">Talk to An
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