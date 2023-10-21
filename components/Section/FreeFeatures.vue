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
    <div class="bg-neutral text-neutral-content">
        <div class="container mx-auto py-8 sm:py-16">



            <div class="flex flex-col items-center sm:flex-row gap-4 px-4">

                <div class="sm:w-3/5">
                    <div class="section-header my-8  ">

                        <h2
                            class="text-2xl sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Why Us</h2>




                    </div>
                    <ul class="my-4 ">
                        <li v-for="i in 5" :key="i + 'ds'" class="py-3 sm:pb-4  "
                            :class="i < 5 && 'border-b border-b-slate-500'">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <span class="text-3xl  text-gray-500 dark:text-gray-400  pi pi-user"></span>
                                </div>
                                <div class="flex-1 min-w-0 ml-4">
                                    <p class="text-sm font-medium text-gray-900 dark:text-slate-300">
                                        12+ Years helping students in their studies
                                    </p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        We have extensive experience in writing papers on all types and subjects.

                                    </p>
                                </div>
                                <!-- <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $320
                                    </div> -->
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="py-8 w-full sm:px-8 sm:w-2/5">

                    <div
                        class="card bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-90  text-base-content shadow-lg">
                        <div class="card-body px-4">

                            <div v-for="i in 7" :key="i + 'l'"
                                class=" py-1 flex flex-row gap-1 justify-between items-center">
                                <span>Cover Page</span>
                                <span class="flex flex-row items-center gap-1">
                                    <strike class="font-bold ">$5.00</strike>
                                    <div class="badge badge-primary">Off!</div>
                                </span>
                            </div>
                            <div class="divider font-bold">Saved <strike>$5.00</strike></div>
                            <h5 class="text-center">Get All These Features</h5>
                            <button class="sm:mt-4 btn btn-primary flex text-slate-50">Order Now</button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </div>
</template>