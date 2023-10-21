
import { UiReview } from '#build/components';

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    reviews.value = [
        {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        },
        {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        },
        {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        },
        {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        },
        {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        }
    ]
})

const reviews = ref();
const responsiveOptions = ref([
    // {
    //     breakpoint: '1199px',
    //     numVisible: 1,
    //     numScroll: 1
    // },
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
    <div class="container mx-auto py-8 sm:py-16">
        <div class="section-header my-8 text-center max-w-lg mx-auto px-4">
            <h2 class="text-2xl sm:text-4xl ">What Other Students Say</h2>
            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <div class="flex flex-col sm:flex-row gap-4 justify-between md:justify-center">
                <div class="flex items-center justify-center sm:justify-start flex-row rounded-lg px-2">
                    <div class="w-24"><NuxtImg alt=""  id="nuxt-img" src="/img/reviewsio.png" /></div>
                    <p class="text-2xl w-1/4 flex flex-row items-center">
                        <span class="pi pi-star-fill text-orange-400 text-2xl"></span>
                        4.5
                    </p>
                </div>

                 <div class="flex items-center justify-center sm:justify-start flex-row rounded-lg px-2">
                        <div class="w-24"><NuxtImg alt=""  id="nuxt-img" src="/img/sitejabber.png" /></div>
                        <p class="text-2xl w-1/4 flex flex-row items-center">
                            <span class="pi pi-star-fill text-orange-400 text-2xl"></span>
                            4.7
                        </p>
                    </div>


            </div>
        </div>
        <PrimeCarousel :value="reviews" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions"  class="mb-4">
            <template #item="slotProps">
                <UiReview v-bind="slotProps.data" />
            </template>
        </PrimeCarousel>

    </div>
</template>

