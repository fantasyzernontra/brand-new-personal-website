import { Link } from 'react-router-dom'

const VisitingLabel = ({ label, url }) => {
	return (
		<Link to={{ pathname: url }} target='_blank'>
			<div className='visiting-container'>
				<hr className='visiting-line' />
				<span className='visiting-label'>VISIT {label}</span>
				<hr className='visiting-line' />
			</div>
		</Link>
	)
}

export default VisitingLabel
