<template>
    <div :class="[markClass, sizeClass, 'flex shrink-0 items-center justify-center overflow-hidden border font-black tracking-[0.25em]']"
        :aria-label="label">
        <img v-if="imageUrl" :alt="label || displayInitials" :src="imageUrl" class="h-full w-full object-cover"
            loading="eager">
        <span v-else>{{ displayInitials }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    initials: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '',
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
        return 'h-64 w-48 text-2xl tracking-[0.3em] lg:h-[28rem] lg:w-80'
    }

    if (props.size === 'sm') {
        return 'h-16 w-16 text-sm'
    }

    return 'h-11 w-11 text-sm'
})
</script>
