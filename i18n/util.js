import config from "./config"

export const getLocale = () => {
  const { defaultLocale, locales } = config
  for (let locale in locales) {
    const path = window.location.pathname.split("/")[0]
    if (path === locale) {
      return locale
    }
  }
  return defaultLocale
}

export const getLocalePath = (defaultPrefix = false) => {
  const locale = getLocale()
  return locale === config.defaultLocale && !defaultPrefix ? "" : `/${locale}`
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
    !locales.includes(postLocale)
  ) {
    return true
  }
  return false
}
