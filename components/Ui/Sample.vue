<script setup lang="ts">

interface Props {
    img?: string;
    name?: string,
    rating?: number;
    description?: string
}
let props = withDefaults(defineProps<Props>(), {
    img: '',
    name: '',
    rating: 4,
    description: ''
})

let _rating = toRef(props?.rating)

</script>


<template>
    <div class="card m-2  max-w-xs bg-slate-50 hover:shadow-md">
        <div class="card-body py-4 ">
            <h4 class="text-lg sm:text-xl flex sm:flex-row gap-1">
                <span class="pi pi-file text-3xl sm:text-5xl"></span>
                <span>The Importance and Impacts of Narratives in o</span>
            </h4>
            <span><b>Editing</b> - <small>2 pages</small></span>
            


            <div class="divider py-0 my-0 border-slate-50"></div>

            <div class="card-actions justify-between">
                    <button class="btn btn-primary">View</button>
                    <button class="btn btn-primary btn-outline">Order Now</button>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-rating-item-active {
    @apply bg-primary;
}
</style>