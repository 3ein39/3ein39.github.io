<script setup>
useHead({
    title: 'Projects',
})

const { error, pending, data } = useFetch('https://api.github.com/users/3ein39/repos')
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
</script>
<template>
    <div>
        <h1>Projects</h1>
        <!-- {{ data }} -->
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <ul>
                <li v-for="repo in data" :key="repo.id" class="p-6">
                    <div class="flex items-start justify-between">
                        <div>
                            <a :href="repo.html_url" target="_blank" class="font-bold">{{ repo.name }}</a>
                            <p class="text-gray-600">{{ repo.description }}</p>
                            <span class="text-sm text-gray-500">{{ repo.language }}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-xs text-gray-500">Owner: {{ repo.owner.login }}</p>
                            <p class="text-xs text-gray-500">Created: {{ formatDate(repo.created_at) }}</p>
                            <p class="text-xs text-gray-500">Last Updated: {{ formatDate(repo.updated_at) }}</p>
                            <p class="text-xs text-gray-500">Forks: {{ repo.forks_count }}</p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>