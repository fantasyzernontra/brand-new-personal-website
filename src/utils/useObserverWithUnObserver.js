export const useObserverWithUnObserve = (element, className) => {
	const fadeOnScrollOptions = {
		threshold: 0.3,
		rootMargin: '0px 0px 0px 0px',
	}

	const fadeOnScrollObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return
			} else {
				entry.target.classList.add(className)
				observer.unobserve(entry.target)
			}
		})
	}, fadeOnScrollOptions)

	fadeOnScrollObserver.observe(element)
}
