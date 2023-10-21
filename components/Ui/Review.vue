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
    <div class="card m-2  bg-slate-50 hover:shadow-md">
        <!-- <figure class="px-10 pt-10"> -->
        <!-- <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <NuxtImg alt=""  id="nuxt-img" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div> -->
        <!-- <div class="avatar placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">JO</span>
                </div>
            </div>  -->
        <!-- </figure> -->
        <div class="card-body py-4 ">
            <h4 class="card-title mb-0">John Doe</h4>


            <div class="divider py-0 my-0 border-slate-50">Essay</div>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <!-- <PrimeRating class="text-primary" v-model="_rating" readonly /> -->
                <div class="rating rating-sm">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-rating-item-active {
    @apply bg-primary;
}
</style>