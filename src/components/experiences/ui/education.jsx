import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Education = forwardRef(({ educations, lang }, ref) => {
	return (
		<section className='exp-education-container' ref={ref}>
			{educations.map((item, index) => (
				<div key={index} className='education-container'>
					<section className='left'>
						<img
							src={item.exp_logo.desktop.url}
							alt={item.exp_logo.desktop.alt}
							width={item.exp_logo.desktop.width}
							height={item.exp_logo.desktop.height}
						/>
					</section>
					<section className='right'>
						<div className='education-content-container'>
							<span className='education-content-label en-regular'>
								school name
							</span>
							<h2 className='education-title en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='education-content-container'>
							<span className='education-content-label en-regular'>
								department
							</span>
							<h2 className='education-title en-regular'>{item.exp_desc}</h2>
						</div>
						<div className='education-content-container'>
							<span className='education-content-label en-regular'>
								year in academic
							</span>
							<h2 className='education-title en-regular'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='education-content-container'>
							<span className='education-content-label en-regular'>academic website</span>
							<h2 className='education-title duration-500 hover:text-soft_pink en-regular'>
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

export default Education
