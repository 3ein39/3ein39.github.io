<template>
    <section id="projects" data-section="projects" class="scroll-mt-28 py-8 lg:py-12">
        <SectionReveal>
            <SectionHeading :description="section.description" :eyebrow="section.eyebrow" :title="section.title"
                :theme-styles="themeStyles" />

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <a v-for="project in projects" :key="project.title" :href="project.githubUrl" target="_blank"
                    rel="noreferrer" :aria-label="`${project.title} — ${section.clickHint}`"
                    :class="[themeStyles.panel, cardClass]">
                    <p :class="themeStyles.accentText"
                        class="text-sm font-semibold uppercase tracking-[0.2em] text-pretty">
                        {{ project.category }}
                    </p>
                    <h3 class="mt-2 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-300">
                        {{ project.title }}
                    </h3>
                    <p :class="themeStyles.textMuted" class="mt-4 flex-1 text-base leading-7">{{ project.summary }}</p>

                    <ul class="mt-5 flex flex-wrap gap-2">
                        <li v-for="item in project.stack" :key="item"
                            :class="[themeStyles.chip, 'rounded-full border px-3 py-1 text-xs font-medium']">
                            {{ item }}
                        </li>
                    </ul>

                    <div
                        :class="[themeStyles.card, actionBarClass]">
                        <span :class="themeStyles.textMuted" class="text-xs leading-5 sm:text-sm">
                            {{ section.clickHint }}
                        </span>
                        <span :class="themeStyles.accentText" class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold">
                            <span>{{ section.viewOnGithub }}</span>
                            <span aria-hidden="true" class="inline-block transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5">→</span>
                        </span>
                    </div>
                </a>
            </div>

            <p class="mt-8">
                <a :href="section.githubProjectsUrl" target="_blank" rel="noreferrer"
                    :class="[themeStyles.accentText, 'text-sm font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400']">
                    {{ section.githubLink }}
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
    section: {
        type: Object,
        required: true,
    },
    projects: {
        type: Array,
        required: true,
    },
})

const cardClass = [
    'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl',
    'cursor-pointer transition-all duration-300 ease-out',
    'hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_-12px_rgba(34,211,238,0.25)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
    'active:translate-y-0 active:scale-[0.99]',
]

const actionBarClass = [
    'mt-6 flex items-center justify-between gap-3 rounded-2xl border px-4 py-3',
    'translate-y-3 opacity-0 transition-all duration-300 ease-out',
    'group-hover:translate-y-0 group-hover:opacity-100',
    'group-focus-visible:translate-y-0 group-focus-visible:opacity-100',
]
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
    a {
        transition: none !important;
    }

    a:hover {
        transform: none !important;
    }

    .mt-6 {
        opacity: 1 !important;
        transform: none !important;
    }
}
</style>
