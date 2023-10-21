<template>
    <header class="navbar-header">
        <nav class="nav-box">
            <div>
                <a href="#" class="min-w-full">
                    <UiLogo />
                </a>
            </div>

            <div id="burger" :class="`${isMenuOpen && 'active'} md:hidden`" @click.prevent="toggleMenu()">
                <slot>
                    <button type="button" class="burger-button" title="Menu">
                        <span class="burger-bar burger-bar--1"></span>
                        <span class="burger-bar burger-bar--2"></span>
                        <span class="burger-bar burger-bar--3"></span>
                    </button>
                </slot>
            </div>

            <div :class="`${!isMenuOpen && `hidden md:visible lg:visible`} w-full md:flex md:items-center md:w-auto`"
                id="menu">
                <ul class="nav-body">
                    <li>
                        <a class="nav-item" href="#">Home</a>
                    </li>
                    <li>
                        <a class="nav-item" href="#">Program</a>
                    </li>
                    <li>
                        <a class="nav-item" href="#">Pricing</a>
                    </li>
                    <li>
                        <a class="nav-item" href="#">Testimonial</a>
                    </li>
                    <li>
                        <a class="nav-button">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
button {
    cursor: pointer;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar {
    background-color: #949494;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
}

.burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
}

.burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
}

.burger-bar--3 {
    transform: translateY(6px);
}

#burger.active .burger-button {
    transform: rotate(-180deg);
}

#burger.active .burger-bar {
    background-color: #fff;
}

#burger.active .burger-bar--1 {
    transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
    opacity: 0;
}

#burger.active .burger-bar--3 {
    transform: rotate(-45deg)
}</style>