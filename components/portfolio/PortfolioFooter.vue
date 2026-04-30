<template>
    <footer :class="[themeStyles.textMuted, themeStyles.footerBorder]" class="mt-8 border-t pt-6 text-sm">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>{{ leftText }}</p>
            <p>{{ rightText }}</p>
        </div>
    </footer>
</template>

<script setup>
defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    leftText: {
        type: String,
        required: true,
    },
    rightText: {
        type: String,
        required: true,
    },
})
</script>