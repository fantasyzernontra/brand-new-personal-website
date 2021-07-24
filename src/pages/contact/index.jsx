import React, { useState } from 'react'

import LandingCurtain from '../../components/animation/landing-curtain'
import SideBar from '../../components/sidebar'

const Contact = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<LandingCurtain isOpen={isOpenCurtain} />
			<div className='bg-gray-100 w-full'>Contact</div>
		</SideBar>
	)
}

export default Contact
