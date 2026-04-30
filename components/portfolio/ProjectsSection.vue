<template>
    <section id="projects" data-section="projects" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="Projects" title="Featured work and case studies."
            description="These examples show product thinking, full-stack delivery, and the ability to work through real constraints like trust, structure, and usability."
            :theme-styles="themeStyles" />

        <div class="mb-6 flex flex-wrap gap-3">
            <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                View LinkedIn Profile
            </a>
            <a :href="githubUrl" target="_blank" rel="noreferrer"
                :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                View GitHub Projects
            </a>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
            <article v-for="project in projects" :key="project.title"
                :class="[themeStyles.panel, 'flex h-full flex-col rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl']">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.26em]">{{
                            project.category }}</p>
                        <h3 class="mt-3 text-2xl font-bold">{{ project.title }}</h3>
                    </div>
                    <span :class="themeStyles.pill"
                        class="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
                        {{ project.year }}
                    </span>
                </div>

                <p :class="themeStyles.textMuted" class="mt-5 text-base leading-7">{{ project.summary }}</p>

                <ul class="mt-5 flex flex-wrap gap-2">
                    <li v-for="item in project.stack" :key="item"
                        :class="[themeStyles.chip, 'rounded-full border px-3 py-1 text-xs font-medium']">
                        {{ item }}
                    </li>
                </ul>

                <details :class="[themeStyles.card, 'mt-6 rounded-2xl border p-4']">
                    <summary :class="themeStyles.accentText"
                        class="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.24em]">
                        Case study details
                    </summary>
                    <div class="mt-4 space-y-4">
                        <div>
                            <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.2em]">
                                Challenge</p>
                            <p :class="themeStyles.textMuted" class="mt-2 text-sm leading-6">{{ project.challenge }}</p>
                        </div>
                        <div>
                            <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.2em]">
                                Solution</p>
                            <p :class="themeStyles.textMuted" class="mt-2 text-sm leading-6">{{ project.solution }}</p>
                        </div>
                        <div>
                            <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.2em]">
                                Outcome</p>
                            <p :class="themeStyles.textMuted" class="mt-2 text-sm leading-6">{{ project.outcome }}</p>
                        </div>
                    </div>
                </details>

                <div class="mt-6 flex flex-wrap gap-3">
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        GitHub
                    </a>
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        LinkedIn
                    </a>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'

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
    linkedinUrl: {
        type: String,
        required: true,
    },
})
</script>