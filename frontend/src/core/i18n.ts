import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ConfigService } from './features/config'

// configuration of default translation in Core Module
// @todo extends to others modules

import EnTranslation from './i18n/en/translation.json'
import FrTranslation from './i18n/fr/translation.json'

// Init configuration
const langConfig = ConfigService.get('application.lang')
const i18NextInit = {
  ...langConfig,
  resources: {
    en: {
      translation: EnTranslation,
    },
    fr: {
      translation: FrTranslation,
    },
  },
}

export const I18Provider = i18n.use(initReactI18next) // passes i18n down to react-i18next

I18Provider.init(i18NextInit)
