import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const SUPPORTED_LOCALES = new Set(['en', 'ar'])

export default defineEventHandler(async (event) => {
    const locale = getRouterParam(event, 'locale')

    if (!SUPPORTED_LOCALES.has(locale)) {
        throw createError({
            statusCode: 404,
            statusMessage: `Locale "${locale}" is not supported`,
        })
    }

    const filePath = join(process.cwd(), 'server/data/portfolio', `${locale}.json`)
    const raw = await readFile(filePath, 'utf-8')

    setHeader(event, 'Content-Type', 'application/json; charset=utf-8')
    setHeader(event, 'Cache-Control', 'public, max-age=3600')

    return JSON.parse(raw)
})
