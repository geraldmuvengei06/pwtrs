<template>
  <div class="bg-white pt-8 sm:pt-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="mx-auto flex max-w-xs flex-col gap-y-4"
        >
          <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
          <dd
            class="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl"
          >
            {{ stat.value }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { id: 1, name: "Submitted pages every 24 hours", value: "1323" },
  { id: 2, name: "Trusted by Satisfied Customers", value: "20K+" },
  { id: 3, name: "Finished Orders", value: "2380" },
];
</script>
