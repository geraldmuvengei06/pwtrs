<script setup lang="ts">
interface Props {
  minimal?: boolean;
}

const contacts = {
  whatsapp: "1-893-233-2333",
  mail: "support@test.com",
};

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
      <div class="avatar-group -space-x-6">
        <div class="avatar">
          <div class="w-12 sm:w-16">
            <NuxtImg alt="" id="nuxt-img" src="/img/writer.png" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-12 sm:w-16">
            <NuxtImg alt="" id="nuxt-img" src="/img/writer.png" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-12 sm:w-16">
            <NuxtImg alt="" id="nuxt-img" src="/img/writer.png" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-12 sm:w-16">
            <NuxtImg alt="" id="nuxt-img" src="/img/writer.png" />
          </div>
        </div>
      </div>
    </span>
    <p class="flex items-center gap-4 my-2">
      <span class="pi pi-whatsapp"></span>{{ contacts.whatsapp }}
    </p>
    <p class="flex items-center gap-4 my-2">
      <span class="pi pi-envelope"></span>{{ contacts.mail }}
    </p>

    <!-- <button class="btn btn-primary bgg-primary-500 text-white mt-8" @click="toggle('open')">Talk to an Agent</button> -->
  </div>
</template>
