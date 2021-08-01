import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const InternshipMobile = forwardRef(({ internships, lang }, ref) => {
	return (
		<section className='exp-internship-mobile-container' ref={ref}>
			{internships.map((item, index) => {
				const internship = lang === 'en' ? item.en : item.th
				return (
					<div className='internship-mobile-container' key={index}>
						<section className='internship-logo'>
							<img
								src={internship.exp_logo.mobile.url}
								alt={internship.exp_logo.mobile.alt}
								width={internship.exp_logo.mobile.width}
								height={internship.exp_logo.mobile.height}
							/>
						</section>
						<section id='content-mobile'>
							<div className='internship-content-mobile-container'>
								<span
									className={`internship-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									company name
								</span>
								<h2
									className={`internship-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_full_name}
								</h2>
							</div>
							<div className='internship-content-mobile-container'>
								<span
									className={`internship-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									job description
								</span>
								<h2
									className={`internship-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_desc}
								</h2>
							</div>
							<div className='internship-content-mobile-container'>
								<span
									className={`internship-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									incharged year
								</span>
								<h2
									className={`internship-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_time_period.from} -{' '}
									{internship.exp_time_period.to}
								</h2>
							</div>
							<div className='internship-content-mobile-container'>
								<span
									className={`internship-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									company website
								</span>
								<h2
									className={`internship-title-mobile duration-500 hover:text-soft_pink ${
										lang === 'en' ? 'en-reglar' : 'th-regular'
									}`}
								>
									<Link to={{ pathname: internship.exp_ref }} target='_blank'>
										{internship.exp_ref}
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

export default InternshipMobile
