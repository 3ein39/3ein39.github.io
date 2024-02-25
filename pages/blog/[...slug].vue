<script setup>
const route = useRoute()
useHead({
    title: `Blog Post ${route.params.slug}`
})
</script>

<template>
    <article class="prose prose-pre:bg-white prose-pre:text-gray-700">
        <ContentDoc />
    </article>
</template>