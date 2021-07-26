import React, { useState } from 'react'

import FullCurtain from '../../components/animation/full-curtain'
import SideBar from '../../components/sidebar'

const Contact = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<FullCurtain isOpen={isOpenCurtain} />
			<section className='bg-gray-100 w-full'>Contact</section>
		</SideBar>
	)
}

export default Contact
