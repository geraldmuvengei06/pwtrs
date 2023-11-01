<script setup>
let { menu, services, order_url, home_url, goTo } = contentStore();
const runtimeConfig = useRuntimeConfig();

import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  BookOpenIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const callsToAction = [
  { name: "WhatsApp Chat", href: "/contact", icon: PhoneIcon },
];

const mobileMenuOpen = ref(false);

const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>
<template>
  <header
    class="drop-shadow bg-white sm:bg-gradient-to-br sm:from-[#F2F8FC]/80 sm:to-[#FEF6F4]/80 backdrop-blur sticky top-0 z-40">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">{{ runtimeConfig.public.websiteName }}</span>
          <UiLogo />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-4">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Services
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <!-- Services menu -->
                <div v-for="item in services" :key="item.link"
                  class="group relative flex items-center gap-x-6 rounded-lg py-1 text-sm leading-6 hover:bg-gray-50">
                  <!-- <div
                    class="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component :is="item.icon || BookOpenIcon" class="h-6 w-6 text-gray-600 group-hover:text-primary"
                      aria-hidden="true" />
                  </div> -->
                  <div class="flex-auto">
                    <NuxtLink :to="item.link" class="block font-semibold text-gray-900">
                      {{ item.title || item.item }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <NuxtLink v-for="(item, i) in menu" :key="i + 'menu'" :to="item?.link"
          class="text-sm font-semibold leading-6 text-gray-900">{{ item?.name }}</NuxtLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="flex gap-2">
          <button @click="goTo(`${order_url}`)" class="btn btn-primary">
            Order Now
          </button>
          <button @click="goTo(`${home_url}`)" class="btn btn-secondary btn-outline">
            Dashboard
          </button>
        </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">{{ runtimeConfig.public.websiteName }}</span>
            <UiLogo />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Services
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in services" :key="item.link"
                    class="block rounded-lg text-sm font-semibold leading-7 w-full text-left text-gray-900 hover:bg-gray-50">
                    <RouterLink
                      class="w-full block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-left text-gray-900 hover:bg-gray-50"
                      :to="item.link">{{ item.name || item.item }}</RouterLink>
                  </DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <NuxtLink v-for="(item, i) in menu" :key="i + 'menu'" :to="item?.link"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                {{ item?.name }}</NuxtLink>
            </div>
            <div class="py-6">
              <div class="flex gap-2">
                <button @click="goTo(`${order_url}`)" class="btn btn-primary">
                  Order Now
                </button>
                <button @click="goTo(`${home_url}`)" class="btn btn-secondary btn-outline">
                  Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style lang="scss">
.router-link-exact-active {
  @apply rounded-lg text-secondary font-semibold hover:text-secondary-focus;
}
</style>
