<template>
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
        <div :class="overlayClass" class="absolute inset-0" />
    </div>
</template>

<script setup>
defineProps({
    overlayClass: {
        type: String,
        required: true,
    },
})
</script>