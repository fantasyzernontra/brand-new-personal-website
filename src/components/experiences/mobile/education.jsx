import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const EducationMobile = forwardRef(({ educations, lang }, ref) => {
	return (
		<section className='exp-education-mobile-container' ref={ref}>
			{educations.map((item, index) => (
				<div className='education-mobile-container' key={index}>
					<section className='education-logo'>
						<img
							src={item.exp_logo.mobile.url}
							alt={item.exp_logo.mobile.alt}
							width={item.exp_logo.mobile.width}
							height={item.exp_logo.mobile.height}
						/>
					</section>
					<section id='content-mobile'>
						<div className='education-content-mobile-container'>
							<span className='education-content-label-mobile en-regular'>
								school name
							</span>
							<h2 className='education-title-mobile en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='education-content-mobile-container'>
							<span className='education-content-label-mobile en-regular'>
								department
							</span>
							<h2 className='education-title-mobile en-regular'>
								{item.exp_desc}
							</h2>
						</div>
						<div className='education-content-mobile-container'>
							<span className='education-content-label-mobile en-regular'>
								year in academic
							</span>
							<h2 className='education-title-mobile en-regular'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='education-content-mobile-container'>
							<span className='education-content-label-mobile en-regular'>
								academic website
							</span>
							<h2 className='education-title-mobile duration-500 hover:text-soft_pink en-regular'>
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

export default EducationMobile
