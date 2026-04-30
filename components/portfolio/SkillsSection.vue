<template>
    <section id="skills" data-section="skills" class="scroll-mt-28 py-8 lg:py-12">
        <SectionHeading eyebrow="Skills" title="Tools I use to move from idea to delivery."
            :theme-styles="themeStyles" />

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article v-for="group in skillGroups" :key="group.title"
                :class="[themeStyles.panel, 'rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl']">
                <h3 class="text-xl font-bold">{{ group.title }}</h3>
                <ul class="mt-5 flex flex-wrap gap-2">
                    <li v-for="item in group.items" :key="item"
                        :class="[themeStyles.chip, 'rounded-full border px-3 py-1 text-xs font-medium']">
                        {{ item }}
                    </li>
                </ul>
            </article>
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
    skillGroups: {
        type: Array,
        required: true,
    },
})
</script>