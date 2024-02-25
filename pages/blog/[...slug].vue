<script setup>
const route = useRoute()
useHead({
    title: `Blog Post ${route.params.slug}`
})
</script>

<template>
    <article>
        <ContentDoc />
    </article>
</template>