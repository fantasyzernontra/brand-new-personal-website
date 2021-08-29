import { useLocation, useHistory } from 'react-router-dom'
import { useOrientation } from '../utils/useOrientation'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '../utils/useNavigate'
import { useActiveSidebar } from '../utils/useActiveSidebar'

const SideBar = ({ children, setIsOpenCurtain, withOutAnimation }) => {
	const location = useLocation()
	const history = useHistory()
	const isMobile = useOrientation()
	const [t, i18n] = useTranslation()
	const currentLanguage = i18n.language
	const onActiveSideBar = useActiveSidebar

	const onRouteChange = (text) => {
		const navigate = useNavigate
		const route = navigate(text, location.pathname, currentLanguage)
		if (route) {
			setIsOpenCurtain(false)
			setTimeout(() => history.push(route), 1500)
		}
	}

	return (
		<div className='flex flex-row'>
			{!isMobile && (
				<nav
					className='sidebar_container'
					id={withOutAnimation ? 'without-animation' : ''}
				>
					<div
						className='sidebar_header_container'
						onClick={() => {
							if (location.pathname !== '/') {
								setIsOpenCurtain(false)
								setTimeout(() => history.push('/'), 1500)
							}
						}}
					>
						<h1
							className={`sidebar_header ${
								currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							NON
						</h1>
						<h1 className='sidebar_header text-hard_pink en-semibold'>.</h1>
					</div>
					<div className='sidebar_text_container'>
						{[...t('sidebar', { returnObjects: true })].map((text, index) => (
							<span
								key={index}
								className={onActiveSideBar(
									text,
									location.pathname,
									currentLanguage
								)}
								onClick={() => {
									onRouteChange(text)
								}}
							>
								{text}
							</span>
						))}
					</div>
					<div className='sidebar_lang_container'>
						<span
							className={
								currentLanguage === 'en'
									? 'active_sidebar_lang_text en-semibold'
									: 'inactive_sidebar_lang_text th-regular'
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
						<hr className='h-1 bg-primary_pink w-full' />
						<span
							className={
								currentLanguage === 'th'
									? 'active_sidebar_lang_text th-semibold'
									: 'inactive_sidebar_lang_text en-regular'
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
				</nav>
			)}
			{children}
		</div>
	)
}

export default SideBar
