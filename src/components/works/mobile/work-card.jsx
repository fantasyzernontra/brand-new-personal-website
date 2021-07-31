import { forwardRef } from 'react'

const WorkCard = forwardRef(
	({ img, work_name, work_desc, work_type_mobile, onClick, lang }, ref) => {
		return (
			<section className='work-card-container' onClick={onClick} ref={ref}>
				<div className='work-card-banner-container'>
					<img src={img.url} alt={img.alt} className='work-card-banner' />
				</div>
				<h2 className='work-card-title en-semibold'>{work_name}</h2>
				<p className='work-card-desc en-regular'>{work_desc}</p>
				<span className='work-card-hook en-extralight'>{work_type_mobile}</span>
			</section>
		)
	}
)

export default WorkCard
