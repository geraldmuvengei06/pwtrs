<template>
    <div class="">
        <div class="container mx-auto py-8 sm:py-16 px-4">

            <div
                class="flex flex-col items-center sm:flex-row bg-neutral text-neutral-content rounded-lg gap-4 hover:shadow-lg">

                <NuxtImg alt="" id="nuxt-img" class="w-48 sm:w-1/3 max-w-xs m-4 m-4"
                    src="/img/creative-writing-animate.svg" />

                <div class="px-4 py py-8">

                    <h2 class="text-2xl sm:text-4xl ">Talk to an <span
                            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert
                            Writer</span> Now</h2>
                    <p class="my-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, debitis error? Atque dolorum
                        voluptatem voluptate eum assumenda officiis inventore, et libero nesciunt quam dolorem, expedita
                        provident explicabo enim rerum. Voluptate?
                    </p>

                    <NuxtLink to="/orders/ordernow" class=" sm:mt-9 btn btn-primary flex">Hire an Expert Writer</NuxtLink>

                </div>
            </div>


        </div>
    </div>
</template>