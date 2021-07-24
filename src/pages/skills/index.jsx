import React, { useState } from 'react'

import SideBar from '../../components/sidebar'
import LandingCurtain from '../../components/animation/landing-curtain'

const Skills = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<LandingCurtain isOpen={isOpenCurtain} />
			<div className='bg-gray-100 w-full'>Skills</div>
		</SideBar>
	)
}

export default Skills
