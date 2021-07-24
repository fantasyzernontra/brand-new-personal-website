const HalfCurtain = ({ isOpen }) => {
	return <div className={isOpen ? 'half-curtain' : 'closed-half-curtain'} />
}

export default HalfCurtain
