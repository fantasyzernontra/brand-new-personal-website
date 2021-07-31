import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const InternshipMobile = forwardRef(({ internships, lang }, ref) => {
	return (
		<section className='exp-internship-mobile-container' ref={ref}>
			{internships.map((item, index) => (
				<div className='internship-mobile-container' key={index}>
					<section className='internship-logo'>
						<img
							src={item.exp_logo.mobile.url}
							alt={item.exp_logo.mobile.alt}
							width={item.exp_logo.mobile.width}
							height={item.exp_logo.mobile.height}
						/>
					</section>
					<section id='content-mobile'>
						<div className='internship-content-mobile-container'>
							<span className='internship-content-label-mobile en-regular'>
								company name
							</span>
							<h2 className='internship-title-mobile en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='internship-content-mobile-container'>
							<span className='internship-content-label-mobile en-regular'>
								job description
							</span>
							<h2 className='internship-title-mobile en-regular'>
								{item.exp_desc}
							</h2>
						</div>
						<div className='internship-content-mobile-container'>
							<span className='internship-content-label-mobile en-regular'>
								incharged year
							</span>
							<h2 className='internship-title-mobile en-regular'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='internship-content-mobile-container'>
							<span className='internship-content-label-mobile en-regular'>
								company website
							</span>
							<h2 className='internship-title-mobile duration-500 hover:text-soft_pink en-regular'>
								<Link to={{ pathname: item.exp_ref }} target='_blank'>
									{item.exp_ref}
								</Link>
							</h2>
						</div>
					</section>
				</div>
			))}
		</section>
	)
})

export default InternshipMobile
