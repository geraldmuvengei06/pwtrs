<script setup lang="ts">
interface Props {
    type?: string;
}


let props = withDefaults(defineProps<Props>(), {
    type: 'horizontal'
})
</script>

<template>
    <div class="card bg-gradient-to-tr from-[#F2F8FC] to-[#FEF6F4] shadow-lg flat">
        <div class="card-body p-4 flex" :class="type == 'verticle' ? 'flex-column' : 'flex-column md:flex-row'">

            <div class="form-control">

                <textarea class="textarea textarea-bordered textarea-primary h-36"
                    placeholder="Briefly describe your requirements."></textarea>
            </div>

            <button class=" btn btn-primary" :class="type == 'verticle' ? '' : 'sm:mt-9'">Find An Expert <span
                    class="animate-pulse">🔥</span></button>

        </div>
    </div>
</template>