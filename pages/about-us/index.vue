<script setup>

</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                 
                    <!-- <img src="/img/typing-animate.svg"
            class=" sm:absolute lg:relative sm:right-1 sm:z-0 md:flex sm:max-w-sm md:max-w-md" /> -->


                    <div class="sm:z-10">
                        <h1 class="text-3xl sm:text-5xl font-bold "><span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About
                                Us</span></h1>
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service
                            with the
                            <b>fastest
                                delivery time</b> and fully original content.
                        </p>

                        <ul class="w-full text-lg hover:bg-transparent py-4">
                            <li v-for="factor, i in key_factors" :key="i + 'f'" class="hover:bg-transparent"><span
                                    class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item
                                    }}</span>
                            </li>
                        </ul>

                        <UiProtection class="hidden sm:inline" />


                    </div>

                </div>

            </div>
        </div>
    </div>
    <div class="container mx-auto">
        <SectionExperts />
        <SectionUnique />
        <SectionCTAMale />
    </div>
</template>