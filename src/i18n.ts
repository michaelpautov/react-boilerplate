import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './locales/en/translation.json'

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN as Record<string, string>,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  lowerCaseLng: true,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
