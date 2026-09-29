import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { legal as legalEn } from './locales/en/legal'
import { legal as legalPt } from './locales/pt/legal'

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    defaultNS: 'legal',
    resources: {
      pt: { legal: legalPt },
      en: { legal: legalEn },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

export { i18next }
