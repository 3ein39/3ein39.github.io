<template>
    <section id="projects" data-section="projects" class="scroll-mt-28 py-8 lg:py-12">
        <SectionReveal>
            <SectionHeading eyebrow="Work" title="Selected projects." :theme-styles="themeStyles" />

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article v-for="project in projects" :key="project.title"
                :class="[themeStyles.panel, 'flex h-full flex-col rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl']">
                <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.26em]">
                    {{ project.category }}
                </p>
                <h3 class="mt-2 text-2xl font-bold">{{ project.title }}</h3>
                <p :class="themeStyles.textMuted" class="mt-4 flex-1 text-base leading-7">{{ project.summary }}</p>

                <ul class="mt-5 flex flex-wrap gap-2">
                    <li v-for="item in project.stack" :key="item"
                        :class="[themeStyles.chip, 'rounded-full border px-3 py-1 text-xs font-medium']">
                        {{ item }}
                    </li>
                </ul>
            </article>
        </div>

            <p class="mt-8">
                <a :href="githubUrl" target="_blank" rel="noreferrer"
                    :class="[themeStyles.accentText, 'text-sm font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400']">
                    More projects on GitHub →
                </a>
            </p>
        </SectionReveal>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import SectionReveal from './SectionReveal.vue'

defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    projects: {
        type: Array,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
})
</script>
