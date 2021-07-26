const ParallaxBox = ({ label, img }) => {
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
		>
			<h1>{label}</h1>
		</section>
	)
}

export default ParallaxBox
