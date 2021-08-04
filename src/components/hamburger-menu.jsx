import { Link, useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useActiveHamburgerMenu } from '../utils/useActiveHamburgerMenu'
import { useNavigate } from '../utils/useNavigate'

import DarkContactButton from '../components/contact/contact-button'

import ContactButtonData from '../data/dark-contact-button'

const HamburgerMenu = ({ setIsOpenCurtain }) => {
	const history = useHistory()
	const location = useLocation()
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language
	const onActiveLink = useActiveHamburgerMenu

	function navToggle() {
		const btnDark = document.getElementById('menuBtn-dark')
		const btnLight = document.getElementById('menuBtn-light')
		const menu = document.getElementById('menu')

		if (btnDark) btnDark.classList.toggle('open')
		if (btnLight) btnLight.classList.toggle('open')
		menu.classList.remove('active')
		menu.classList.add('inactive')
		menu.classList.toggle('animated')
	}

	const onRouteChange = (text) => {
		const navigate = useNavigate
		const route = navigate(text, location.pathname, currentLanguage)
		if (route) {
			setIsOpenCurtain(false)
			setTimeout(() => history.push(route), 1500)
		}
	}

	return (
		<div id='menu' className='mobile-nav-menu'>
			<div className='nav-menu-header'>
				<div className='nav-menu-lang'>
					<span
						className={
							currentLanguage === 'en'
								? 'text-hard_blue en-semibold'
								: 'text-gray-400 th-regular'
						}
						onClick={() => {
							setIsOpenCurtain(false)
							setTimeout(() => {
								i18n.changeLanguage('en')
								localStorage.setItem('lang', 'en')
								history.go(0)
							}, 1500)
						}}
					>
						EN
					</span>
					<span
						className={
							currentLanguage === 'en'
								? 'text-hard_blue en-regular'
								: 'text-hard_blue th-regular'
						}
					>
						/
					</span>
					<span
						className={
							currentLanguage === 'th'
								? 'text-hard_blue th-semibold'
								: 'text-gray-400 en-regular'
						}
						onClick={() => {
							setIsOpenCurtain(false)
							setTimeout(() => {
								i18n.changeLanguage('th')
								localStorage.setItem('lang', 'th')
								history.go(0)
							}, 1500)
						}}
					>
						TH
					</span>
				</div>
				<button
					id='menuBtn-dark'
					className='hamburger block lg:hidden focus:outline-none tracking-widest'
					type='button'
					onClick={navToggle}
				>
					<span className='dark-hamburger-topbun'></span>
					<span className='dark-hamburger-bottombun'></span>
				</button>
			</div>
			<div className='nav-menu-content'>
				{[...t('hamburger_menu', { returnObjects: true })].map(
					(text, index) => (
						<div
							key={index}
							className={`navLink ${
								currentLanguage === 'en' ? 'en-regular' : 'th-regular'
							} ${
								onActiveLink(text, location.pathname, currentLanguage)
									? 'active'
									: 'false'
							}`}
						>
							<span
								onClick={() => {
									onRouteChange(text)
								}}
							>
								{text}
							</span>
							<hr className='navlink-line' />
						</div>
					)
				)}
			</div>
			<div
				className={`nav-menu-footer ${
					currentLanguage === 'en' ? 'en-regular' : 'th-regular'
				}`}
			>
				<span>
					<Link
						to={{ pathname: 'mailto:non_nontra@hotmail.com' }}
						target='_blank'
					>
						non_nontra@hotmail.com
					</Link>
				</span>
				<div className='flex flex-row gap-x-1'>
					<DarkContactButton
						img={ContactButtonData[1].img}
						alt={ContactButtonData[1].alt}
					/>
					<DarkContactButton
						img={ContactButtonData[2].img}
						alt={ContactButtonData[2].alt}
					/>
				</div>
			</div>
		</div>
	)
}

export default HamburgerMenu
