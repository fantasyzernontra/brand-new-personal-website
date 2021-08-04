import { Link } from 'react-router-dom'

const VisitingLabelMobile = ({ label, url, lang }) => {
	return (
		<Link to={{ pathname: url }} target='_blank'>
			<div className='visiting-container-mobile'>
				<hr className='visiting-line-mobile' />
				<span
					className={`visiting-label-mobile ${
						lang === 'en' ? 'en-regular' : 'th-regular'
					}`}
				>
					{label}
				</span>
				<hr className='visiting-line-mobile' />
			</div>
		</Link>
	)
}

export default VisitingLabelMobile
