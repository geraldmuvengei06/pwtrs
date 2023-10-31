<script setup>
let { key_factors } = contentStore();
</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="container mx-auto py-8">
      <div class="hero rounded-xl min-h-min relative">
        <UiBgShade />

        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
          <NuxtImg
            alt=""
            id="nuxt-img"
            src="/img/typing-animate.svg"
            class="hidden sm:inline sm:absolute lg:relative sm:right-1 sm:z-0 md:flex max-w-xs sm:max-w-sm md:max-w-md w-48 sm:w-2/5"
          />

          <!-- <div class="flex sm:hidden w-full sm:max-w-sm md:max-w-lg lg:max-w-xl sm:w-80 md:w-4/12">
                        <UiOrderFormDescription class="w-full" type="verticle" />
                    </div> -->

          <div class="sm:z-10 sm:px-4 sm:pt-8">
            <h1 class="text-3xl sm:text-5xl font-bold">
              <span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >A+ Essays</span
              >
              at Your Fingertips
            </h1>
            <p class="py-6 text-lg sm:max-w-xs lg:max-w-max">
              Elevate your academic performance with our online writing service.
            </p>

            <div class="w-full inline sm:hidden shadow-lg my-8">
              <UiCalculator type="verticle" />
            </div>

            <ul class="w-full text-lg mt-8 sm:mt-0 hover:bg-transparent">
              <li
                v-for="(factor, i) in key_factors"
                :key="i + 'f'"
                class="hover:bg-transparent"
              >
                <span class="px-0"
                  ><i class="pi pi-check text-xl mr-2 text-primary"></i
                  >{{ factor.item }}</span
                >
              </li>
            </ul>
            <UiPayment class="sm:inline" />

            <div class="flex flex-row justify-start items-center gap-4 mt-4">
              <UiRatingsTotal class="hidden sm:flex" />
              <div
                class="flex items-center justify-center sm:justify-start flex-row rounded-lg"
              >
                <div class="w-24 mr-1">
                  <UiLogo />
                </div>
                <p
                  class="text-base sm:text-lg w-1/4 flex flex-row items-center"
                >
                  <span
                    class="pi pi-star-fill text-orange-400 text-base sm:text-lg"
                  ></span>
                  <span class="text-black">4.9</span>
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <!-- <button class="sm:mt-9 btn btn-primary flex sm:hidden ">Order Now</button> -->
              <!-- <button class="sm:mt-9 btn btn-primary btn-outline flex sm:hidden ">Talk to An
                                Expert</button> -->
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

<style>
/* .navbar-c{

        background-color: rgb(253, 224, 71);
        background-image: radial-gradient(at 80% 24%, rgb(74, 222, 128) 0, transparent 86%), radial-gradient(at 91% 5%, rgb(134, 25, 143) 0, transparent 15%), radial-gradient(at 99% 49%, rgb(237, 233, 254) 0, transparent 50%), radial-gradient(at 58% 11%, rgb(55, 48, 163) 0, transparent 63%), radial-gradient(at 2% 34%, rgb(254, 205, 211) 0, transparent 73%), radial-gradient(at 64% 55%, rgb(31, 41, 55) 0, transparent 20%);
      
} */
</style>
