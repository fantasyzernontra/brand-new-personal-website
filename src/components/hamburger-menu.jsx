import { Link, useHistory, useLocation } from 'react-router-dom'

import DarkContactButton from '../components/contact/contact-button'

import NavBarData from '../data/navbar'
import ContactButtonData from '../data/dark-contact-button'

const HamburgerMenu = ({ setIsOpenCurtain }) => {
	const history = useHistory()
	const location = useLocation()

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

	return (
		<div id='menu' className='mobile-nav-menu'>
			<div className='nav-menu-header'>
				<div className='nav-menu-lang'>
					<span>EN</span>
					<span>/</span>
					<span>TH</span>
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
				{NavBarData.map((text, index) => (
					<div
						key={index}
						className={`navLink ${
							location.pathname.replace('/', '').includes(text) ||
							(location.pathname === '/' && text === 'about')
								? 'active'
								: 'inactive'
						}`}
					>
						<span
							onClick={() => {
								if (
									location.pathname.replace('/', '') !== text &&
									!(location.pathname === '/' && text === 'about')
								) {
									setIsOpenCurtain(false)
									setTimeout(
										() => history.push(text === 'about' ? '' : '/' + text),
										1500
									)
								}
							}}
						>
							{text}
						</span>
						<hr className='navlink-line' />
					</div>
				))}
			</div>
			<div className='nav-menu-footer'>
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
