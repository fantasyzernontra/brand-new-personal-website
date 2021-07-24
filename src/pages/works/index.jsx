import React, { useState } from 'react'

import SideBar from '../../components/sidebar'
import HalfCurtain from '../../components/animation/half-curtain'

const Works = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<HalfCurtain isOpen={isOpenCurtain} />
			<div className='works-container'></div>
		</SideBar>
	)
}

export default Works
