<script setup>
let { menu, services } = contentStore()
</script>


<template>
    <UiMobileHeader class="flex md:hidden " />
    <div
        class="hidden md:flex navbar custom-nav bg-gradient-to-br from-[#F2F8FC]/80 to-[#FEF6F4]/80 border-b-2 backdrop-blur sticky top-0 z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-[#F5F6FC] text-neutral rounded-box">
                    <li v-for="item, i in menu" :key="i + 'menu'">
                        <NuxtLink :to="item?.link">{{ item.name }}</NuxtLink>
                    </li>
                    <li>
                        <div><a class="btn btn-secondary btn-outline">Dashboard</a></div>
                    </li>
                </ul>
            </div>

            <UiLogo />
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="item, i in menu" :key="i + 'menu'">
                    <NuxtLink :to="item?.link" v-if="!item.items"><span v-if="item.icon" :class="item.icon"></span> {{
                        item.name }}</NuxtLink>


                    <details v-else class="dropdown">
                        <summary tabindex="0">{{ item.name }}</summary>
                        <ul tabindex="0" class="p-2 w-80 overflow-y-scroll shadow">
                            <!-- <li v-for="service, i in item.items" :key="i + 's'" >
                                <NuxtLink :to="service.link">{{ service.item }}</NuxtLink>
                            </li>
                            <li v-if="services.length > 5"><span>...</span></li> -->
                            <ContentList path="/services" v-slot="{ list }">
                                <NuxtLink v-for="service in list" :key="service?._path" :to="service?._path" class="flex flex-col my-1">
                                    {{ service?.title }}
                                </NuxtLink>
                            </ContentList>
                        </ul>
                    </details>
                </li>

            </ul>
        </div>
        <div class="navbar-end flex gap-2">
            <a class="btn btn-primary">Order Now</a>
            <a class="btn btn-secondary btn-outline hidden sm:flex">Dashboard</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropdown-content {
    // min-width: calc(100% - 20px) !important;
    width: 96vw !important;
}

.custom {
    box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.03);

}

.router-link-exact-active {
    @apply rounded-lg text-primary font-semibold hover:text-primary;
}
</style>