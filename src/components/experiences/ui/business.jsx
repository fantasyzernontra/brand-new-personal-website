import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Business = forwardRef(({ business }, ref) => {
	return (
		<section className='exp-business-container' ref={ref}>
			{business.map((item, index) => (
				<div key={index} className='business-container'>
					<section className='left'>
						<img
							src={item.exp_logo.url}
							alt={item.exp_logo.alt}
							width={item.exp_logo.width}
							height={item.exp_logo.height}
						/>
					</section>
					<section className='right'>
						<div className='business-content-container'>
							<span className='business-content-label'>business name</span>
							<h2 className='business-title'>{item.exp_full_name}</h2>
						</div>
						<div className='business-content-container'>
							<span className='business-content-label'>
								business description
							</span>
							<h2 className='business-title'>{item.exp_desc}</h2>
						</div>
						<div className='business-content-container'>
							<span className='business-content-label'>establishment year</span>
							<h2 className='business-title'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='business-content-container'>
							<span className='business-content-label'>business website</span>
							<h2 className='business-title duration-500 hover:text-soft_pink'>
								<Link to={{ pathname: item.exp_ref }} target='_blank'>
									{item.exp_ref}
								</Link>
							</h2>
						</div>
						<div className='business-content-container'>
							<span className='business-content-label'>services</span>
							{item.exp_tools.map((item, index) => (
								<h2 key={index} className='business-title'>
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

export default Business
