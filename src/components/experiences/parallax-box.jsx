import { forwardRef } from 'react'

const ParallaxBox = forwardRef(({ label, id, img, lang }, ref) => {
	return (
		<section
			className={`parallax-container ${
				lang === 'en' ? 'en-semibold' : 'th-semibold'
			}`}
			style={{
				backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.75)
    ), url(${img})`,
			}}
			ref={ref}
			id={id}
		>
			<h1 className='parallax-label'>{label}</h1>
		</section>
	)
})

export default ParallaxBox
