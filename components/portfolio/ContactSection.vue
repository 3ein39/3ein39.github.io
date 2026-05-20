<template>
    <section id="contact" data-section="contact" class="scroll-mt-28 py-8 lg:py-12">
        <SectionReveal>
            <SectionHeading :eyebrow="section.eyebrow" :title="section.title" :theme-styles="themeStyles" />

            <div
                :class="[themeStyles.panel, 'grid gap-8 rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-2 lg:p-8']">
                <div class="space-y-6">
                    <p :class="themeStyles.textMuted" class="text-base leading-8">
                        {{ section.intro }}
                    </p>

                    <div class="flex flex-wrap gap-3">
                        <a :href="`mailto:${emailAddress}`"
                            :class="[themeStyles.primaryButton, 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                            {{ emailAddress }}
                        </a>
                        <a :href="resumeUrl" target="_blank" rel="noreferrer"
                            :class="[themeStyles.secondaryButton, 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                            {{ section.resume }}
                        </a>
                    </div>
                </div>

                <form :class="[themeStyles.card, 'space-y-5 rounded-3xl border p-5']" @submit.prevent="handleSubmit">
                    <div>
                        <label class="mb-2 block text-sm font-semibold" for="name">{{ section.formName }}</label>
                        <input id="name" v-model="form.name"
                            :class="[themeStyles.input, 'w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                            autocomplete="name" required type="text" />
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-semibold" for="email">{{ section.formEmail }}</label>
                        <input id="email" v-model="form.email"
                            :class="[themeStyles.input, 'w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                            autocomplete="email" required type="email" />
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-semibold" for="message">{{ section.formMessage }}</label>
                        <textarea id="message" v-model="form.message"
                            :class="[themeStyles.input, 'min-h-32 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                            :placeholder="section.formPlaceholder" required rows="5" />
                    </div>

                    <button
                        :class="[themeStyles.primaryButton, 'inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto']"
                        type="submit">
                        {{ section.formSubmit }}
                    </button>

                    <p v-if="statusMessage" :class="themeStyles.accentText" class="text-sm font-medium"
                        aria-live="polite">
                        {{ statusMessage }}
                    </p>
                </form>
            </div>
        </SectionReveal>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SectionHeading from './SectionHeading.vue'
import SectionReveal from './SectionReveal.vue'

const props = defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    section: {
        type: Object,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
})

const form = reactive({
    name: '',
    email: '',
    message: '',
})
const statusMessage = ref('')

const handleSubmit = () => {
    const subject = encodeURIComponent(props.section.emailSubject)
    const body = encodeURIComponent(
        `${props.section.emailGreeting}\n\n${form.message}\n\n${props.section.formName}: ${form.name}\n${props.section.formEmail}: ${form.email}`,
    )
    statusMessage.value = props.section.formStatus
    window.location.href = `mailto:${props.emailAddress}?subject=${subject}&body=${body}`
}
</script>
