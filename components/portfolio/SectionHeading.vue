<template>
    <div class="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
            <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.32em]">{{ eyebrow }}
            </p>
            <h2 class="mt-3 text-3xl font-black sm:text-4xl">{{ title }}</h2>
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