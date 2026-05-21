<template>
    <div :class="[markClass, sizeClass, 'flex shrink-0 items-center justify-center rounded-2xl border font-black tracking-[0.25em]']"
        :aria-label="label">
        {{ displayInitials }}
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    initials: {
        type: String,
        required: true,
    },
    themeStyles: {
        type: Object,
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'md',
    },
})

const displayInitials = computed(() => props.initials?.trim() || 'HH')

const markClass = computed(() => (props.size === 'lg' ? props.themeStyles.avatar : props.themeStyles.brandMark))

const sizeClass = computed(() => {
    if (props.size === 'lg') {
        return 'h-36 w-36 rounded-3xl text-2xl tracking-[0.3em] lg:h-44 lg:w-44'
    }

    if (props.size === 'sm') {
        return 'h-16 w-16 text-sm rounded-2xl'
    }

    return 'h-11 w-11 text-sm'
})
</script>
