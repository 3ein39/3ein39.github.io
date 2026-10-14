<template>
    <section id="top" data-section="top" class="border-b border-[#176b4d]/30 py-8 lg:py-14">
        <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
            class="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div class="flex max-w-3xl flex-col justify-between">
                <p
                    :class="[themeStyles.accentText, 'mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]']">
                    <span :class="themeStyles.accentBg" class="h-2 w-8" />
                    {{ hero.availability }}
                </p>

                <h1 class="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-balance sm:text-6xl lg:text-8xl">
                    {{ profile.name }}
                </h1>
                <p :class="themeStyles.accentText" class="mt-5 text-xl font-bold sm:text-2xl">
                    {{ hero.role }}
                </p>

                <p :class="themeStyles.textMuted" class="mt-6 max-w-xl text-base leading-8 sm:text-lg">
                    {{ hero.bio }}
                </p>

                <ul class="mt-8 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 border-y border-[#176b4d]/25 py-4">
                    <li v-for="skill in skills" :key="skill"
                        :class="[themeStyles.accentText, 'text-xs font-bold uppercase tracking-[0.12em]']">
                        {{ skill }}
                    </li>
                </ul>

                <div class="mt-8 flex flex-wrap gap-3">
                    <a href="#projects"
                        :class="[themeStyles.primaryButton, 'inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b4d] focus-visible:ring-offset-2']"
                        @click="onAnchorClick($event, '#projects')">
                        {{ hero.ctaWork }}
                    </a>
                    <a href="#contact"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b4d] focus-visible:ring-offset-2']"
                        @click="onAnchorClick($event, '#contact')">
                        {{ hero.ctaContact }}
                    </a>
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b4d] focus-visible:ring-offset-2']">
                        {{ ui.linkedin }}
                    </a>
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b4d] focus-visible:ring-offset-2']">
                        {{ ui.github }}
                    </a>
                </div>
            </div>

            <div class="relative flex min-h-64 items-end justify-end border-l border-[#176b4d]/30 pl-6 lg:min-h-full">
                <div :class="themeStyles.accentBg" class="absolute left-0 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2" />
                <ProfileInitials :image-url="profile.photoUrl" :initials="profile.initials" :label="profile.name" size="lg"
                    :theme-styles="themeStyles" class="relative shadow-[12px_12px_0_#176b4d]" />
            </div>
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
