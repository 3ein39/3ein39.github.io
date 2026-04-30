<template>
    <section id="opensource" data-section="opensource" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="Open Source" title="Shared work matters too." :theme-styles="themeStyles" />

        <div
            :class="[themeStyles.panel, 'grid gap-6 rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-8']">
            <div>
                <p :class="themeStyles.textMuted" class="mt-1 text-base leading-8">
                    I value open-source collaboration. A notable example is Leaf Manager, where I contributed to a
                    shared codebase and learned how to keep changes focused, readable, and easy to review.
                </p>
                <div class="mt-5 flex flex-wrap gap-3">
                    <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition']">
                        View LinkedIn Recommendation
                    </a>
                    <a :href="githubUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition']">
                        View GitHub
                    </a>
                </div>
            </div>

            <div :class="[themeStyles.card, 'rounded-3xl border p-6']">
                <h3 class="text-lg font-bold">What this says about me</h3>
                <ul class="mt-5 space-y-4">
                    <li v-for="point in points" :key="point" class="flex gap-3">
                        <span :class="themeStyles.accentBg" class="mt-2 h-2.5 w-2.5 shrink-0 rounded-full" />
                        <p :class="themeStyles.textMuted" class="text-sm leading-6">{{ point }}</p>
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
    githubUrl: {
        type: String,
        required: true,
    },
    linkedinUrl: {
        type: String,
        required: true,
    },
    points: {
        type: Array,
        required: true,
    },
})
</script>