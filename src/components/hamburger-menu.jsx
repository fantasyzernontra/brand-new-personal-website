import { Link } from 'react-router-dom'

import DarkContactButton from '../components/contact/contact-button'

import ContactButtonData from '../data/contact-button'

const HamburgerMenu = () => {
	return (
		<div id='menu' className='mobile-nav-menu'>
			<div className='nav-menu-header'>
				<div className='nav-menu-lang'>
					<span>EN</span>
					<span>/</span>
					<span>TH</span>
				</div>
			</div>
			<div className='nav-menu-content'>
				<div className='navLink active'>
					<span>
						<Link to='/'>about</Link>
					</span>
					<hr className='navlink-line' />
				</div>
				<div className='navLink'>
					<span>
						<Link to='/works'>works</Link>
					</span>
					<hr className='navlink-line' />
				</div>
				<div className='navLink'>
					<span>
						<Link to='/experiences'>experiences</Link>
					</span>
					<hr className='navlink-line' />
				</div>
				<div className='navLink'>
					<span>
						<Link to='/contact'>contact</Link>
					</span>
					<hr className='navlink-line' />
				</div>
			</div>
			<div className='nav-menu-footer'>
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
	)
}

export default HamburgerMenu
