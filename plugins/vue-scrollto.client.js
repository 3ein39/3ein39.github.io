import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        duration: 750,
        easing: 'easeInOutCubic',
        offset: -112,
    })

    return {
        provide: {
            scrollTo: VueScrollTo.scrollTo,
        },
    }
})
