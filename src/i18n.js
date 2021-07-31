import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

// import translationEN from './public/locales/en/translation.json'
// import translationTH from './public/locales/th/translation.json'

// const resources = {
// 	en: {
// 		translation: translationEN,
// 	},
// 	th: {
// 		translation: translationTH,
// 	},
// }

i18n
	.use(XHR)
	.use(initReactI18next)
	.init({
		// resources,
		lng: 'en',
		react: {
			wait: true,
		},
	})

export default i18n
