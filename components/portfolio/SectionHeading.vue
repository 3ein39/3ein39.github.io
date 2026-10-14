<template>
    <div class="mb-8 flex flex-col gap-3">
        <div>
            <h2 class="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">{{ title }}</h2>
        </div>
        <p v-if="description" :class="themeStyles.textMuted" class="max-w-2xl text-sm leading-7 sm:text-base">
            {{ description }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    eyebrow: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    themeStyles: {
        type: Object,
        required: true,
    },
})
</script>