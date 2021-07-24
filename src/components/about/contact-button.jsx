import { Link } from 'react-router-dom'

const ContactButton = ({ img, alt, url }) => {
	return (
		<div className='contact-button'>
			<Link to={{ pathname: url }} target='_blank'>
				<img src={img} alt={alt} style={{ width: '35px', height: '35px' }} />
			</Link>
		</div>
	)
}

export default ContactButton
