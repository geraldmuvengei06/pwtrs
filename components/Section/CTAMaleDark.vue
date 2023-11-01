<script lang="ts" setup>
let { order_url, goTo } = contentStore();
</script>

<template>
  <div class="">
    <div class="container mx-auto py-8 sm:py-16 max-w-7xl px-4 sm:px-8">
      <div
        class="flex flex-col items-center sm:flex-row bg-gradient-to-tr from-neutral to-neutral-focus text-neutral-content rounded-lg gap-4 hover:shadow-lg"
      >
        <div class="px-4 sm:px-8 py-8">
          <h2 class="text-2xl sm:text-4xl">
            Join countless students who
            <span
              class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >aced</span
            >
            their essays with our help.
          </h2>
          <p class="my-4">
            Raise your grades and your confidence with our essay support.
          </p>

          <button
            @click="goTo(`${order_url}`)"
            class="sm:mt-9 btn btn-primary flex"
          >
            Ok! Proceed
          </button>
        </div>

        <NuxtImg
          alt="Ace your grades with our services"
          id="nuxt-img"
          class="w-48 sm:w-1/3 max-w-xs m-4"
          src="/img/Telecommuting-pana.png"
        />
      </div>
    </div>
  </div>
</template>
