export const useObserverWithOutUnObserve = (element, className) => {
	const fadeOnScrollOptions = {
		threshold: 0.3,
		rootMargin: '0px 0px 0px 0px',
	}

	const fadeOnScrollObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				entry.target.classList.remove(className)
			} else {
				entry.target.classList.add(className)
			}
		})
	}, fadeOnScrollOptions)

	fadeOnScrollObserver.observe(element)
}
