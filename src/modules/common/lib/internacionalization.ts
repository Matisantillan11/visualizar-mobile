import { I18n } from 'i18n-js'
import en from '../locale/en.json'
import es from '../locale/es.json'
// i18n.js
import { getLocales } from 'expo-localization'

export const i18n = new I18n({
	en,
	es,
})

i18n.locale = getLocales()[0].languageCode
