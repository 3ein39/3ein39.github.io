<script setup>
useHead({
    title: 'Projects',
})

const { error, pending, data } = await useFetch('https://api.github.com/users/3ein39/repos')


const repos = computed(() => {
    console.log(data.value)
    return data.value
        .filter(repo => repo.description)
        .sort((a, b) => b.description.length - a.description.length)
}
)
</script>

<template>
    <div>
      <p class="mb-10">Take a look at my GitHub projects!</p>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <ul class="grid grid-cols-2 gap-4">
                <li v-for="repo in repos" :key="repo.id"
                    class="border border-gray-200 rounded-sm p-4 hover:bg-gray-200 hover:cursor-pointer font-mono">
                    <a :href="repo.html_url" target="_blank">
                        <div class="flex items-start justify-between text-sm">
                            <div>
                                <p class="font-bold">{{ repo.name }}</p>
                                <p class="text-gray-600">{{ repo.description }}</p>
                                <div class="mt-2">
                                    <span
                                        class="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
                                        v-if="repo.language">{{ repo.language }}</span>
                                    <span v-for="topic in repo.topics" :key="topic"
                                        class="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide ml-2">{{
                                            topic }}</span>
                                </div>
                            </div>
                        </div>
                    </a>

                </li>
            </ul>

        </div>
    </div>
</template>