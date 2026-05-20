<template>
    <main :class="themeStyles.page"
        class="relative min-h-screen overflow-hidden antialiased transition-colors duration-300">
        <LayoutBackdrop :overlay-class="themeStyles.backgroundOverlay" />

        <div v-if="isLoading && !portfolio"
            class="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4">
            <p :class="themeStyles.textMuted" class="text-sm">Loading…</p>
        </div>

        <div v-else-if="portfolio"
            class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <PortfolioNavbar :active-section="activeSection" :is-dark="isDark" :is-rtl="isRtl" :locale="locale"
                :nav-items="portfolio.nav" :portfolio="portfolio" :resume-url="portfolio.links.resume"
                :theme-styles="themeStyles" @toggle-locale="toggleLocale" @toggle-theme="toggleTheme" />

            <HeroSection :github-url="portfolio.links.github" :hero="portfolio.hero"
                :linkedin-url="portfolio.links.linkedin" :profile="portfolio.profile" :skills="portfolio.skills"
                :theme-styles="themeStyles" :ui="portfolio.ui" />

            <ProjectsSection :github-url="portfolio.links.github" :projects="portfolio.projects"
                :section="portfolio.sections.work" :theme-styles="themeStyles" />

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
import ContactSection from '~/components/portfolio/ContactSection.vue'
import HeroSection from '~/components/portfolio/HeroSection.vue'
import LayoutBackdrop from '~/components/portfolio/LayoutBackdrop.vue'
import PortfolioFooter from '~/components/portfolio/PortfolioFooter.vue'
import PortfolioNavbar from '~/components/portfolio/PortfolioNavbar.vue'
import ProjectsSection from '~/components/portfolio/ProjectsSection.vue'
import TestimonialsSection from '~/components/portfolio/TestimonialsSection.vue'

const portfolioController = usePortfolio()

const portfolio = computed(() => portfolioController.portfolio.value)
const isLoading = computed(() => portfolioController.isLoading.value)
const locale = computed(() => portfolioController.locale.value)
const isRtl = computed(() => portfolioController.isRtl.value)

const footerRightText = ''

const theme = ref('dark')
const activeSection = ref('top')
let sectionObserver

const isDark = computed(() => theme.value === 'dark')
const themeStyles = computed(() => ({
    page: isDark.value ? 'bg-[#06111f] text-slate-100' : 'bg-[#f5f0e6] text-slate-950',
    panel: isDark.value ? 'border-white/10 bg-white/5' : 'border-slate-200/90 bg-white/90',
    panelSoft: isDark.value ? 'border-white/10 bg-white/5' : 'border-slate-200/80 bg-white/85',
    card: isDark.value ? 'border-white/10 bg-slate-950/45' : 'border-slate-200 bg-white',
    textMuted: isDark.value ? 'text-slate-300' : 'text-slate-700',
    accentText: isDark.value ? 'text-cyan-300' : 'text-sky-800',
    accentBg: isDark.value ? 'bg-cyan-300' : 'bg-sky-700',
    accentBorder: isDark.value ? 'border-cyan-400/30' : 'border-sky-700/20',
    brandMark: isDark.value ? 'bg-white/10 text-cyan-200' : 'bg-slate-950 text-white',
    navLink: isDark.value
        ? 'text-slate-300 hover:bg-white/10 hover:text-white'
        : 'text-slate-700 hover:bg-slate-950 hover:text-white',
    navLinkActive: isDark.value ? 'bg-white/15 text-white' : 'bg-slate-950 text-white',
    primaryButton: isDark.value
        ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
        : 'bg-slate-950 text-white hover:bg-slate-800',
    secondaryButton: isDark.value
        ? 'bg-white/5 text-slate-100 hover:bg-white/10'
        : 'bg-white text-slate-950 hover:bg-slate-100',
    chip: isDark.value ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-200 bg-slate-100 text-slate-800',
    input: isDark.value
        ? 'border-white/10 bg-slate-950/45 text-slate-100 placeholder:text-slate-500'
        : 'border-slate-200 bg-white text-slate-950 placeholder:text-slate-400',
    pill: isDark.value ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-200 bg-white text-slate-800',
    avatar: isDark.value ? 'bg-gradient-to-br from-cyan-400 to-sky-600 text-slate-950' : 'bg-gradient-to-br from-slate-950 to-slate-700 text-white',
    backgroundOverlay: isDark.value
        ? 'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.07),_transparent_35%),linear-gradient(to_bottom,_transparent,_rgba(2,6,23,0.14))]'
        : 'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_transparent_32%),linear-gradient(to_bottom,_transparent,_rgba(15,23,42,0.08))]',
    heroGlow: isDark.value
        ? 'bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),_transparent_42%)]'
        : 'bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_42%)]',
    footerBorder: isDark.value ? 'border-white/10' : 'border-slate-200',
}))

await useAsyncData('portfolio-content', async () => {
    if (!portfolioController.portfolio.value) {
        await portfolioController.init()
    }

    return portfolioController.portfolio.value
})

watch(
    portfolio,
    (content) => {
        if (!content) {
            return
        }

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
    await portfolioController.toggleLocale()
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

onMounted(async () => {
    const storedTheme = localStorage.getItem('hussein-portfolio-theme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    applyTheme(storedTheme ?? preferredTheme)

    if (!portfolio.value) {
        await portfolioController.init()
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
