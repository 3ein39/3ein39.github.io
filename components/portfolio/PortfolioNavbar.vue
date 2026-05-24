<template>
    <header class="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
        <div
            :class="[themeStyles.panel, 'mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 rounded-3xl border px-4 py-4 shadow-2xl backdrop-blur-xl sm:px-6']">
            <a href="#top"
                :class="[isRtl ? 'text-right' : 'text-left', 'group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                @click="onAnchorClick($event, '#top')">

                <span>
                    <span :class="themeStyles.accentText"
                        class="block text-sm font-semibold tracking-[0.24em] uppercase">{{ portfolio.profile.name
                        }}</span>
                    <span :class="themeStyles.textMuted" class="block text-sm">{{ portfolio.profile.navSubtitle
                        }}</span>
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
                <LanguageToggle :aria-label="portfolio.ui.switchLanguage" :disabled="true" :locale="locale"
                    :theme-styles="themeStyles" @toggle="$emit('toggle-locale')" />

                <a :href="resumeUrl" target="_blank" rel="noreferrer"
                    :class="[themeStyles.secondaryButton, 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                    <span class="hidden sm:inline">{{ portfolio.ui.downloadCv }}</span>
                    <span class="sm:hidden">{{ portfolio.ui.cvShort }}</span>
                </a>

                <ThemeToggle :model-value="!isDark" @update:model-value="$emit('toggle-theme')" />
            </div>
        </div>
    </header>
</template>

<script setup>
import LanguageToggle from './LanguageToggle.vue'
import ThemeToggle from './ThemeToggle.vue'

const props = defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    portfolio: {
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
    locale: {
        type: String,
        required: true,
    },
    isRtl: {
        type: Boolean,
        default: false,
    },
})

defineEmits(['toggle-theme', 'toggle-locale'])

const { onAnchorClick } = useSmoothScroll()

const isActive = (sectionId) => sectionId === props.activeSection
</script>
