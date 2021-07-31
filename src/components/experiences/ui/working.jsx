import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Working = forwardRef(({ work_as_an_employee, lang }, ref) => {
	return (
		<section className='exp-working-container' ref={ref}>
			{work_as_an_employee.map((item, index) => (
				<div key={index} className='working-container'>
					<section className='left'>
						<img
							src={item.exp_logo.desktop.url}
							alt={item.exp_logo.desktop.alt}
							width={item.exp_logo.desktop.width}
							height={item.exp_logo.desktop.height}
						/>
					</section>
					<section className='right'>
						<div className='working-content-container en-regular'>
							<span className='working-content-label'>job title</span>
							<h2 className='working-title'>{item.exp_full_name}</h2>
						</div>
						<div className='working-content-container en-regular'>
							<span className='working-content-label'>job description</span>
							<h2 className='working-title'>{item.exp_desc}</h2>
						</div>
						<div className='working-content-container en-regular'>
							<span className='working-content-label'>incharged year</span>
							<h2 className='working-title'>
								{item.exp_time_period.from} - {item.exp_time_period.to}
							</h2>
						</div>
						<div className='working-content-container en-regular'>
							<span className='working-content-label'>work place website</span>
							<h2 className='working-title duration-500 hover:text-soft_pink'>
								<Link to={{ pathname: item.exp_ref }} target='_blank'>
									{item.exp_ref}
								</Link>
							</h2>
						</div>
						<div className='working-content-container en-regular'>
							<span className='working-content-label'>jobs</span>
							{item.exp_tools.map((item, index) => (
								<h2 key={index} className='working-title'>
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

export default Working
