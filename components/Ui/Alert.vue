
<template>
    <div class="card">
        <PrimeMessage style="border: none">
            <template #container>
                <div
                    class="flex flex-col lg:align-items-start md:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                    <div class="flex flex-row align-items-start">
                        <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                        <div class="mr-3 flex  lg:align-items-start flex-col lg:flex-row">
                            <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
                            <p class="m-0 p-0 text-neutral line-height-3">Bibendum enim facilisis gravida neque convallis a
                                cras semper.</p>
                        </div>
                    </div>
                    <a href v-ripple
                        class="ml-9 sm:ml-auto no-underline text-secondary font-medium mt-3 lg:mt-0 cursor-pointer p-ripple">
                        <span>Learn More</span>
                    </a>
                </div>
            </template>
        </PrimeMessage>
    </div>
</template>

<style lang="scss" scoped>
.p-message{
    margin: 0 ;
    @apply ring-1 ring-slate-300
}
</style>