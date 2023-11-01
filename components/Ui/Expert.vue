<script lang="ts" setup>
interface Props {
  profile_picture?: string;
  name?: string;
  rating?: number;
  projects_completed?: number;
  categories?: string[];
}
let props = withDefaults(defineProps<Props>(), {
  profile_picture: "",
  name: "",
  rating: 0,
  projects_completed: 0,
  // categories:
});
</script>

<template>
  <div class="card">
    <div class="card-body flex items-center text-center">
      <div class="indicator">
        <span
          class="indicator-item indicator-bottom badge badge-primary badge-outline"
        >
          <p class="flex flex-row items-center gap-1">
            <span class="pi pi-star-fill text-orange-400"></span>
            {{ rating }}
          </p>
        </span>
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <NuxtImg
              alt="Online Nursing Writer"
              id="nuxt-img"
              :src="profile_picture"
            />
          </div>
        </div>
      </div>

      <h6>{{ name }}</h6>
      <div>
        <span
          v-for="(tag, i) in categories"
          :key="i"
          class="badge badge-outline border-gray-500 text-gray-500 mr-1"
          >{{ tag }}</span
        >
      </div>
      <p class="text-sm">
        <b>{{ projects_completed }}</b> <span class="">Completed Projects</span>
      </p>
    </div>
  </div>
</template>
