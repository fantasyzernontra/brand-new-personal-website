import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const WorkingMobile = forwardRef(({ works, lang }, ref) => {
	return (
		<section className='exp-working-mobile-container' ref={ref}>
			{works.map((item, index) => {
				const work = lang === 'en' ? item.en : item.th
				return (
					<div className='working-mobile-container' key={index}>
						<section className='working-logo'>
							<img
								src={work.exp_logo.mobile.url}
								alt={work.exp_logo.mobile.alt}
								width={work.exp_logo.mobile.width}
								height={work.exp_logo.mobile.height}
							/>
						</section>
						<section id='content-mobile'>
							<div className='working-content-mobile-container'>
								<span
									className={`working-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									job title
								</span>
								<h2
									className={`working-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{work.exp_full_name}
								</h2>
							</div>
							<div className='working-content-mobile-container'>
								<span
									className={`working-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									job description
								</span>
								<h2
									className={`working-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{work.exp_desc}
								</h2>
							</div>
							<div className='working-content-mobile-container'>
								<span
									className={`working-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									incharged year
								</span>
								<h2
									className={`working-title-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									{work.exp_time_period.from} - {work.exp_time_period.to}
								</h2>
							</div>
							<div className='working-content-mobile-container'>
								<span
									className={`working-content-label-mobile ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									work place website
								</span>
								<h2
									className={`working-title-mobile duration-500 hover:text-soft_pink text-base ${
										lang === 'en' ? 'en-regular' : 'th-regular'
									}`}
								>
									<Link to={{ pathname: work.exp_ref }} target='_blank'>
										{work.exp_ref}
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

export default WorkingMobile
