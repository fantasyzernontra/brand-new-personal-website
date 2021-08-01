export const useActiveSidebar = (text, currentLocation, currentLanguage) => {
	var classResult = ''
	const replacedCurrentLocation = currentLocation.replace('/', '')
	const thaiSideBar = [
		{ label: 'ผมเป็นใคร', path: '' },
		{ label: 'ผลงาน', path: 'works' },
		{ label: 'ประสบการณ์', path: 'experiences' },
		{ label: 'ติดต่อผม', path: 'contact' },
	]

	// About Case
	if (currentLocation === '/' && (text === 'about' || text === 'ผมเป็นใคร')) {
		classResult =
			currentLanguage === 'en'
				? 'active_sidebar_text en-semibold'
				: 'active_sidebar_text th-semibold'
		return classResult
	}

	// General Cases
	if (currentLanguage === 'en') {
		if (replacedCurrentLocation.includes(text))
			classResult = 'active_sidebar_text en-semibold'
		else classResult = 'inactive_sidebar_text en-regular'
	}

	if (currentLanguage === 'th') {
		const isHere = thaiSideBar.some((item) => {
			if (item.label === text && item.path === replacedCurrentLocation)
				return true
			else return false
		})

		if (isHere) classResult = 'active_sidebar_text th-semibold'
		else classResult = 'inactive_sidebar_text th-regular'
	}

	return classResult
}
