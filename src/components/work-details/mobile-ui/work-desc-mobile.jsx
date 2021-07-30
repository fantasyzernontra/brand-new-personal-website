import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import WorkType from '../../../data/work-type'

const WorkDescriptionMobile = forwardRef(({ work }, ref) => {
	return (
		<section className='work-details-introduction-mobile' ref={ref}>
			<article className='work-explanation-mobile'>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile'>
						work description
					</h3>
					{work.work_type.map((item, index) => (
						<h2 key={index} className='introduction-details-content-mobile'>
							{WorkType[item]}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile'>partners</h3>
					<h2 className='introduction-details-content-mobile'>
						{work.partners}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile'>responsible</h3>
					<h2 className='introduction-details-content-mobile'>
						{work.responsible}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile'>
						technology stack
					</h3>
					{work.tech_stack.map((item, index) => (
						<h2 key={index} className='introduction-details-content-mobile'>
							{item}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3 className='introduction-details-header-mobile'>production</h3>
					<h2 className='introduction-details-production-mobile'>
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
