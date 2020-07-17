import { useContext } from 'react'
import { LocaleContext, isLocale } from './LocaleContext'
import locales from './locales'
import { defaultLocale } from './config'

export default function useTranslation() {
  let { locale } = useContext(LocaleContext)
  if(!isLocale(locale)) {
    locale = 'en'
  }

  function t(key) {
    if (!locales[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }
    return locales[locale][key] || locales[defaultLocale][key] || ''
  }

  return {
    t,
    locale,
  }
}
