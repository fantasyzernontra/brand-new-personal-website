const SecondHalfCurtain = ({ isOpen }) => {
	return (
		<div
			className={isOpen ? 'left-right-curtain' : 'closed-left-right-curtain'}
		/>
	)
}

export default SecondHalfCurtain
