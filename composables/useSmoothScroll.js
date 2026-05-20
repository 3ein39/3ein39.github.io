const SCROLL_OFFSET = -112
const SCROLL_DURATION = 750

export function useSmoothScroll() {
    const scrollTo = (selector) => {
        if (typeof window === 'undefined') {
            return
        }

        const target = document.querySelector(selector)
        if (!target) {
            return
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            target.scrollIntoView({ block: 'start' })
            return
        }

        const { $scrollTo, scrollTo: providedScrollTo } = useNuxtApp()
        const scroll = $scrollTo ?? providedScrollTo
        scroll(selector, SCROLL_DURATION, { offset: SCROLL_OFFSET })
    }

    const onAnchorClick = (event, selector) => {
        event.preventDefault()
        scrollTo(selector)
    }

    return { scrollTo, onAnchorClick }
}
