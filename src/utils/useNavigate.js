export const useNavigate = (text, currentLocation, currentLanguage) => {
	if (currentLanguage === 'en') {
		if (text === 'about' && currentLocation.replace('/', '') !== 'about')
			return '/about'
		else if (text === 'works' && currentLocation.replace('/', '') !== 'works')
			return '/works'
		else if (
			text === 'experiences' &&
			currentLocation.replace('/', '') !== 'experiences'
		)
			return '/experiences'
		else if (
			text === 'contact' &&
			currentLocation.replace('/', '') !== 'contact'
		)
			return '/contact'
	} else if (currentLanguage === 'th') {
		if (text === 'ผมเป็นใคร' && currentLocation.replace('/', '') !== 'about')
			return '/about'
		else if (text === 'ผลงาน' && currentLocation.replace('/', '') !== 'works')
			return '/works'
		else if (
			text === 'ประสบการณ์' &&
			currentLocation.replace('/', '') !== 'experiences'
		)
			return '/experiences'
		else if (
			text === 'ติดต่อผม' &&
			currentLocation.replace('/', '') !== 'contact'
		)
			return '/contact'
	}

	return null
}
