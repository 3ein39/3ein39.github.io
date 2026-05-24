<template>
    <span class="group relative inline-flex">
        <button type="button" :class="buttonClass" :aria-label="ariaLabel" :aria-disabled="disabled"
            :disabled="disabled" @click="handleClick">
            <span class="font-semibold">{{ currentLabel }}</span>
            <span :class="mutedClass" class="hidden text-xs sm:inline">{{ nextLabel }}</span>
        </button>

        <span v-if="disabled" :class="tooltipClass" aria-hidden="true">
            {{ disabledLabel }}
        </span>
    </span>
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
    disabled: {
        type: Boolean,
        default: false,
    },
    disabledLabel: {
        type: String,
        default: 'Coming soon',
    },
    ariaLabel: {
        type: String,
        default: 'Switch language',
    },
})

const emit = defineEmits(['toggle'])

const handleClick = () => {
    if (props.disabled) {
        return
    }

    emit('toggle')
}

const buttonClass = computed(() => [
    props.themeStyles.secondaryButton,
    'inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60',
])

const mutedClass = computed(() => props.themeStyles.textMuted)

const tooltipClass = computed(() => [
    props.themeStyles.panelSoft,
    props.themeStyles.textMuted,
    'pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-within:opacity-100',
])

const currentLabel = computed(() => LOCALE_META[props.locale]?.label ?? props.locale.toUpperCase())

const nextLabel = computed(() => {
    const currentIndex = SUPPORTED_LOCALES.indexOf(props.locale)
    const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
    return LOCALE_META[nextLocale]?.name ?? nextLocale
})
</script>
