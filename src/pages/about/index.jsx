import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FullCurtain from '../../components/animation/full-curtain'
import SideBar from '../../components/sidebar'
import ContactButton from '../../components/about/contact-button'

import ContactButtonData from '../../data/contact-button'

const About = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<FullCurtain isOpen={isOpenCurtain} />
			<div className='about_container'>
				<section className='about_header'>
					<h2 className='text-2xl'>Non Nontra</h2>
					<div className='about-header-contact-button-container'>
						<hr className='w-10 border-hard_pink' />
						{ContactButtonData.map((item, index) => (
							<ContactButton
								key={index}
								img={item.img}
								alt={item.alt}
								url={item.url}
							/>
						))}
					</div>
				</section>
				<section className='about_content'>
					<div className='welcome_container'>
						<h1 className='welcome'>Hi! I'm Non</h1>
						<hr className='welcome-line' />
						<article className='about_description'>
							<p className='ml-48 text-2xl'>
								Currently, I'm a junior computer science student.
							</p>
							<p className='ml-48 text-2xl'>
								Also, I'm an entrepreneur who is specialise
							</p>
							<p className='ml-48 text-2xl'>
								in Full Stack Web Development and Mobile Development.
							</p>
							<p className='ml-48 text-2xl'>
								And I'm a working with myself consistently as a Weight Lifter.
							</p>
						</article>
					</div>
				</section>
				<section className='about_footer'>
					<div className='about_contact_element'>
						<span className='about_contact_header'>E-mail:</span>
						<span className='about_contact_sub_header'>
							<Link
								to={{ pathname: 'mailto:non_nontra@hotmail.com' }}
								target='_parent'
							>
								non_nontra@hotmail.com
							</Link>
						</span>
					</div>
					<div className='about_contact_element'>
						<span className='about_contact_header'>Phone:</span>
						<span className='about_contact_sub_header'>
							<Link to={{ pathname: 'tel:+66946211452' }} target='_parent'>
								(+66)94-621-1452
							</Link>
						</span>
					</div>
				</section>
			</div>
		</SideBar>
	)
}

export default About
