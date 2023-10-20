

<template>
    <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
        <div class="container mx-auto py-8">
            <div class="hero rounded-xl min-h-min ">
                <div class="hero-content flex-col sm:flex-row-reverse">

                    <img src="/img/faq-animate.svg"
            class="md:flex sm:max-w-sm md:max-w-md" />

                    <div class="sm:z-10">
                        <h1 class="text-3xl sm:text-5xl font-bold "><span
                                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FAQ</span>
                        </h1>
                        <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service
                            with the
                            <b>fastest
                                delivery time</b> and fully original content.
                        </p>
                        <UiPayment class="hidden sm:inline" />
                    </div>

                </div>

            </div>
        </div>
    </div>

    <div>
        <div class="container mx-auto max-w-4xl">
            <UiFaq />
        </div>
        <SectionReviews />

        <SectionCTA />
    </div>
</template>