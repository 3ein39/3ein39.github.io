<template>
    <section id="testimonials" data-section="testimonials" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="Recommendations" title="What colleagues say."
            description="From a LinkedIn recommendation on my profile."
            :theme-styles="themeStyles" />

        <SectionReveal>
        <div :class="[themeStyles.panel, 'rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl lg:p-8']">
            <article :class="[themeStyles.card, 'overflow-hidden rounded-[1.75rem] border']">
                <div
                    class="flex flex-col gap-6 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div class="flex items-center gap-4">
                        <img :src="recommendation.photoUrl" :alt="`${recommendation.author} profile photo`"
                            class="h-16 w-16 rounded-2xl border border-white/10 object-cover" loading="lazy" />
                        <div>
                            <p :class="themeStyles.accentText"
                                class="text-sm font-semibold uppercase tracking-[0.24em]">
                                LinkedIn recommendation</p>
                            <h3 class="mt-2 text-xl font-bold">{{ recommendation.author }}</h3>
                            <p :class="themeStyles.textMuted" class="mt-1 text-sm">{{ recommendation.role }}</p>
                        </div>
                    </div>

                    <div class="rounded-2xl border px-4 py-3" :class="themeStyles.panelSoft">
                        <p :class="themeStyles.accentText" class="text-xs font-semibold uppercase tracking-[0.24em]">
                            Source</p>
                        <p class="mt-1 text-sm font-medium">{{ recommendation.company }}</p>
                        <p :class="themeStyles.textMuted" class="mt-1 text-xs">{{ recommendation.date }}</p>
                    </div>
                </div>

                <blockquote class="relative p-6 sm:p-8">
                    <span :class="themeStyles.accentBg" class="absolute left-6 top-6 h-10 w-1 rounded-full sm:left-8" />
                    <div class="space-y-5 pl-5 sm:pl-8">
                        <p v-for="paragraph in recommendation.paragraphs" :key="paragraph"
                            class="text-base leading-8 text-balance sm:text-lg lg:text-xl">
                            {{ paragraph }}
                        </p>
                    </div>
                    <div class="mt-6 flex flex-wrap items-center gap-3 pl-5 sm:pl-8">
                        <span class="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
                            :class="themeStyles.accentText">
                            Team player
                        </span>
                        <span class="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
                            :class="themeStyles.accentText">
                            Reliable collaborator
                        </span>
                        <span class="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
                            :class="themeStyles.accentText">
                            Clear communicator
                        </span>
                    </div>
                </blockquote>
            </article>
        </div>
        </SectionReveal>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import SectionReveal from './SectionReveal.vue'

defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    recommendation: {
        type: Object,
        required: true,
    },
})
</script>
