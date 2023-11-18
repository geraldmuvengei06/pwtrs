<template>
  <div class="sticky top-28 ">
    <h4 class="uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider">
      Table of contents
    </h4>
    <nav class="bg-slate-100 p-4 rounded mt-4">
      <ul>
        <li @click="tableOfContentsHeadingClick(link)" :class="{
          'pl-4': link.depth == 2,
        }" class="toc-list" v-for="link in toc?.links" :key="link.id">
          <a :class="{
            'text-primary hover:text-primary underline': link.id === currentlyActiveToc,
            'text-black hover:gray-900': link.id !== currentlyActiveToc,
          }" role="button" class="transition-colors duration-75 text-base mb-2 block"
            v-if="[2, 3].includes(link.depth)" :href="`#${link.id}`">{{ link.text }}</a>
          <span v-else>{{ link.text }}</span>

          <ul v-if="link.children && link.children.length > 0">
            <li class="ml-3" v-for="childLink in link.children" :key="childLink.id"
              @click="tableOfContentsSubHeadingClick(childLink)">
              <a :class="{
                'text-primary hover:text-primary underline': childLink.id === currentlyActiveSubToc,
                'text-black hover:gray-900': childLink.id !== currentlyActiveSubToc,
              }" role="button" class="transition-colors duration-75 text-base mb-2 block" :href="`#${childLink.id}`">{{
  childLink.text }}</a>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentlyActiveToc: "",
      currentlyActiveSubToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    };
  },
  props: {
    toc: {}
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    },
    tableOfContentsSubHeadingClick(link) {
      this.currentlyActiveSubToc = link.id;
    },
  }
};
</script>

<style>
.nuxt-content h2 {
  @apply text-gray-900;
}
</style>