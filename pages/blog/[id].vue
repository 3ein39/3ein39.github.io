<script setup>
const route = useRoute()

</script>

<template>
    <div>
        <h1>Blog Post</h1>
        <p>This is a blog post {{ route.params.id }}</p>
    </div>
</template>