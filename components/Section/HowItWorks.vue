<script setup>
let active = ref(0)

let accordion_items = [
    {
        icon: 'pi pi-file-edit',
        header: 'Give Us Your paper instructions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'pi pi-users',
        header: 'Hire your ideal essay writer online',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
        icon: 'pi pi-wallet',
        header: 'Get your paper writing done',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }

]
</script>


<template>
    <div class="">
        <div class="container mx-auto py-16">
            <div class="section-header my-8 text-center max-w-lg mx-auto">

                <h2 class="text-2xl sm:text-4xl ">How to Order</h2>
                <p class="text-primary sm:text-2xl">How to Hire a Professional to "Do My Paper Online"? </p>
            </div>


            <div>
                <div class="flex flex-col sm:flex-row gap-4 px-4">
                    <div class="hidden sm:flex sm:w-2/4">
                        <img v-if="active === 0" src="/img/order.png" />
                        <img v-if="active === 1" src="/img/process.png" />
                        <img v-if="active === 2" src="/img/download.png" />
                    </div>
                    <div class="sm:w-2/4">
                        <PrimeAccordion class="accordion-custom" v-model:activeIndex="active">
                            <PrimeAccordionTab v-for="tab, i in accordion_items" :key="i">
                                <template #header>
                                    <!-- <i :class="tab.icon"></i> -->
                                    <div class="avatar " :class="active == i && 'animate-bounces'">
                                        <div class="bg-primary bg-opacity-50 p-2 rounded-xl ">
                                            <span class="text-4xl pt-1" :class="tab.icon"></span>
                                        </div>
                                    </div>
                                    <h5 class="ml-2">{{ tab.header }}</h5>
                                </template>
                                <p>
                                    {{ tab.content }}
                                </p>
                                <div class="block sm:hidden py-4">
                                    <img v-if="i == 0" src="/img/order.png" />
                                    <img v-if="i == 1" src="/img/process.png" />
                                    <img v-if="i == 2" src="/img/download.png" />
                                </div>
                            </PrimeAccordionTab>
                        </PrimeAccordion>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss">
.accordion-custom i span {
    vertical-align: middle;
    /* @apply bg-base-100; */
}

.p-icon.p-accordion-toggle-icon{
    float: right !important;
    display: hidden !important;
}

.p-accordion .p-accordion-header {
    &:not(.p-disabled).p-highlight .p-accordion-header-link {
        @apply rounded-lg ring-1 ring-slate-300 bg-slate-50;
    }

}




.accordion-custom span {
    margin: 0 0.5rem;
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>