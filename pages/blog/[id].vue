<script setup>
const route = useRoute()
useHead({
    title: `Blog Post ${route.params.id}`
})
</script>

<template>
    <div>
        <h1>Blog Post</h1>
        <p>This is a blog post {{ route.params.id }}</p>
    </div>
</template>