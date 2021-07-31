import { useLocation, useHistory } from 'react-router-dom'
import { useOrientation } from '../utils/useOrientation'
import SideBarText from '../data/sidebar'

const SideBar = ({ children, setIsOpenCurtain, withOutAnimation }) => {
	const location = useLocation()
	const history = useHistory()
	const isMobile = useOrientation()

	return (
		<div className='flex flex-row'>
			{!isMobile && (
				<nav
					className='sidebar_container'
					id={withOutAnimation ? 'without-animation' : ''}
				>
					<div
						className='sidebar_header_container'
						onClick={() => history.push('/')}
					>
						<h1 className='sidebar_header en-semibold'>NON</h1>
						<h1 className='sidebar_header text-hard_pink'>.</h1>
					</div>
					<div className='sidebar_text_container'>
						{SideBarText.map((text, index) => (
							<span
								key={index}
								className={
									location.pathname.replace('/', '').includes(text) ||
									(location.pathname === '/' && text === 'about')
										? 'active_sidebar_text en-semibold'
										: 'inactive_sidebar_text en-regular'
								}
								onClick={() => {
									if (
										!location.pathname.replace('/', '').includes(text) &&
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
						))}
					</div>
					<div className='sidebar_lang_container'>
						<span className='active_sidebar_lang_text en-semibold'>EN</span>
						<hr className='h-1 bg-primary_pink w-full' />
						<span className='inactive_sidebar_lang_text en-regular'>TH</span>
					</div>
				</nav>
			)}
			{children}
		</div>
	)
}

export default SideBar
