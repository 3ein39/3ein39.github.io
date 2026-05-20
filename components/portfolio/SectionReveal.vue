<template>
    <div v-motion :initial="motionInitial" :visibleOnce="motionVisible">
        <slot />
    </div>
</template>

<script setup>
const motionInitial = { opacity: 0, y: 28 }
const motionVisible = {
    opacity: 1,
    y: 0,
    transition: { duration: 550, ease: 'easeOut' },
}
</script>
