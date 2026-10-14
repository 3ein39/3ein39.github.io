<template>
    <main :class="themeStyles.page"
        class="relative min-h-[100dvh] overflow-hidden antialiased transition-colors duration-300">
        <LayoutBackdrop :overlay-class="themeStyles.backgroundOverlay" />

        <div v-if="pending && !portfolio"
            class="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center justify-center px-4">
            <p :class="themeStyles.textMuted" class="text-sm">Loading…</p>
        </div>

        <div v-else-if="portfolio"
            class="relative mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-10">
            <PortfolioNavbar :active-section="activeSection" :is-dark="isDark" :is-rtl="isRtl" :locale="locale"
                :nav-items="portfolio.nav" :portfolio="portfolio" :resume-url="portfolio.links.resume"
                :theme-styles="themeStyles" @toggle-locale="toggleLocale" @toggle-theme="toggleTheme" />

            <HeroSection :github-url="portfolio.links.github" :hero="portfolio.hero"
                :linkedin-url="portfolio.links.linkedin" :profile="portfolio.profile" :skills="portfolio.skills"
                :theme-styles="themeStyles" :ui="portfolio.ui" />

            <ProjectsSection :projects="portfolio.projects" :section="portfolio.sections.work"
                :theme-styles="themeStyles" />

            <TestimonialsSection :recommendation="portfolio.recommendation"
                :section="portfolio.sections.recommendations" :theme-styles="themeStyles" />

            <ContactSection :email-address="portfolio.links.email" :resume-url="portfolio.links.resume"
                :section="portfolio.sections.contact" :theme-styles="themeStyles" />

            <PortfolioFooter :left-text="portfolio.footer.left" :right-text="footerRightText"
                :theme-styles="themeStyles" />
        </div>
    </main>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { LOCALE_STORAGE_KEY, SUPPORTED_LOCALES } from '~/constants/locales'
import ContactSection from '~/components/portfolio/ContactSection.vue'
import HeroSection from '~/components/portfolio/HeroSection.vue'
import LayoutBackdrop from '~/components/portfolio/LayoutBackdrop.vue'
import PortfolioFooter from '~/components/portfolio/PortfolioFooter.vue'
import PortfolioNavbar from '~/components/portfolio/PortfolioNavbar.vue'
import ProjectsSection from '~/components/portfolio/ProjectsSection.vue'
import TestimonialsSection from '~/components/portfolio/TestimonialsSection.vue'

const portfolioController = usePortfolio()
const localeCookie = useCookie(LOCALE_STORAGE_KEY, {
    default: () => 'en',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
})
const { resolveRequestLocale } = useRequestLocale(localeCookie)

const { data: portfolio, pending, refresh } = await useAsyncData('portfolio-content', async () => {
    const locale = resolveRequestLocale()
    const data = await portfolioController.load(locale)
    portfolioController.persistLocale(locale, localeCookie)
    return data
})

const locale = computed(() => portfolio.value?.locale ?? 'en')
const isRtl = computed(() => locale.value === 'ar')

const footerRightText = ''

const theme = ref('dark')
const activeSection = ref('top')
let sectionObserver

