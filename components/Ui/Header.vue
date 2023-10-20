<script setup>
const menu = [
    {
        name: 'WhatsApp',
        link: 'https://wa.me/',
        icon: ''
    },
    {
        name: 'FAQ',
        link: '/home',
    },
    {
        name: 'How it Works',
        link: '/',
    },
    {
        name: 'Samples',
        link: '/home',
    },
    {
        name: 'Contacts',
        link: '/home',
    }
]
</script>


<template>
    <div class="navbar bg-[#F5F6FC] custom sticky top-0 z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-base-100 rounded-box">
                    <li v-for="item, i in menu" :key="i + 'menu'">
                        <NuxtLink :to="item?.link">{{ item.name }}</NuxtLink>
                    </li>
                    <li>
                        <div><a class="btn btn-secondary btn-outline">Dashboard</a></div>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">Proswriters</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="item, i in menu" :key="i + 'menu'">
                    <NuxtLink :to="item?.link">{{ item.name }}</NuxtLink>
                </li>
                <!-- <li tabindex="0">
                    <details>
                        <summary>Parent</summary>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li> -->
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
.custom{
      box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.03);

}

.router-link-exact-active {
  @apply rounded-lg text-primary font-semibold hover:text-primary;
}

</style>