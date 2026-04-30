<template>
    <section id="contact" data-section="contact" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="Contact / Resume" title="Ready to collaborate on a fast, thoughtful frontend?"
            description="If you have a product idea, a frontend challenge, or a full-stack build that needs careful execution, I’d be glad to talk."
            :theme-styles="themeStyles" />

        <div
            :class="[themeStyles.panel, 'grid gap-8 rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-8']">
            <div class="space-y-6">
                <div class="space-y-4">
                    <a :href="resumeUrl" target="_blank" rel="noreferrer"
                        :class="[themeStyles.primaryButton, 'inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        View / Download CV
                    </a>
                    <a :href="`mailto:${emailAddress}`"
                        :class="[themeStyles.secondaryButton, 'inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']">
                        Send Email
                    </a>
                </div>

                <div :class="[themeStyles.card, 'rounded-3xl border p-5']">
                    <p :class="themeStyles.accentText" class="text-sm font-semibold uppercase tracking-[0.24em]">Direct
                        links</p>
                    <div class="mt-4 flex flex-wrap gap-3">
                        <a :href="linkedinUrl" target="_blank" rel="noreferrer"
                            :class="[themeStyles.secondaryButton, 'rounded-full border px-4 py-2 text-sm font-semibold transition']">
                            LinkedIn
                        </a>
                        <a :href="githubUrl" target="_blank" rel="noreferrer"
                            :class="[themeStyles.secondaryButton, 'rounded-full border px-4 py-2 text-sm font-semibold transition']">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <form :class="[themeStyles.card, 'space-y-5 rounded-3xl border p-5']" @submit.prevent="handleSubmit">
                <div>
                    <label class="mb-2 block text-sm font-semibold" for="name">Name</label>
                    <input id="name" v-model="form.name"
                        :class="[themeStyles.input, 'w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                        autocomplete="name" required type="text" />
                </div>

                <div>
                    <label class="mb-2 block text-sm font-semibold" for="email">Email</label>
                    <input id="email" v-model="form.email"
                        :class="[themeStyles.input, 'w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                        autocomplete="email" required type="email" />
                </div>

                <div>
                    <label class="mb-2 block text-sm font-semibold" for="message">Message</label>
                    <textarea id="message" v-model="form.message"
                        :class="[themeStyles.input, 'min-h-40 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30']"
                        placeholder="Tell me about the product, role, or problem you want to solve." required
                        rows="6" />
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4">
                    <p :class="themeStyles.textMuted" class="text-sm leading-6">
                        Replies will open in your email client and go to {{ emailAddress }}.
                    </p>
                    <button
                        :class="[themeStyles.primaryButton, 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent']"
                        type="submit">
                        Open Email Draft
                    </button>
                </div>

                <p v-if="statusMessage" :class="themeStyles.accentText" class="text-sm font-medium" aria-live="polite">
                    {{ statusMessage }}
                </p>
            </form>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SectionHeading from './SectionHeading.vue'

const props = defineProps({
    themeStyles: {
        type: Object,
        required: true,
    },
    emailAddress: {
        type: String,
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
    const subject = encodeURIComponent('Portfolio inquiry for Hussein Hany')
    const body = encodeURIComponent(`Hi Hussein,\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`)
    statusMessage.value = 'Opening your email client with a prefilled draft.'
    window.location.href = `mailto:${props.emailAddress}?subject=${subject}&body=${body}`
}
</script>