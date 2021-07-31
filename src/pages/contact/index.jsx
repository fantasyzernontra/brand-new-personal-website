import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOrientation } from '../../utils/useOrientation'

import FullCurtain from '../../components/animation/full-curtain'
import HalfLeftCurtain from '../../components/animation/half-left-curtain'
import BottomToTopCurtain from '../../components/animation/bottom-to-top-curtain'
import SideBar from '../../components/sidebar'
import ContactButton from '../../components/contact/contact-button'
import LightHamburgerButton from '../../components/light-hamburger-button'
import HamburgerMenu from '../../components/hamburger-menu'

import DarkContactButtonData from '../../data/dark-contact-button'
import SelfPhoto from '../../assets/image/self3.jpg'

const Contact = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)
	const isMobile = useOrientation()

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			{!isOpenCurtain && <FullCurtain isOpen={false} />}
			{!isMobile && <HalfLeftCurtain isOpen={true} />}
			{isMobile && <BottomToTopCurtain isOpen={true} />}
			{isMobile && <HamburgerMenu setIsOpenCurtain={setIsOpenCurtain} />}
			{!isMobile && (
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
							<span className='contact-title en-semibold'>contact me</span>
							<p className='contact-description en-extralight'>
								If you want to contact me about software development or finding
								a business partner, then e-mail me at non_nontra@hotmail.com
							</p>
						</div>
						<div className='contact-container' id='furthermore-contact'>
							<span className='contact-text en-regular'>
								<Link
									to={{ pathname: 'mailto:non_nontra@hotmail.com' }}
									target='_parent'
								>
									non_nontra@hotmail.com
								</Link>
							</span>
							<span className='contact-text en-regular'>
								<Link to={{ pathname: 'tel:+66946211452' }} target='_parent'>
									(+66)94-621-1452
								</Link>
							</span>
						</div>
					</article>
				</section>
			)}
			{isMobile && (
				<section className='contact-main-mobile-container en-regular'>
					<div className='profile-pic-mobile-container'>
						<div className='absolute top-7 left-7'>
							<span className='text-white text-lg'>Non Nontra</span>
						</div>
						<div className='absolute top-5 right-10'>
							<LightHamburgerButton />
						</div>
						<img
							src={SelfPhoto}
							alt='Non Nontra'
							className='profile-pic-mobile'
						/>
					</div>
					<div className='contact-content-mobile-container'>
						<span className='contact-title-mobile en-semibold'>contact me</span>
						<span className='contact-email-mobile'>non_nontra@hotmail.com</span>
						<div className='contact-button-mobile-container'>
							{DarkContactButtonData.map((item, index) => (
								<ContactButton
									key={index}
									img={item.img}
									alt={item.alt}
									url={item.url}
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</SideBar>
	)
}

export default Contact
