import { I18Provider as i18n } from '../../core/i18n'

import ENTranslation from './en/translation.json'
import FRTranslation from './fr/translation.json'

i18n.addResourceBundle('en', 'house', ENTranslation)
i18n.addResourceBundle('fr', 'house', FRTranslation)
