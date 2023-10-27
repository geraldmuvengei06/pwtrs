<script setup lang="ts">
interface Props {
    type?: string;
}


let props = withDefaults(defineProps<Props>(), {
    type: 'horizontal'
})
</script>

<template>
    <div class="card shadow hover:shadow-lg sm:max-w-6xl mx-auto bg-white">
        <div class="card-body p-4 flex" :class="type == 'verticle' ? 'flex-column' : 'flex-column md:flex-row'">
            <div class="card-title" v-if="type == 'verticle'">
                <h4 class="text-2xl sm:text-4xl ">Calculate the Price</h4>
            </div>
            <!-- <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Type of paper</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div> -->
            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Academic Level</span>
                </label>
                <select class="select select-bordered select-sm">
                    <option disabled selected>Pick one</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>
            </div>

            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Urgency</span>
                </label>
                <select class="select select-bordered select-sm">
                    <option disabled selected>Pick one</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>

            </div>

            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Pages/Words</span>
                </label>
                <select class="select select-bordered select-sm">
                    <option disabled selected>Pick one</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>

            </div>
            <div v-if="type == 'verticle'"
                class="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-200 rounded-lg">
                <!-- <strong>Your Price</strong> -->
                <span class="text-2xl">
                    <strike class="font-bold text-slate-400">$60.00</strike>
                    <string class="font-bold mx-2">$30.00</string>
                </span>
            </div>
            <NuxtLink to="/orders/ordernow" class=" btn btn-primary" :class="type == 'verticle' ? '' : 'sm:mt-5'">Order Now
            </NuxtLink>

        </div>
    </div>
</template>