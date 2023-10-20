

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    samples.value = [
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
        }, {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        }, {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        }, {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        }, {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        }, {
            name: 'test',
            image: 'test.png',
            rating: 4,
            description: 'Timely delivery'
        },
    ]
})

const samples = ref();
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
    <div class="container mx-auto py-16">
        <div class="section-header my-8 text-center max-w-lg mx-auto px-4">
            <h2 class="text-2xl sm:text-4xl ">Check Out Our Samples</h2>
            <p>Original. Quality. On time</p>

        </div>
        <PrimeCarousel :value="samples" :numVisible="4" :numScroll="3" :responsiveOptions="responsiveOptions" circular
            :autoplayInterval="3000" class="mb-4">
            <template #item="slotProps">
                <UiSample v-bind="slotProps.data" />
            </template>
        </PrimeCarousel>

    </div>
</template>

