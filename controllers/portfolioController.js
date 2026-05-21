import { ref, computed } from 'vue'
import {
    DEFAULT_LOCALE,
    LOCALE_META,
    LOCALE_STORAGE_KEY,
    SUPPORTED_LOCALES,
    resolveLocale,
} from '~/constants/locales'
import { PortfolioService } from '~/services/portfolioService'

export class PortfolioController {
    constructor(service = new PortfolioService()) {
        this.service = service
        this.locale = ref(DEFAULT_LOCALE)
        this.portfolio = ref(null)
        this.isLoading = ref(false)
        this.error = ref(null)
        this.isRtl = computed(() => this.locale.value === 'ar')
        this.localeMeta = computed(
            () => LOCALE_META[this.locale.value] ?? LOCALE_META[DEFAULT_LOCALE],
        )
    }

    syncPortfolio(data) {
        this.portfolio.value = data
        this.locale.value = data?.locale ?? DEFAULT_LOCALE
        this.applyDocumentLocale()
    }

    async load(locale) {
        const nextLocale = resolveLocale(locale)
        this.isLoading.value = true
        this.error.value = null

        try {
            const data = await this.service.fetchByLocale(nextLocale)
            this.syncPortfolio(data)
            return data
        } catch (loadError) {
            this.error.value = loadError
            throw loadError
        } finally {
            this.isLoading.value = false
        }
    }

    async setLocale(locale) {
        if (locale === this.locale.value && this.portfolio.value) {
            return this.portfolio.value
        }

        return await this.load(locale)
    }

    async toggleLocale() {
        const currentIndex = SUPPORTED_LOCALES.indexOf(this.locale.value)
        const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
        return await this.setLocale(nextLocale)
    }

    applyDocumentLocale() {
        if (typeof document === 'undefined' || !this.portfolio.value) {
            return
        }

        const { locale, dir } = this.portfolio.value
        document.documentElement.lang = locale
        document.documentElement.dir = dir
    }

    persistLocale(locale, localeCookie) {
        if (localeCookie) {
            localeCookie.value = locale
            return
        }

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(LOCALE_STORAGE_KEY, locale)
        }
    }
}
