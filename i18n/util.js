import config from "./config"

const isBrowser = () => typeof window !== "undefined"

export const localeSupported = (locale) => config.locales.includes(locale)

export const getLocale = () => {
  const { defaultLocale, locales } = config
  for (let locale in locales) {
    const path = isBrowser() && window.location.pathname.split("/")[0]
    if (path === locale) {
      return locale
    }
  }
  return defaultLocale
}

export const getLocalePath = (localeCode) => {
  const {defaultPrefix, defaultLocale} = config;
  const locale = localeCode || getLocale()
  return locale === defaultLocale && !defaultPrefix ? "" : `/${locale}`
}

export const postLocaleMatch = post => {
  const { defaultLocale, defaultPrefix, locales } = config
  const locale = getLocale()
  const postLocale = post.slug.split("/")[1]
  if (postLocale === locale) {
    return true
  }
  if (
    !defaultPrefix &&
    locale === defaultLocale &&
    !localeSupported(postLocale)
  ) {
    return true
  }
  return false
}
