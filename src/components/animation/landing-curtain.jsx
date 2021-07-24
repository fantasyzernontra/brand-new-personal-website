const LandingCurtain = ({ isOpen }) => {
	return <div className={ isOpen ? 'curtain' : 'closed-curtain'} />
}

export default LandingCurtain
