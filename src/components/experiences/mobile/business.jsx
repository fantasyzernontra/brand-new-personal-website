import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const BusinessMobile = forwardRef(({ business, lang }, ref) => {
	return (
		<section className='exp-business-mobile-container' ref={ref}>
			{business.map((item, index) => (
				<div className='business-mobile-container' key={index}>
					<section className='business-logo'>
						<img
							src={item.exp_logo.mobile.url}
							alt={item.exp_logo.mobile.alt}
							width={item.exp_logo.mobile.width}
							height={item.exp_logo.mobile.height}
						/>
					</section>
					<section id='content-mobile'>
						<div className='business-content-mobile-container'>
							<span className='business-content-label-mobile en-regular'>
								business name
							</span>
							<h2 className='business-title-mobile en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='business-content-mobile-container'>
							<span className='business-content-label-mobile en-regular'>
								business description
							</span>
							<h2 className='business-title-mobile en-regular'>
								{item.exp_desc}
							</h2>
						</div>
						<div className='business-content-mobile-container'>
							<span className='business-content-label-mobile en-regular'>
								establishment year
							</span>
							<h2 className='business-title-mobile en-regular'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='business-content-mobile-container'>
							<span className='business-content-label-mobile en-regular'>
								business website
							</span>
							<h2 className='business-title-mobile duration-500 hover:text-soft_pink text-base en-regular'>
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

export default BusinessMobile
