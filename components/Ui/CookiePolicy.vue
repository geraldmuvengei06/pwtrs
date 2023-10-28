<template>
  <div class="card flex flex-col justify-content-center">
    <PrimeToast position="bottom-left" group="bc" @close="onClose">
      <template #container="slotProps">
        <div
          class="flex flex-col align-items-start px-8 py-5 bg-base-100 text-base-content rounded-lg"
        >
          <h6 class="text-base sm:text-lg">Cookie Policy</h6>
          <p>
            {{ runtimeConfig.public.websiteName }} uses cookies to deliver a
            seemless and personalized experience. By clicking 'Accept' you agree
            with these
            <RouterLink class="underline font-bold" to="/legal/cookie-policy">
              cookies</RouterLink
            >.
          </p>
          <button
            class="btn btn-primary mt-2"
            label="Accept"
            @click="onAccept()"
          >
            Accept
          </button>
        </div>
      </template>
    </PrimeToast>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
const toast = useToast();
const visible = ref(false);
const runtimeConfig = useRuntimeConfig();

const showTemplate = () => {
  if (!visible.value) {
    toast.add({
      severity: "success",
      summary: "Can you send me the report?",
      group: "bc",
    });
    visible.value = true;
  }
};

const onAccept = () => {
  toast.removeGroup("bc");
  sessionStorage.setItem("_ck", true);
  visible.value = false;
};

const onClose = () => {
  visible.value = false;
};

onMounted(() => {
  let cookie = sessionStorage.getItem("_ck");
  if (!cookie) {
    setTimeout(() => {
      showTemplate();
    }, 3000);
  }
});
</script>
