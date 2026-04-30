<template>
    <section id="about" data-section="about" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="About Me" title="A calm, practical builder with a strong academic base."
            :theme-styles="themeStyles" />

        <div
            :class="[themeStyles.panel, 'grid gap-8 rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8']">
            <div class="space-y-5">
                <p :class="themeStyles.textMuted" class="text-base leading-8 sm:text-lg">
                    I’m Hussein Hany, a frontend developer from Egypt who enjoys building interfaces that feel simple
                    even when the underlying problem is complex. My background combines Vue.js and Nuxt work, MEVN-stack
                    development, and a strong competitive programming mindset.
                </p>
                <p :class="themeStyles.textMuted" class="text-base leading-8 sm:text-lg">
                    I graduated in Computer Science from Fayoum University in 2025, worked with teams like Wisemen, and
                    contributed through the Manara fellowship experience. I also mentor aspiring developers and
                    students, which keeps me grounded in clear communication and careful problem decomposition.
                </p>
                <p :class="themeStyles.textMuted" class="text-base leading-8 sm:text-lg">
                    The value I try to bring to every project is the same: good structure, thoughtful UI, and code that
                    the next person can extend without pain.
                </p>
            </div>

            <div :class="[themeStyles.card, 'rounded-3xl border p-6']">
                <h3 class="text-lg font-bold">Selected milestones</h3>
                <ul class="mt-5 space-y-4">
                    <li v-for="milestone in milestones" :key="milestone.title" class="flex gap-3">
                        <span :class="themeStyles.accentBg" class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" />
                        <div>
                            <p class="font-semibold">{{ milestone.title }}</p>
                            <p :class="themeStyles.textMuted" class="mt-1 text-sm leading-6">{{ milestone.description }}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'

defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    milestones: {
        type: Array,
        required: true,
    },
})
</script>