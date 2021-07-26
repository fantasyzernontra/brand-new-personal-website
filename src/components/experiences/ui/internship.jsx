import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Internship = forwardRef(({ internships }, ref) => {
	return (
		<section className='exp-internship-container' ref={ref}>
			{internships.map((item, index) => (
				<div key={index} className='internship-container'>
					<section className='left'>
						<img
							src={item.exp_logo.url}
							alt={item.exp_logo.alt}
							width={item.exp_logo.width}
							height={item.exp_logo.height}
						/>
					</section>
					<section className='right'>
						<div className='internship-content-container'>
							<span className='internship-content-label'>company name</span>
							<h2 className='internship-title'>{item.exp_full_name}</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label'>job description</span>
							<h2 className='internship-title'>{item.exp_desc}</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label'>incharged year</span>
							<h2 className='internship-title'>{item.exp_time_period.from}</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label'>company website</span>
							<h2 className='internship-title duration-500 hover:text-soft_pink'>
								<Link to={{ pathname: item.exp_ref }} target='_blank'>
									{item.exp_ref}
								</Link>
							</h2>
						</div>
						<div className='internship-content-container'>
							<span className='internship-content-label'>tools</span>
							{item.exp_tools.map((item, index) => (
								<h2 key={index} className='internship-title'>
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
