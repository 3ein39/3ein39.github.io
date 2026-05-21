<template>
    <section id="top" data-section="top" class="py-6 lg:py-12">
        <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
            class="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
            <div class="max-w-3xl">
                <p
                    :class="[themeStyles.accentBorder, 'mb-5 inline-flex items-center gap-2 rounded-full border bg-cyan-400/10 px-4 py-2 text-sm font-medium']">
                    <span :class="themeStyles.accentBg" class="h-2 w-2 rounded-full" />
                    {{ hero.availability }}
                </p>

                <h1 class="text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    {{ profile.name }}
                </h1>
                <p :class="themeStyles.accentText" class="mt-3 text-xl font-semibold sm:text-2xl">
                    {{ hero.role }}
                </p>

                <p :class="themeStyles.textMuted" class="mt-6 max-w-2xl text-lg leading-8">
                    {{ hero.bio }}
                </p>

                <ul class="mt-6 flex flex-wrap gap-2">
                    <li v-for="skill in skills" :key="skill"
                        :class="[themeStyles.chip, 'rounded-full border px-3 py-1 text-xs font-medium']">
                        {{ skill }}
                    </li>
                </ul>

                <div class="mt-8 flex flex-wrap gap-3">
                    <a href="#projects"
                        :class="[themeStyles.primaryButton, 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        @click="onAnchorClick($event, '#projects')">
                        {{ hero.ctaWork }}
                    </a>
                    <a href="#contact"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        @click="onAnchorClick($event, '#contact')">
                        {{ hero.ctaContact }}
                    </a>
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        {{ ui.linkedin }}
                    </a>
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        {{ ui.github }}
                    </a>
                </div>
            </div>

            <ProfileInitials :initials="profile.initials" :label="profile.name" size="lg"
                :theme-styles="themeStyles" class="mx-auto shadow-xl lg:mx-0" />
        </div>
    </section>
</template>

<script setup>
import ProfileInitials from './ProfileInitials.vue'

defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    profile: {
        type: Object,
        required: true,
    },
    hero: {
        type: Object,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
    ui: {
        type: Object,
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

const { onAnchorClick } = useSmoothScroll()
</script>
