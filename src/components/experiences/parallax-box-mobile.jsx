import { forwardRef } from 'react'
import LightHamburgerMenu from '../light-hamburger-button'

const ParallaxMobile = forwardRef(({ label, img, lang }, ref) => {
	return (
		<section
			className='parallax-mobile-container en-semibold'
			style={{
				backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.75)
    ), url(${img})`,
			}}
			id={label}
			ref={ref}
		>
			{label === 'education' && (
				<div className='absolute top-5 right-10'>
					<LightHamburgerMenu />
				</div>
			)}
			<h1 className='parallax-label'>{label}</h1>
		</section>
	)
})

export default ParallaxMobile
