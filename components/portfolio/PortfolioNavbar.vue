<template>
    <header class="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
        <div
            :class="[themeStyles.panel, 'mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-3xl border px-4 py-4 shadow-2xl backdrop-blur-xl sm:px-6']">
            <a href="#top"
                class="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                @click="onAnchorClick($event, '#top')">
                <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border"
                    :class="[themeStyles.brandMark, 'flex items-center justify-center']">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQFqPp_1DAWlPQ/profile-displayphoto-scale_200_200/B56Zs9zDzEJUAc-/0/1766268355199?e=1779321600&v=beta&t=0Yr6u67rlrihiC8Mn1t6NbWv-Gt1Ztj6D4-iWoXxPUo"
                        alt="Hussein Hany profile" class="h-full w-full object-cover transition-opacity duration-300"
                        :class="[imageLoadedNav ? 'opacity-100' : 'opacity-0']" @load="imageLoadedNav = true"
                        @error="imageLoadedNav = false" />
                    <span v-if="!imageLoadedNav"
                        class="absolute inset-0 flex items-center justify-center text-sm font-black tracking-[0.25em]">
                        HH
                    </span>
                </div>
                <span>
                    <span :class="themeStyles.accentText"
                        class="block text-sm font-semibold tracking-[0.24em] uppercase">Hussein Hany</span>
                    <span :class="themeStyles.textMuted" class="block text-sm">Frontend Developer · Vue/Nuxt ·
                        MEVN</span>
                </span>
            </a>

            <nav class="flex flex-1 flex-wrap items-center justify-center gap-2 text-sm sm:gap-3 md:justify-end">
                <a v-for="item in navItems" :key="item.sectionId" :href="item.href" :class="[
                    isActive(item.sectionId)
                        ? themeStyles.navLinkActive
                        : themeStyles.navLink,
                    'rounded-full px-4 py-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                ]" @click="onAnchorClick($event, item.href)">
                    {{ item.label }}
                </a>
            </nav>

            <div class="flex items-center gap-3">
                <a :href="resumeUrl" target="_blank" rel="noreferrer"
                    :class="[themeStyles.secondaryButton, 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                    <span class="hidden sm:inline">Download CV</span>
                    <span class="sm:hidden">CV</span>
                </a>

                <ThemeToggle :model-value="!isDark" @update:model-value="$emit('toggle-theme')" />
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    navItems: {
        type: Array,
        required: true,
    },
    activeSection: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    isDark: {
        type: Boolean,
        required: true,
    },
})

defineEmits(['toggle-theme'])

const { onAnchorClick } = useSmoothScroll()

const imageLoadedNav = ref(false)
const isActive = (sectionId) => sectionId === props.activeSection
</script>