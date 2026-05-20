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
                    Open to frontend work
                </p>

                <h1 class="text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    Hussein Hany
                </h1>
                <p :class="themeStyles.accentText" class="mt-3 text-xl font-semibold sm:text-2xl">
                    Frontend developer · Vue & Nuxt
                </p>

                <p :class="themeStyles.textMuted" class="mt-6 max-w-2xl text-lg leading-8">
                    I build fast, accessible web apps and turn complex requirements into calm interfaces.
                    CS graduate (Fayoum University, 2025), ICPC finalist, and mentor to 100+ students in algorithms.
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
                        View work
                    </a>
                    <a href="#contact"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        @click="onAnchorClick($event, '#contact')">
                        Get in touch
                    </a>
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        LinkedIn
                    </a>
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        GitHub
                    </a>
                </div>
            </div>

            <div class="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-3xl border shadow-xl lg:mx-0 lg:h-44 lg:w-44"
                :class="themeStyles.avatar">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQFqPp_1DAWlPQ/profile-displayphoto-scale_200_200/B56Zs9zDzEJUAc-/0/1766268355199?e=1779321600&v=beta&t=0Yr6u67rlrihiC8Mn1t6NbWv-Gt1Ztj6D4-iWoXxPUo"
                    alt="Hussein Hany" class="h-full w-full object-cover"
                    :class="[imageLoaded ? 'opacity-100' : 'opacity-0']" @load="imageLoaded = true"
                    @error="imageLoaded = false" />
                <span v-if="!imageLoaded"
                    class="absolute inset-0 flex items-center justify-center text-2xl font-black tracking-[0.3em]">
                    HH
                </span>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    skills: {
        type: Array,
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
const imageLoaded = ref(false)
</script>
