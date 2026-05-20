export const SUPPORTED_LOCALES = ['en', 'ar']
export const DEFAULT_LOCALE = 'en'
export const LOCALE_STORAGE_KEY = 'hussein-portfolio-locale'

export const LOCALE_META = {
    en: { label: 'EN', name: 'English', dir: 'ltr' },
    ar: { label: 'ع', name: 'العربية', dir: 'rtl' },
}

export function isSupportedLocale(locale) {
    return SUPPORTED_LOCALES.includes(locale)
}

export function resolveLocale(locale) {
    return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE
}
