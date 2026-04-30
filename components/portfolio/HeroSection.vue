<template>
    <section id="top" data-section="top"
        class="grid items-center gap-10 py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-10">
        <div class="max-w-3xl">
            <p
                :class="[themeStyles.accentBorder, 'mb-5 inline-flex items-center gap-2 rounded-full border bg-cyan-400/10 px-4 py-2 text-sm font-medium']">
                <span :class="themeStyles.accentBg" class="h-2 w-2 rounded-full" />
                Available for frontend and full-stack collaborations
            </p>

            <h1 class="max-w-3xl text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-7xl">
                Hi, I’m Hussein Hany, a frontend developer building fast, accessible web apps.
            </h1>

            <p :class="themeStyles.textMuted" class="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
                I design and ship Vue.js and Nuxt experiences with a MEVN mindset, strong problem-solving habits, and a
                focus on clean interaction design. I enjoy turning complex requirements into calm, usable interfaces.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
                <a href="#projects"
                    :class="[themeStyles.primaryButton, 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                    View Projects
                </a>
                <a href="#contact"
                    :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                    Contact Me
                </a>
                <a :href="resumeUrl" target="_blank" rel="noreferrer"
                    :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                    Download CV
                </a>
            </div>

            <dl class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div v-for="highlight in highlights" :key="highlight.label"
                    :class="[themeStyles.panelSoft, 'rounded-2xl border p-4 backdrop-blur']">
                    <dt :class="themeStyles.accentText" class="text-sm uppercase tracking-[0.22em]">{{ highlight.label
                        }}</dt>
                    <dd class="mt-2 text-xl font-bold">{{ highlight.value }}</dd>
                </div>
            </dl>
        </div>

        <aside
            :class="[themeStyles.panel, 'relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl']">
            <div :class="themeStyles.heroGlow" class="absolute inset-0" />
            <div class="relative space-y-6">
                <div class="flex items-center gap-4">
                    <div :class="themeStyles.avatar"
                        class="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-2xl font-black tracking-[0.3em]">
                        HH
                    </div>
                    <div>
                        <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.28em]">
                            Profile Snapshot</p>
                        <p class="mt-2 text-lg font-semibold">Frontend, product thinking, and problem solving</p>
                    </div>
                </div>

                <div :class="[themeStyles.card, 'rounded-2xl border p-4']">
                    <p :class="themeStyles.textMuted" class="text-sm leading-7">
                        Computer Science graduate from Fayoum University, current Vue/Nuxt developer, ICPC ECPC
                        finalist, and mentor to 100+ students in algorithms and competitive programming.
                    </p>
                </div>

                <div class="grid gap-3 sm:grid-cols-2">
                    <div :class="[themeStyles.card, 'rounded-2xl border p-4']">
                        <p :class="themeStyles.accentText" class="text-sm uppercase tracking-[0.24em]">Core stack</p>
                        <p class="mt-2 font-semibold">Vue.js, Nuxt, TailwindCSS, TypeScript</p>
                    </div>
                    <div :class="[themeStyles.card, 'rounded-2xl border p-4']">
                        <p :class="themeStyles.accentText" class="text-sm uppercase tracking-[0.24em]">Full stack</p>
                        <p class="mt-2 font-semibold">Node.js, NestJS, MongoDB, PostgreSQL</p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-3 pt-1">
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        aria-label="Open Hussein Hany on LinkedIn">
                        LinkedIn
                    </a>
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        aria-label="Open Hussein Hany on GitHub">
                        GitHub
                    </a>
                </div>
            </div>
        </aside>
    </section>
</template>

<script setup>
defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    highlights: {
        type: Array,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    linkedinUrl: {
        type: String,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
})
</script>