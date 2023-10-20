<script setup>
let experts = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>

<template>
    <div class="">
        <div class="container mx-auto py-16">
            <div class="section-header my-8 text-center max-w-lg mx-auto">
                <h2 class="text-2xl sm:text-4xl ">A Wide Selection of Expert Writers</h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

            <div class="hidden sm:grid grid-flow-row sm:grid-flow-col gap-2 mx-4 text-center">
                <p class="text-gray-400 text-sm sm:border-r-2 border-r-primary">
                    Our Writers Have Graduated from the Best Universities and Colleges
                </p>
                <img src="/img/icons/harvard.svg" />
                <!-- <img src="/img/icons/univ2.svg" /> -->
                <!-- <img src="/img/icons/leads.png" /> -->
                <img src="/img/icons/ss.svg" />
            </div>

            <PrimeCarousel :value="experts" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions" circular
                :autoplayInterval="3000" class="mb-4">
                <template #item="slotProps">
                    <UiExpert v-bind="slotProps.data" />
                </template>
            </PrimeCarousel>

            <!-- <div class="flex gap-4 items-center justify-center">

                <button class="sm:mt-9 btn btn-secondary flex text-slate-50">Hire an Expert Writer</button>
            </div> -->

        </div>
    </div>
</template>