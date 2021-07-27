const HalfLeftCurtain = ({ isOpen }) => {
	return (
		<div
			className={isOpen ? 'half-left-curtain' : 'closed-half-left-curtain'}
		/>
	)
}

export default HalfLeftCurtain
