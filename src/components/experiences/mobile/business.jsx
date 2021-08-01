import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const BusinessMobile = forwardRef(({ business, lang }, ref) => {
	return (
		<section className='exp-business-mobile-container' ref={ref}>
			{business.map((item, index) => {
				const business = lang === 'en' ? item.en : item.th
				return (
					<div className='business-mobile-container' key={index}>
						<section className='business-logo'>
							<img
								src={business.exp_logo.mobile.url}
								alt={business.exp_logo.mobile.alt}
								width={business.exp_logo.mobile.width}
								height={business.exp_logo.mobile.height}
							/>
						</section>
						<section id='content-mobile'>
							<div className='business-content-mobile-container'>
								<span
									className={`business-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									business name
								</span>
								<h2
									className={`business-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{business.exp_full_name}
								</h2>
							</div>
							<div className='business-content-mobile-container'>
								<span
									className={`business-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									business description
								</span>
								<h2
									className={`business-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{business.exp_desc}
								</h2>
							</div>
							<div className='business-content-mobile-container'>
								<span
									className={`business-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									establishment year
								</span>
								<h2
									className={`business-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{business.exp_time_period.from} -{' '}
									{business.exp_time_period.to}
								</h2>
							</div>
							<div className='business-content-mobile-container'>
								<span
									className={`business-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									business website
								</span>
								<h2
									className={`business-title-mobile duration-500 hover:text-soft_pink text-base ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									<Link to={{ pathname: business.exp_ref }} target='_blank'>
										{business.exp_ref}
									</Link>
								</h2>
							</div>
						</section>
					</div>
				)
			})}
		</section>
	)
})

export default BusinessMobile
