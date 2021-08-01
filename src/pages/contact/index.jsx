import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOrientation } from '../../utils/useOrientation'
import { useTranslation } from 'react-i18next'

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
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language

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
							<span
								className={`contact-title ${
									currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
								}`}
							>
								{t('contact.desktop.title')}
							</span>
							<p
								className={`contact-description  ${
									currentLanguage === 'en' ? 'en-extralight' : 'th-extralight'
								}`}
							>
								{t('contact.desktop.desc')}
							</p>
						</div>
						<div className='contact-container' id='furthermore-contact'>
							<span
								className={`contact-text ${
									currentLanguage === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<Link
									to={{ pathname: 'mailto:non_nontra@hotmail.com' }}
									target='_parent'
								>
									non_nontra@hotmail.com
								</Link>
							</span>
							<span
								className={`contact-text ${
									currentLanguage === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<Link to={{ pathname: 'tel:+66946211452' }} target='_parent'>
									(+66)94-621-1452
								</Link>
							</span>
						</div>
					</article>
				</section>
			)}
			{isMobile && (
				<section
					className={`contact-main-mobile-container ${
						currentLanguage === 'en' ? 'en-regular' : 'th-regular'
					}`}
				>
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
						<span
							className={`contact-title-mobile ${
								currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{t('contact.mobile.title')}
						</span>
						<span
							className={`contact-email-mobile ${
								currentLanguage === 'en' ? 'en-regular' : 'th-regular'
							}`}
						>
							non_nontra@hotmail.com
						</span>
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
