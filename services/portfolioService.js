import { resolveLocale } from '~/constants/locales'
import englishPortfolio from '~/server/data/portfolio/en.json'
import arabicPortfolio from '~/server/data/portfolio/ar.json'

const bundledPortfolios = {
    en: englishPortfolio,
    ar: arabicPortfolio,
}

function isPortfolioPayload(data) {
    return Boolean(
        data
        && typeof data === 'object'
        && data.locale
        && data.seo?.title
        && data.links?.resume
        && data.profile?.name
        && data.hero?.bio
        && data.sections?.work
        && data.sections?.recommendations
        && data.sections?.contact
        && Array.isArray(data.projects),
    )
}

export class PortfolioService {
    resolveEndpoint(locale) {
        const config = useRuntimeConfig()
        const base = config.app.baseURL || '/'
        const normalizedBase = base.endsWith('/') ? base : `${base}/`
        return `${normalizedBase}api/portfolio/${resolveLocale(locale)}`
    }

    async fetchByLocale(locale) {
        const normalizedLocale = resolveLocale(locale)
        const endpoint = this.resolveEndpoint(locale)
        const fetcher = import.meta.server ? useRequestFetch() : $fetch

        try {
            const data = await fetcher(endpoint)

            if (!isPortfolioPayload(data)) {
                throw new Error(`Portfolio endpoint returned invalid ${normalizedLocale} data`)
            }

            return data
        } catch (error) {
            const bundledPortfolio = bundledPortfolios[normalizedLocale]

            if (!bundledPortfolio) {
                throw error
            }

            if (import.meta.client) {
                console.warn(
                    `Falling back to bundled ${normalizedLocale} portfolio data after the locale request failed.`,
                    error,
                )
            }

            return bundledPortfolio
        }
    }
}
