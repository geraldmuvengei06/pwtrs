<script setup lang="ts">
const { contacts } = contentStore();
interface Props {
  minimal?: boolean;
}

// const { isModalVisible, toggle, toggleBubbleVisibility, popoutChatWindow } = useChatWoot()

let props = withDefaults(defineProps<Props>(), {
  minimal: false,
});
</script>

<template>
  <div>
    <span v-if="!minimal">
      <h2 class="text-2xl sm:text-4xl">Ask an Agent</h2>
      <p>
        Want to contact us directly? No problem. We are always here for you.
      </p>
      <div class="avatar-group -space-x-6" v-once>
        <div class="avatar" v-for="i in 3" :key="i">
          <div class="w-12 sm:w-16">
            <NuxtImg alt="" id="nuxt-img" :src="`/experts/writer${i + 3}.jpeg`" />
          </div>
        </div>
      </div>
    </span>
    <p class="flex items-center gap-4 my-2">
      <span class="pi pi-whatsapp"></span>{{ contacts?.whatsapp }}
    </p>
    <p class="flex items-center gap-4 my-2">
      <span class="pi pi-envelope"></span>{{ contacts?.mail }}
    </p>

    <!-- <button class="btn btn-primary bgg-primary-500 text-white mt-8" @click="toggle('open')">Talk to an Agent</button> -->
  </div>
</template>
