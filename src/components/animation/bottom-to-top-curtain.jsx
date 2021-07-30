const BottomToTopCurtain = ({ isOpen }) => {
	return (
		<div
			className={
				isOpen ? 'bottom-to-top-curtain' : 'closed-bottom-to-top-curtain'
			}
		/>
	)
}

export default BottomToTopCurtain
