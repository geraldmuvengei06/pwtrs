<script setup lang="ts">

interface Props {
    icon?: string;
    title?: string;
    description?: string;
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'pi pi-verified',
    title: '',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam iusto repudiandae, nemo dolores sed adipisci magnam?',
})

</script>


<template>
    <div class="card glass hover:shadow-md">
        <div class="card-body p-4">
            <div class="avatar">
                <div class="bg-primary bg-opacity-50 p-2 rounded-xl ">
                    <span class="text-4xl" :class="icon"></span>
                </div>
            </div>
            <h2 class="card-title">{{ title }}</h2>
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>