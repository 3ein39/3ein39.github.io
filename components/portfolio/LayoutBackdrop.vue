<template>
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div class="absolute right-0 top-36 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl animate-float-delayed" />
        <div class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl animate-float-slower" />
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