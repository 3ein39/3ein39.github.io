import { DEFAULT_LOCALE, resolveLocale, isSupportedLocale } from '~/constants/locales'

export function useRequestLocale(localeCookie) {
    const resolveRequestLocale = () => {
        if (localeCookie.value && isSupportedLocale(localeCookie.value)) {
            return resolveLocale(localeCookie.value)
        }

        if (import.meta.server) {
            const headers = useRequestHeaders(['accept-language'])
            const acceptLanguage = headers['accept-language']?.toLowerCase() ?? ''

            if (acceptLanguage.includes('ar')) {
                return 'ar'
            }
        }

        if (import.meta.client && typeof navigator !== 'undefined') {
            if (navigator.language?.toLowerCase().startsWith('ar')) {
                return 'ar'
            }
        }

        return DEFAULT_LOCALE
    }

    return { resolveRequestLocale }
}
