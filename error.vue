<script setup lang="ts">
const props = defineProps<{
  error?: any;
}>();

definePageMeta({
  title: props?.error?.statusCode || "Error",
  auth: false,
});

const router = useRouter();

function goBack() {
  router.push("/");
}
</script>

<template>
  <div class="min-w-full min-h-screen bg-white">
    <div
      class="error-container sm:absolute px-4 my-10 mx-9 right-0 left-0 top-0 bottom-0 border border-primary border-t-0 border-b-0 flex flex-col-reverse sm:flex-row justify-around items-center">
      <div class="py-4">
        <NuxtLayout :stack="error?.stack" :name="error?.statusCode" :statusCode="error?.statusCode"
          :message="error?.message" class="break-words" />

        <div class="flex flex-row items-center py-4 gap-4">
          <NuxtLink class="btn btn-primary" to="/"> Home </NuxtLink>

          <button class="btn btn-primary btn-outline" @click="router.go(-1)">
            Go Back
          </button>
        </div>
      </div>
      <NuxtImg loading="lazy" format="webp" id="nuxt-img" class="p-2 w-full sm:w-1/2" v-if="error?.statusCode == 404"
        src="/img/404-Error-pana.png" />
      <NuxtImg loading="lazy" format="webp" id="nuxt-img" class="p-2 w-full sm:w-1/2" v-if="error?.statusCode == 500"
        src="/img/500-Internal-Server-Error-pana.png" />
      <NuxtImg loading="lazy" format="webp" id="nuxt-img" class="p-2 w-full sm:w-1/2"
        v-else-if="![404, 500].includes(error?.statusCode)" src="/img/504-Error-Gateway-Timeout-pana.png" />
    </div>
  </div>
</template>
