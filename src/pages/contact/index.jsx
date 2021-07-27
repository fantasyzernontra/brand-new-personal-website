import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FullCurtain from '../../components/animation/full-curtain'
import HalfLeftCurtain from '../../components/animation/half-left-curtain'
import SideBar from '../../components/sidebar'
import ContactButton from '../../components/contact/contact-button'

import DarkContactButtonData from '../../data/dark-contact-button'
import SelfPhoto from '../../assets/image/self3.jpg'

const Contact = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			{!isOpenCurtain && <FullCurtain isOpen={false} />}
			<HalfLeftCurtain isOpen={true} />
			<section className='contact-main-container'>
				<article className='left'>
					<img src={SelfPhoto} alt='Non Nontra' className='profile-pic' />
				</article>
				<article className='right'>
					<div className='contact-container' id='contact-button'>
						<hr className='w-10 border-hard_pink' />
						{DarkContactButtonData.map((item, index) => (
							<ContactButton
								key={index}
								img={item.img}
								alt={item.alt}
								url={item.url}
							/>
						))}
					</div>
					<div className='contact-speech'>
						<span className='contact-title'>contact me</span>
						<p className='contact-description'>
							If you want to contact me about software development or finding a
							business partner, then e-mail me at non_nontra@hotmail.com
						</p>
					</div>
					<div className='contact-container' id='furthermore-contact'>
						<span className='contact-text'>
							<Link
								to={{ pathname: 'mailto:non_nontra@hotmail.com' }}
								target='_parent'
							>
								non_nontra@hotmail.com
							</Link>
						</span>
						<span className='contact-text'>
							<Link to={{ pathname: 'tel:+66946211452' }} target='_parent'>
								(+66)94-621-1452
							</Link>
						</span>
					</div>
				</article>
			</section>
		</SideBar>
	)
}

export default Contact
