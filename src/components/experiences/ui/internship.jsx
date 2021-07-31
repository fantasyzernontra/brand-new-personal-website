import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Internship = forwardRef(({ internships, lang }, ref) => {
	return (
		<section className='exp-internship-container' ref={ref}>
			{internships.map((item, index) => (
				<div key={index} className='internship-container'>
					<section className='left'>
						<img
							src={item.exp_logo.desktop.url}
							alt={item.exp_logo.desktop.alt}
							width={item.exp_logo.desktop.width}
							height={item.exp_logo.desktop.height}
						/>
					</section>
					<section className='right'>
						<div className='internship-content-container'>
							<span className='internship-content-label en-regular'>
								company name
							</span>
							<h2 className='internship-title en-regular'>
								{item.exp_full_name}
							</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label en-regular'>
								job description
							</span>
							<h2 className='internship-title en-regular'>{item.exp_desc}</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label en-regular'>
								incharged year
							</span>
							<h2 className='internship-title en-regular'>
								{item.exp_time_period.from}
							</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label en-regular'>
								company website
							</span>
							<h2 className='internship-title duration-500 hover:text-soft_pink en-regular'>
								<Link to={{ pathname: item.exp_ref }} target='_blank'>
									{item.exp_ref}
								</Link>
							</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label en-regular'>tools</span>
							{item.exp_tools.map((item, index) => (
								<h2 key={index} className='internship-title en-regular'>
									{item}
								</h2>
							))}
						</div>
					</section>
				</div>
			))}
		</section>
	)
})

export default Internship
