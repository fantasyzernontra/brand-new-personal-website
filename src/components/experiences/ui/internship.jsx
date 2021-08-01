import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Internship = forwardRef(({ internships, lang }, ref) => {
	return (
		<section className='exp-internship-container' ref={ref}>
			{internships.map((item, index) => {
				const internship = lang === 'en' ? item.en : item.th

				return (
					<div key={index} className='internship-container'>
						<section className='left'>
							<img
								src={internship.exp_logo.desktop.url}
								alt={internship.exp_logo.desktop.alt}
								width={internship.exp_logo.desktop.width}
								height={internship.exp_logo.desktop.height}
							/>
						</section>
						<section className='right'>
							<div className='internship-content-container'>
								<span
									className={`internship-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									company name
								</span>
								<h2
									className={`internship-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_full_name}
								</h2>
							</div>
							<div className='internship-content-container'>
								<span
									className={`internship-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									job description
								</span>
								<h2
									className={`internship-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_desc}
								</h2>
							</div>
							<div className='internship-content-container'>
								<span
									className={`internship-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									incharged year
								</span>
								<h2
									className={`internship-title ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{internship.exp_time_period.from}
								</h2>
							</div>
							<div className='internship-content-container'>
								<span
									className={`internship-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									company website
								</span>
								<h2 className='internship-title duration-500 hover:text-soft_pink en-regular'>
									<Link to={{ pathname: internship.exp_ref }} target='_blank'>
										{internship.exp_ref}
									</Link>
								</h2>
							</div>
							<div className='internship-content-container'>
								<span
									className={`internship-content-label ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									tools
								</span>
								{internship.exp_tools.map((item, index) => (
									<h2
										key={index}
										className={`internship-title ${
											lang === 'en' ? 'en-regular' : 'th-regular'
										}`}
									>
										{item}
									</h2>
								))}
							</div>
						</section>
					</div>
				)
			})}
		</section>
	)
})

export default Internship
