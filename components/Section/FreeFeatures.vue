<script setup lang="ts">
let unique = [
  {
    icon: "pi pi-verified",
    title: "Original Content",
    // description: '',
  },
  {
    icon: "pi pi-verified",
    title: "Verified Writers",
    // description: '',
  },
  {
    icon: "pi pi-verified",
    title: "24/7 Support",
    // description: '',
  },
  {
    icon: "pi pi-verified",
    title: "Secure and Confidential",
    // description: '',
  },
];
</script>

<template>
  <div class="bg-neutral text-neutral-content">
    <div class="container max-w-7xl mx-auto py-8 sm:py-16">
      <div class="flex flex-col items-center sm:flex-row gap-4 px-4">
        <div class="sm:w-3/5">
          <div class="section-header my-8">
            <h2 class="text-2xl sm:text-4xl text-white">Why Us</h2>
          </div>
          <ul class="my-4">
            <li
              v-for="i in 5"
              :key="i + 'ds'"
              class="py-3 sm:pb-4"
              :class="i < 5 && 'border-b border-b-slate-500'"
            >
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span
                    class="text-3xl text-slate-50 dark:text-slate-100 pi pi-user"
                  ></span>
                </div>
                <div class="flex-1 min-w-0 ml-4">
                  <p class="text-sm font-medium text-slate-300">
                    12+ Years helping students in their studies
                  </p>
                  <p class="text-sm text-slate-100 dark:text-slate-150">
                    We have extensive experience in writing papers on all types
                    and subjects.
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
          <UiFreeFeature />
        </div>
      </div>
    </div>
  </div>
</template>
