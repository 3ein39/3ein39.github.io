<template>
    <button type="button" :class="buttonClass" :aria-label="ariaLabel" @click="$emit('toggle')">
        <span class="font-semibold">{{ currentLabel }}</span>
        <span :class="mutedClass" class="hidden text-xs sm:inline">{{ nextLabel }}</span>
    </button>
</template>

<script setup>
import { computed } from 'vue'
import { LOCALE_META, SUPPORTED_LOCALES } from '~/constants/locales'

const props = defineProps({
    locale: {
        type: String,
        required: true,
    },
    themeStyles: {
        type: Object,
        required: true,
    },
    ariaLabel: {
        type: String,
        default: 'Switch language',
    },
})

defineEmits(['toggle'])

const buttonClass = computed(() => [
    props.themeStyles.secondaryButton,
    'inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
])

const mutedClass = computed(() => props.themeStyles.textMuted)

const currentLabel = computed(() => LOCALE_META[props.locale]?.label ?? props.locale.toUpperCase())

const nextLabel = computed(() => {
    const currentIndex = SUPPORTED_LOCALES.indexOf(props.locale)
    const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
    return LOCALE_META[nextLocale]?.name ?? nextLocale
})
</script>
