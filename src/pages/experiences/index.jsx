import React, { useState } from 'react'

import LandingCurtain from '../../components/animation/landing-curtain'
import SideBar from '../../components/sidebar'

const Experiences = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<LandingCurtain isOpen={isOpenCurtain} />
			<div className='bg-gray-100 w-full'>Experiences</div>
		</SideBar>
	)
}

export default Experiences
