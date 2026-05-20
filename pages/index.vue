<template>
    <main :class="themeStyles.page"
        class="relative min-h-screen overflow-hidden antialiased transition-colors duration-300">
        <LayoutBackdrop :overlay-class="themeStyles.backgroundOverlay" />

        <div class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <PortfolioNavbar :active-section="activeSection" :is-dark="isDark" :nav-items="navItems"
                :resume-url="resumeUrl" :theme-styles="themeStyles" @toggle-theme="toggleTheme" />

            <HeroSection :github-url="githubUrl" :linkedin-url="linkedinUrl" :skills="skills"
                :theme-styles="themeStyles" />

            <ProjectsSection :github-url="githubUrl" :projects="projects" :theme-styles="themeStyles" />

            <TestimonialsSection :recommendation="recommendation" :theme-styles="themeStyles" />

            <ContactSection :email-address="emailAddress" :resume-url="resumeUrl" :theme-styles="themeStyles" />

            <PortfolioFooter :left-text="footerLeftText" :right-text="footerRightText" :theme-styles="themeStyles" />
        </div>
    </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ContactSection from '~/components/portfolio/ContactSection.vue'
import HeroSection from '~/components/portfolio/HeroSection.vue'
import LayoutBackdrop from '~/components/portfolio/LayoutBackdrop.vue'
import PortfolioFooter from '~/components/portfolio/PortfolioFooter.vue'
import PortfolioNavbar from '~/components/portfolio/PortfolioNavbar.vue'
import ProjectsSection from '~/components/portfolio/ProjectsSection.vue'
import TestimonialsSection from '~/components/portfolio/TestimonialsSection.vue'

const emailAddress = 'hussein.hany.cs@gmail.com'
const linkedinUrl = 'https://www.linkedin.com/in/3ein39/'
const githubUrl = 'https://github.com/3ein39'
const resumeUrl = 'https://drive.google.com/file/d/16pwMcAf-qPjMAhWDyhZQQBl7v9Ycgtic/view?usp=drive_link'

useSeoMeta({
    title: 'Hussein Hany | Frontend Developer',
    description:
        'Hussein Hany is a Vue and Nuxt frontend developer who builds fast, accessible web apps.',
    ogTitle: 'Hussein Hany | Frontend Developer',
    ogDescription:
        'Vue.js and Nuxt developer with full-stack experience, strong problem-solving skills, and mentoring experience.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
})

useHead({
    htmlAttrs: {
        lang: 'en',
    },
})

const navItems = [
    { label: 'Work', href: '#projects', sectionId: 'projects' },
    { label: 'Recommendations', href: '#testimonials', sectionId: 'testimonials' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

const skills = [
    'Vue.js',
    'Nuxt',
    'TypeScript',
    'TailwindCSS',
    'Node.js',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
]

const projects = [
    {
        title: 'ServiceSphere',
        category: 'Mobile marketplace',
        summary:
            'AI-assisted services marketplace with real-time chat and bilingual UX, built around trust and fast discovery.',
        stack: ['React Native', 'AI', 'Real-time chat'],
    },
    {
        title: 'YelpCamp',
        category: 'Full-stack web app',
        summary:
            'Campground review app with auth, CRUD flows, and map-based discovery using Node, Express, and MongoDB.',
        stack: ['Node.js', 'Express', 'MongoDB', 'Mapbox'],
    },
    {
        title: 'Leaf Manager',
        category: 'Open source',
        summary:
            'Contribution to an environmental data tool—focused changes aligned with the existing codebase and workflow.',
        stack: ['JavaScript', 'Git', 'Collaboration'],
    },
]

const recommendation = {
    author: 'Nick Bankem',
    role: 'Frontend Developer at Wisemen',
    company: 'Wisemen',
    date: 'February 12, 2026',
    photoUrl:
        'https://media.licdn.com/dms/image/v2/D4E03AQF69tzTjt5wEA/profile-displayphoto-scale_100_100/B4EZ1sotDbHcAc-/0/1775644107240?e=1779321600&v=beta&t=E5L0jC5pVYkjdEYKa7QvObLC81BziSnaamkGznIRalI',
    paragraphs: [
        'I had the pleasure of working with Hussein and can confidently say he was a great addition to the team. He adapted quickly to the way we work and consistently impressed us with his responsiveness and commitment.',
        "Hussein communicates clearly and openly, he isn't afraid to share his needs or provide constructive feedback, which made collaboration smooth and effective. He's proactive, reliable, and never hesitates to roll up his sleeves and get his hands dirty when needed.",
        'Overall, it was truly a pleasure working with him. Hussein is polite, professional, and a strong team player. I would gladly work with him again in the future.',
    ],
}

const footerLeftText = 'Built with Vue 3, Nuxt 3, and Tailwind CSS.'
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

onMounted(() => {
    const storedTheme = localStorage.getItem('hussein-portfolio-theme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    applyTheme(storedTheme ?? preferredTheme)

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
})

onBeforeUnmount(() => {
    sectionObserver?.disconnect()
})
</script>

<style scoped>
.text-balance {
    text-wrap: balance;
}

@media (prefers-reduced-motion: reduce) {
    * {
        scroll-behavior: auto !important;
    }
}
</style>
