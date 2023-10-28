<script setup lang="ts">
let { order_url, goTo } = contentStore();

interface Props {
  type?: string;
}

let props = withDefaults(defineProps<Props>(), {
  type: "horizontal",
});

const description = ref("");

function submitDescription() {
  const query = {
    description: description.value,
  };
  sessionStorage.setItem("_ds", description.value);
  goTo(`${order_url}`, {}, query);
}

onMounted(() => {
  let desc = sessionStorage.getItem("_ds");
  if (desc && desc !== "null") {
    description.value = desc;
  }
});
</script>

<template>
  <div
    class="card bg-white sm:bg-gradient-to-tr sm:from-[#F2F8FC] sm:to-[#FEF6F4] shadow-lg flat"
  >
    <form
      @submit.prevent="submitDescription"
      class="card-body p-4 flex"
      :class="type == 'verticle' ? 'flex-column' : 'flex-column md:flex-row'"
    >
      <div class="form-control">
        <textarea
          v-model="description"
          required="true"
          class="textarea textarea-bordered textarea-primary h-36 bg-transparent"
          placeholder="Briefly describe your requirements."
        ></textarea>
      </div>

      <button
        type="submit"
        class="btn btn-primary my-2"
        :class="type == 'verticle' ? '' : 'sm:mt-9'"
      >
        Order Now<span class="animate-pulse text-2xl">🔥</span>
      </button>

      <UiRatingsTotal classnames="justify-start" />
    </form>
  </div>
</template>
