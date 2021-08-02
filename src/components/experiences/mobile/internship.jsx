import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const InternshipMobile = forwardRef(({ internships, lang }, ref) => {
	const { t } = useTranslation()

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
									{t('experiences.internship.label1')}
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
									{t('experiences.internship.label2')}
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
									{t('experiences.internship.label3')}
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
									{t('experiences.internship.label4')}
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
							<div className='internship-content-mobile-container'>
								<span
									className={`internship-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{t('experiences.internship.label5')}
								</span>
								{internship.exp_tools.map((item, index) => (
									<h2
										key={index}
										className={`internship-title-mobile ${
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

export default InternshipMobile
