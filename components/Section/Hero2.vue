<script setup>
let { key_factors } = contentStore();
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Let
          <span
            class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >Expert Writers</span
          >
          <br />
          Ace your Essays! ✍️
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-50"
        >
          Trust your assignments to an essay writing service with the
          <b>fastest delivery time</b> and fully original content.
        </p>

        <UiOrderFormDescription class="block sm:hidden mb-4" />

        <ul class="w-full text-lg hover:bg-transparent mb-4">
          <li
            v-for="(factor, i) in key_factors"
            :key="i + 'f'"
            class="hover:bg-transparent dark:text-gray-100"
          >
            <span class="px-0"
              ><i
                class="pi pi-check text-xl mr-2 text-primary dark:text-gray-100"
              ></i
              >{{ factor.item }}</span
            >
          </li>
        </ul>
        <!-- <NuxtLink href="/orders/ordernow"
          class=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary  btn-lg hover:bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary">
          Get started
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink> -->

        <UiRatingsTotal classnames="justify-start mt-5" />
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="/img/typing-animate.svg" alt="mockup" />
      </div>
      <div class="col-span-12 my-6">
        <UiOrderForm
          class="hidden sm:block bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4]"
        />
      </div>
    </div>
  </section>
</template>
