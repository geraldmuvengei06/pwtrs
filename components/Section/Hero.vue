<script setup>
let { key_factors } = contentStore();
</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="container mx-auto py-8">
      <div class="hero rounded-xl min-h-min relative">
        <UiBgShade />

        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
          <NuxtImg alt="Write my essay" id="nuxt-img" src="/img/typing-animate.svg"
            class="hidden sm:inline sm:absolute lg:relative sm:right-1 sm:z-0 md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5" />

          <div class="sm:z-10 sm:px-4 sm:pt-8">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span class="hidden sm:inline mr-2">Achieve academic success with our</span>
              <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">A+ essay writing
                service</span>
            </h1>
            <p class="py-6 text-lg sm:max-w-xs lg:max-w-max">
              Elevate your academic performance with our online nursing writing
              service.
            </p>

            <div class="w-full inline sm:hidden shadow-lg my-8">
              <UiCalculator type="verticle" />
            </div>

            <ul v-once class="w-full text-lg mt-4 sm:mb-4 sm:mt-0 hover:bg-transparent">
              <li v-for="(factor, i) in key_factors" :key="i + 'f'" class="hover:bg-transparent">
                <span class="px-0"><i class="pi pi-check text-xl mr-2 text-primary"></i>{{ factor.item }}</span>
              </li>
            </ul>
            <UiPayment class="sm:inline" />

            <div class="flex flex-row justify-start items-center gap-4 mt-4">
              <UiRatingsTotal class="hidden sm:flex" />
              <div class="hidden sm:flex items-center justify-center sm:justify-start flex-row rounded-lg">
                <div class="w-24 mr-1">
                  <UiLogo />
                </div>
                <p class="text-base sm:text-lg w-1/4 flex flex-row items-center">
                  <span class="pi pi-star-fill text-orange-400 text-base sm:text-lg"></span>
                  <span class="text-black">4.9</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden sm:block max-w-screen-xl mx-auto">
        <UiCalculator />
      </div>
    </div>
  </div>
</template>
