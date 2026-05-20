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

    async load(locale) {
        const nextLocale = resolveLocale(locale)
        this.isLoading.value = true
        this.error.value = null

        try {
            this.portfolio.value = await this.service.fetchByLocale(nextLocale)
            this.locale.value = nextLocale
            this.persistLocale(nextLocale)
            this.applyDocumentLocale()
        } catch (loadError) {
            this.error.value = loadError
            throw loadError
        } finally {
            this.isLoading.value = false
        }
    }

    async init() {
        const storedLocale = this.readStoredLocale()
        const browserLocale = this.detectBrowserLocale()
        await this.load(storedLocale ?? browserLocale)
    }

    async setLocale(locale) {
        if (locale === this.locale.value && this.portfolio.value) {
            return
        }

        await this.load(locale)
    }

    async toggleLocale() {
        const currentIndex = SUPPORTED_LOCALES.indexOf(this.locale.value)
        const nextLocale = SUPPORTED_LOCALES[(currentIndex + 1) % SUPPORTED_LOCALES.length]
        await this.setLocale(nextLocale)
    }

    detectBrowserLocale() {
        if (typeof navigator === 'undefined') {
            return DEFAULT_LOCALE
        }

        return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : DEFAULT_LOCALE
    }

    readStoredLocale() {
        if (typeof localStorage === 'undefined') {
            return null
        }

        const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
        return stored ? resolveLocale(stored) : null
    }

    persistLocale(locale) {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(LOCALE_STORAGE_KEY, locale)
        }
    }

    applyDocumentLocale() {
        if (typeof document === 'undefined' || !this.portfolio.value) {
            return
        }

        const { locale, dir } = this.portfolio.value
        document.documentElement.lang = locale
        document.documentElement.dir = dir
    }
}
