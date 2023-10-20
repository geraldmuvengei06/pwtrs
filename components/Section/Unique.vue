<script setup lang="ts">
let unique = [
    {
        icon: 'pi pi-verified',
        title: 'Original Content',
        // description: '',
    },
    {
        icon: 'pi pi-verified',
        title: 'Verified Writers',
        // description: '',
    },
    {
        icon: 'pi pi-verified',
        title: '24/7 Support',
        // description: '',
    },
    {
        icon: 'pi pi-verified',
        title: 'Secure and Confidential',
        // description: '',
    },
]
</script>

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] via-[#FEF6F4] to-transparent">
        <div class="container mx-auto py-16">
            <div class="section-header my-8 text-center max-w-lg mx-auto">

                <h2 class="text-2xl sm:text-4xl ">How We Stand Out from the Crowd</h2>
                <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div class="max max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <UiUnique v-for="un, i in unique" :key="i" v-bind="un" />
            </div>
            
        </div>
    </div>
</template>