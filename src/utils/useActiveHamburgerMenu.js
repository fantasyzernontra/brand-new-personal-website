export const useActiveHamburgerMenu = (
	text,
	currentLocation,
	currentLanguage
) => {
	const replacedCurrentLocation = currentLocation.replace('/', '')
	const thaiSideBar = [
		{ label: 'ผมเป็นใคร', path: '' },
		{ label: 'ผลงาน', path: 'works' },
		{ label: 'ประสบการณ์', path: 'experiences' },
		{ label: 'ติดต่อผม', path: 'contact' },
	]

	// About Case
	if (
		replacedCurrentLocation === '' &&
		(text === 'about' || text === 'ผมเป็นใคร')
	) {
		return true
	}

	// General Cases
	if (currentLanguage === 'en') {
		if (replacedCurrentLocation === text) return true
		else return false
	}

	if (currentLanguage === 'th') {
		const isHere = thaiSideBar.some((item) => {
			if (item.label === text && item.path === replacedCurrentLocation)
				return true
			else return false
		})

		return isHere
	}

	return false
}
