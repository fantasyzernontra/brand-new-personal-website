import { Link, useLocation } from 'react-router-dom'
import SideBarText from '../data/sidebar'

const SideBar = ({ children }) => {
	const location = useLocation()

	return (
		<div className='flex flex-row'>
			<nav className='h-screen w-28 flex flex-col justify-between'>
				<h1 className='sidebar_header'>
					<Link to='/'>NON</Link>
				</h1>
				<div className='sidebar_text_container' style={{ height: '90%' }}>
					{SideBarText.map((text, index) => (
						<span
							key={index}
							className={
								location.pathname.replace('/', '').includes(text) ||
								(location.pathname === '/' && text === 'about')
									? 'active_sidebar_text'
									: 'inactive_sidebar_text'
							}
						>
							<Link to={text === 'about' ? '' : text}>{text}</Link>
						</span>
					))}
				</div>
			</nav>
			{children}
		</div>
	)
}

export default SideBar
