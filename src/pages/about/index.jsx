import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import FullCurtain from '../../components/animation/full-curtain'
import SideBar from '../../components/sidebar'
import ContactButton from '../../components/about/contact-button'
import LigthHamburgerButton from '../../components/light-hamburger-button'
import HamBurgerMenu from '../../components/hamburger-menu'

import ContactButtonData from '../../data/contact-button'

const About = () => {
	const [isOpenCurtain, setIsOpenCurtain] = useState(true)
	const [t, i18n] = useTranslation()
	const currentLanguage = i18n.language

	return (
		<SideBar setIsOpenCurtain={setIsOpenCurtain}>
			<HamBurgerMenu setIsOpenCurtain={setIsOpenCurtain} />
			<FullCurtain isOpen={isOpenCurtain} />
			<section className='about_container'>
				<article className='about_header'>
					<h2
						className={`text-lg md:text-2xl ${
							currentLanguage === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						Non Nontra
					</h2>
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
					<LigthHamburgerButton />
				</article>
				<article className='about_content'>
					<div className='welcome_container'>
						<h1
							className={`welcome ${
								currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{t('about.welcome')}
						</h1>
						<hr className='welcome-line' />
						<div
							className={`about_description ${
								currentLanguage === 'en' ? 'en-extralight' : 'th-extralight'
							}`}
						>
							<p className='about-desc-element'>{t('about.desc1')}</p>
							<p className='about-desc-element'> {t('about.desc2')}</p>
							<p className='about-desc-element'> {t('about.desc3')}</p>
							<p className='about-desc-element'> {t('about.desc4')}</p>
						</div>
					</div>
				</article>
				<article className='about_footer'>
					<div className='about_contact_element'>
						<span
							className={`about_contact_header ${
								currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{t('about.contact.email_label')}:
						</span>
						<span
							className={`about_contact_sub_header ${
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
					</div>
					{/* Desktop, Tablet Version */}
					<div className='about_contact_element hidden md:flex'>
						<span
							className={`about_contact_header ${
								currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{t('about.contact.phone_label')}:
						</span>
						<span
							className={`about_contact_sub_header ${
								currentLanguage === 'en' ? 'en-regular' : 'th-regular'
							}`}
						>
							<Link to={{ pathname: 'tel:+66946211452' }} target='_parent'>
								(+66)94-621-1452
							</Link>
						</span>
					</div>
					{/* Mobile Version */}
					<div className='flex flex-row gap-x-2 md:hidden'>
						<ContactButton
							img={ContactButtonData[1].img}
							alt={ContactButtonData[1].alt}
							url={ContactButtonData[1].url}
						/>
						<ContactButton
							img={ContactButtonData[2].img}
							alt={ContactButtonData[2].alt}
							url={ContactButtonData[2].url}
						/>
					</div>
				</article>
			</section>
		</SideBar>
	)
}

export default About
