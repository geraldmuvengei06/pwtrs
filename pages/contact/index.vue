<script setup>

</script>

<template>
  <div class="bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]">
    <div class="container mx-auto py-8">
      <div class="hero rounded-xl min-h-min ">
        <div class="hero-content flex-col sm:flex-row-reverse">
          <!-- <div class=" max-w-xs sm:max-w-sm md:max-w-md"> -->
          <!-- <client-only>
                            <Vue3Lottie animationLink="/lotties/hero-2.json" />
                        </client-only> -->
          <!-- </div> -->
          <!-- <img src="/img/typing-animate.svg"
            class=" md:flex sm:max-w-sm md:max-w-md" /> -->

          <div class="md:flex sm:max-w-sm md:max-w-md">
            <div class="p-4">
              <div class="card glass my-8">
                <div class="card-body">
                  <UiContact />
                </div>
              </div>
            </div>
          </div>

          <div class="sm:z-10">
            <h1 class="text-3xl sm:text-5xl font-bold "><span
                class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact Us</span></h1>
            <p class="pt-6 text-lg sm:max-w-xs lg:max-w-max">Trust your assignments to an essay writing service with the
              <b>fastest
                delivery time</b> and fully original content.
            </p>

           
            <UiProtection class="hidden sm:inline" />



          </div>

        </div>

      </div>
    </div>
  </div>
  <div class="container mx-auto">
     <SectionUnique />
    <SectionCTA />
  </div>
</template>