import { forwardRef } from 'react'

const ParallaxBox = forwardRef(({ label, img }, ref) => {
	return (
		<section
			className='parallax-container'
			style={{
				backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.75)
    ), url(${img})`,
			}}
			ref={ref}
			id={label}
		>
			<h1 className='parallax-label'>{label}</h1>
		</section>
	)
})

export default ParallaxBox
