import { resolveLocale } from '~/constants/locales'

export class PortfolioService {
    resolveEndpoint(locale) {
        const config = useRuntimeConfig()
        const base = config.app.baseURL || '/'
        const normalizedBase = base.endsWith('/') ? base : `${base}/`
        return `${normalizedBase}api/portfolio/${resolveLocale(locale)}`
    }

    async fetchByLocale(locale) {
        const endpoint = this.resolveEndpoint(locale)
        const fetcher = import.meta.server ? useRequestFetch() : $fetch
        return await fetcher(endpoint)
    }
}
