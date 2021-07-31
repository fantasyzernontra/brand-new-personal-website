import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import WorkType from '../../../data/work-type'

const WorkDescriptionMobile = forwardRef(({ work, lang }, ref) => {
	return (
		<section className='work-details-introduction-mobile' ref={ref}>
			<article className='work-explanation-mobile'>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile en-regular'>
						work description
					</h3>
					{work.work_type.map((item, index) => (
						<h2
							key={index}
							className='introduction-details-content-mobile en-semibold'
						>
							{WorkType[item]}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile en-regular'>
						partners
					</h3>
					<h2 className='introduction-details-content-mobile en-semibold'>
						{work.partners}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile en-regular'>
						responsible
					</h3>
					<h2 className='introduction-details-content-mobile en-semibold'>
						{work.responsible}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile en-regular'>
						technology stack
					</h3>
					{work.tech_stack.map((item, index) => (
						<h2
							key={index}
							className='introduction-details-content-mobile en-semibold'
						>
							{item}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile en-regular'>
						production
					</h3>
					<h2 className='introduction-details-production-mobile en-semibold'>
						<Link to={{ pathname: work.url }} target='_blank'>
							{work.url}
						</Link>
					</h2>
				</section>
			</article>
		</section>
	)
})

export default WorkDescriptionMobile
