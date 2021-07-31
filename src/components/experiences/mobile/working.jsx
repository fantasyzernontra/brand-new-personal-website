import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const WorkingMobile = forwardRef(({ works, lang }, ref) => {
	return (
		<section className='exp-working-mobile-container' ref={ref}>
			{works.map((item, index) => (
				<div className='working-mobile-container' key={index}>
					<section className='working-logo'>
						<img
							src={item.exp_logo.mobile.url}
							alt={item.exp_logo.mobile.alt}
							width={item.exp_logo.mobile.width}
							height={item.exp_logo.mobile.height}
						/>
					</section>
					<section id='content-mobile'>
						<div className='working-content-mobile-container'>
							<span className='working-content-label-mobile en-regular'>
								job title
							</span>
							<h2 className='working-title-mobile en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='working-content-mobile-container'>
							<span className='working-content-label-mobile en-regular'>
								job description
							</span>
							<h2 className='working-title-mobile en-regular'>
								{item.exp_desc}
							</h2>
						</div>
						<div className='working-content-mobile-container'>
							<span className='working-content-label-mobile en-regular'>
								incharged year
							</span>
							<h2 className='working-title-mobile en-regular'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='working-content-mobile-container'>
							<span className='working-content-label-mobile en-regular'>
								work place website
							</span>
							<h2 className='working-title-mobile duration-500 hover:text-soft_pink text-base en-regular'>
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

export default WorkingMobile
