import { useLocation, useHistory } from 'react-router-dom'
import SideBarText from '../data/sidebar'

const SideBar = ({ children, setIsOpenCurtain, withOutAnimation }) => {
	const location = useLocation()
	const history = useHistory()

	return (
		<div className='flex flex-row'>
			<nav
				className='sidebar_container'
				id={withOutAnimation ? 'without-animation' : ''}
			>
				<div className='sidebar_header_container'>
					<h1 className='sidebar_header'>NON</h1>
					<h1 className='sidebar_header text-hard_pink'>.</h1>
				</div>
				<div className='sidebar_text_container'>
					{SideBarText.map((text, index) => (
						<span
							key={index}
							className={
								location.pathname.replace('/', '').includes(text) ||
								(location.pathname === '/' && text === 'about')
									? 'active_sidebar_text'
									: 'inactive_sidebar_text'
							}
							onClick={() => {
								setIsOpenCurtain(false)
								setTimeout(
									() => history.push(text === 'about' ? '' : '/' + text),
									1500
								)
							}}
						>
							{text}
						</span>
					))}
				</div>
				<div className='sidebar_lang_container'>
					<span className='active_sidebar_lang_text'>EN</span>
					<hr className='h-1 bg-primary_pink w-full' />
					<span className='inactive_sidebar_lang_text'>TH</span>
				</div>
			</nav>
			{children}
		</div>
	)
}

export default SideBar
