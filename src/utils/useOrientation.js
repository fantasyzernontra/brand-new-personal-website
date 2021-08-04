import { useState, useEffect } from 'react'

export const useOrientation = () => {
	const [width, setWidth] = useState(window.innerWidth)

	function handleWindowSizeChange() {
		setWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange)
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange)
		}
	}, [])

	let isMobile = width < 1024

	return isMobile
}
