import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Education = forwardRef(({ educations, lang }, ref) => {
	return (
		<section className='exp-education-container' ref={ref}>
			{educations.map((item, index) => {
				const education = lang === 'en' ? item.en : item.th

				return (
					<div key={index} className='education-container'>
						<section className='left'>
							<img
								src={education.exp_logo.desktop.url}
								alt={education.exp_logo.desktop.alt}
								width={education.exp_logo.desktop.width}
								height={education.exp_logo.desktop.height}
							/>
						</section>
						<section className='right'>
							<div className='education-content-container'>
								<span
									className={`education-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									school name
								</span>
								<h2
									className={`education-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{education.exp_full_name}
								</h2>
							</div>
							<div className='education-content-container'>
								<span
									className={`education-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									department
								</span>
								<h2
									className={`education-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{education.exp_desc}
								</h2>
							</div>
							<div className='education-content-container'>
								<span
									className={`education-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									year in academic
								</span>
								<h2
									className={`education-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{education.exp_time_period.from} -{' '}
									{education.exp_time_period.to}
								</h2>
							</div>
							<div className='education-content-container'>
								<span
									className={`education-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									academic website
								</span>
								<h2
									className={`education-title duration-500 hover:text-soft_pink ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									<Link to={{ pathname: education.exp_ref }} target='_blank'>
										{education.exp_ref}
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

export default Education
