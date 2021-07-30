import React, { useState, useRef, useEffect } from 'react'
import { useObserverWithUnObserve } from '../../utils/useObserverWithUnObserver'
import { useOrientation } from '../../utils/useOrientation'

import FullCurtain from '../../components/animation/full-curtain'
import SideBar from '../../components/sidebar'
import ParallaxBox from '../../components/experiences/parallax-box'
import ScrollToDiscover from '../../components/scroll-to-discover'

// Desktop
import Education from '../../components/experiences/ui/education'
import Internship from '../../components/experiences/ui/internship'
import Business from '../../components/experiences/ui/business'
import Working from '../../components/experiences/ui/working'

import ExpreriencesData from '../../data/experiences'

const Experiences = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)
	const educations = ExpreriencesData.filter((item) => item.exp_type === 1)
	const internships = ExpreriencesData.filter((item) => item.exp_type === 2)
	const business = ExpreriencesData.filter((item) => item.exp_type === 3)
	const work_as_an_employee = ExpreriencesData.filter(
		(item) => item.exp_type === 4
	)
	const observer = useObserverWithUnObserve
	const educationContainerWrapper = useRef(null)
	const internshipContainerWrapper = useRef(null)
	const businessContainerWrapper = useRef(null)
	const workContainerWrapper = useRef(null)
	const isMobile = useOrientation()

	useEffect(() => {
		// observer(educationContainerWrapper.current, 'education-container-appear')
		// observer(internshipContainerWrapper.current, 'internship-container-appear')
		// observer(businessContainerWrapper.current, 'business-container-appear')
		// if (work_as_an_employee.length !== 0)
		// 	observer(workContainerWrapper.current, 'working-container-appear')
	}, [observer, work_as_an_employee.length])

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<FullCurtain isOpen={isOpenCurtain} />
			{!isMobile && (
				<section className='exp-main-container'>
					<ParallaxBox
						label='education'
						img={
							'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
						}
					/>
					<Education educations={educations} ref={educationContainerWrapper} />
					<ParallaxBox
						label='internship'
						img={
							'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						}
					/>
					<Internship
						internships={internships}
						ref={internshipContainerWrapper}
					/>
					<ParallaxBox
						label='business'
						img={
							'https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						}
					/>
					<Business business={business} ref={businessContainerWrapper} />
					{work_as_an_employee.length !== 0 && (
						<ParallaxBox
							label='working'
							img={
								'https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
							}
						/>
					)}
					{work_as_an_employee.length !== 0 && (
						<Working
							work_as_an_employee={business}
							ref={workContainerWrapper}
						/>
					)}
					<ScrollToDiscover />
				</section>
			)}
		</SideBar>
	)
}

export default Experiences