const isDark = computed(() => theme.value === 'dark')
const themeStyles = computed(() => ({
    page: isDark.value ? 'bg-[#10211b] text-[#f3f0e7]' : 'bg-[#f3f0e7] text-[#14221d]',
    panel: isDark.value ? 'border-[#9bc9ae]/30 bg-[#17372b]' : 'border-[#14221d]/20 bg-[#e7e2d6]',
    panelSoft: isDark.value ? 'border-[#9bc9ae]/25 bg-[#17372b]' : 'border-[#14221d]/10 bg-[#ebe7dc]',
    card: isDark.value ? 'border-[#9bc9ae]/25 bg-[#0d1915]' : 'border-[#14221d]/15 bg-[#f8f5ec]',
    textMuted: isDark.value ? 'text-[#c3d8c8]' : 'text-[#4a5b50]',
    accentText: isDark.value ? 'text-[#9bc9ae]' : 'text-[#176b4d]',
    accentBg: isDark.value ? 'bg-[#9bc9ae]' : 'bg-[#176b4d]',
    accentBorder: isDark.value ? 'border-[#9bc9ae]/50' : 'border-[#176b4d]/35',
    brandMark: isDark.value ? 'bg-[#9bc9ae] text-[#10211b]' : 'bg-[#176b4d] text-[#f3f0e7]',
    navLink: isDark.value
        ? 'text-[#c3d8c8] hover:bg-[#9bc9ae]/15 hover:text-[#f3f0e7]'
        : 'text-[#4a5b50] hover:bg-[#176b4d] hover:text-[#f3f0e7]',
    navLinkActive: isDark.value ? 'bg-[#9bc9ae] text-[#10211b]' : 'bg-[#14221d] text-[#f3f0e7]',
    primaryButton: isDark.value
        ? 'bg-[#9bc9ae] text-[#10211b] hover:bg-[#b5ddc2]'
        : 'bg-[#176b4d] text-[#f3f0e7] hover:bg-[#0f563c]',
    secondaryButton: isDark.value
        ? 'bg-[#17372b] text-[#f3f0e7] hover:bg-[#1d4838]'
        : 'bg-[#f8f5ec] text-[#14221d] hover:bg-[#e7e2d6]',
    chip: isDark.value ? 'border-[#9bc9ae]/30 bg-[#17372b] text-[#c3d8c8]' : 'border-[#14221d]/15 bg-[#e7e2d6] text-[#30463a]',
    input: isDark.value
        ? 'border-[#9bc9ae]/30 bg-[#0d1915] text-[#f3f0e7] placeholder:text-[#8daa98]'
        : 'border-[#14221d]/20 bg-[#f8f5ec] text-[#14221d] placeholder:text-[#6a7a70]',
    pill: isDark.value ? 'border-[#9bc9ae]/30 bg-[#17372b] text-[#c3d8c8]' : 'border-[#14221d]/15 bg-[#f8f5ec] text-[#30463a]',
    avatar: isDark.value ? 'bg-[#9bc9ae] text-[#10211b]' : 'bg-[#176b4d] text-[#f3f0e7]',
    backgroundOverlay: isDark.value
        ? 'bg-[linear-gradient(135deg,rgba(155,201,174,0.07)_1px,transparent_1px),linear-gradient(rgba(155,201,174,0.05)_1px,transparent_1px)] bg-[size:48px_48px]'
        : 'bg-[linear-gradient(135deg,rgba(20,34,29,0.05)_1px,transparent_1px),linear-gradient(rgba(20,34,29,0.04)_1px,transparent_1px)] bg-[size:48px_48px]',
    heroGlow: isDark.value ? 'bg-[#176b4d]/20' : 'bg-[#176b4d]/10',
    footerBorder: isDark.value ? 'border-[#9bc9ae]/30' : 'border-[#14221d]/20',
}))

watch(
    portfolio,
    (content) => {
        if (!content) {
            return
        }

        portfolioController.syncPortfolio(content)

        useSeoMeta({
            title: content.seo.title,
            description: content.seo.description,
            ogTitle: content.seo.ogTitle,
            ogDescription: content.seo.ogDescription,
            ogType: 'website',
            twitterCard: 'summary_large_image',
        })

        useHead({
            htmlAttrs: {
                lang: content.locale,
                dir: content.dir,
            },
            link: content.locale === 'ar'
                ? [
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap',
                    },
                ]
                : [],
            bodyAttrs: {
                class: content.locale === 'ar' ? 'font-arabic' : '',
            },
        })
    },
    { immediate: true },
)

const applyTheme = (nextTheme) => {
    theme.value = nextTheme

    if (typeof document === 'undefined') {
        return
    }

    document.documentElement.style.colorScheme = nextTheme
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')

    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('hussein-portfolio-theme', nextTheme)
    }
}

const toggleTheme = () => {
    applyTheme(isDark.value ? 'light' : 'dark')
}

const toggleLocale = async () => {
    const currentIndex = SUPPORTED_LOCALES.indexOf(locale.value)
    const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
    localeCookie.value = nextLocale
    await refresh()
}

const setupSectionObserver = () => {
    if (typeof document === 'undefined') {
        return
    }

    sectionObserver?.disconnect()

    sectionObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

            if (visibleEntry?.target?.id) {
                activeSection.value = visibleEntry.target.id
            }
        },
        {
            threshold: [0.15, 0.3, 0.55],
            rootMargin: '-22% 0px -60% 0px',
        },
    )

    document.querySelectorAll('[data-section]').forEach((section) => {
        sectionObserver.observe(section)
    })
}

onMounted(() => {
    const storedTheme = localStorage.getItem('hussein-portfolio-theme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    applyTheme(storedTheme ?? preferredTheme)

    const legacyLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (legacyLocale && legacyLocale !== portfolio.value?.locale) {
        localeCookie.value = legacyLocale
        refresh()
    }

    if (portfolio.value) {
        portfolioController.syncPortfolio(portfolio.value)
    }

    setupSectionObserver()
})

watch(portfolio, (content) => {
    if (content) {
        nextTick(() => setupSectionObserver())
    }
})

onBeforeUnmount(() => {
    sectionObserver?.disconnect()
})
</script>

<style>
.font-arabic {
    font-family: 'IBM Plex Sans Arabic', system-ui, sans-serif;
}
</style>

<style scoped>
@media (prefers-reduced-motion: reduce) {
    * {
        scroll-behavior: auto !important;
    }
}
</style>
