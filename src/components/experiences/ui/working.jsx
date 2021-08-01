import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Working = forwardRef(({ work_as_an_employee, lang }, ref) => {
	return (
		<section className='exp-working-container' ref={ref}>
			{work_as_an_employee.map((item, index) => {
				const work = lang === 'en' ? item.en : item.th
				return (
					<div key={index} className='working-container'>
						<section className='left'>
							<img
								src={work.exp_logo.desktop.url}
								alt={work.exp_logo.desktop.alt}
								width={work.exp_logo.desktop.width}
								height={work.exp_logo.desktop.height}
							/>
						</section>
						<section className='right'>
							<div
								className={`working-content-container ${
									lang === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<span className='working-content-label'>job title</span>
								<h2 className='working-title'>{work.exp_full_name}</h2>
							</div>
							<div
								className={`working-content-container ${
									lang === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<span className='working-content-label'>job description</span>
								<h2 className='working-title'>{work.exp_desc}</h2>
							</div>
							<div
								className={`working-content-container ${
									lang === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<span className='working-content-label'>incharged year</span>
								<h2 className='working-title'>
									{work.exp_time_period.from} - {work.exp_time_period.to}
								</h2>
							</div>
							<div
								className={`working-content-container ${
									lang === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<span className='working-content-label'>
									work place website
								</span>
								<h2 className='working-title duration-500 hover:text-soft_pink'>
									<Link to={{ pathname: work.exp_ref }} target='_blank'>
										{work.exp_ref}
									</Link>
								</h2>
							</div>
							<div
								className={`working-content-container ${
									lang === 'en' ? 'en-regular' : 'th-regular'
								}`}
							>
								<span className='working-content-label'>jobs</span>
								{work.exp_tools.map((item, index) => (
									<h2 key={index} className='working-title'>
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

export default Working
