import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import WorkType from '../../../data/work-type'

const WorkDescription = forwardRef(({ work }, ref) => {
	return (
		<section
			className='work-details-introduction'
			id='work-introduction'
			ref={ref}
		>
			<article className='work-introduction-container'>
				<div className='flex flex-row'>
					<h2 className='introduction-title'>Introduction</h2>
					<span className='text-hard_pink text-4xl'>.</span>
				</div>
				<p className='introduction-desc'>{work.description}</p>
			</article>
			<article className='work-explanation'>
				<section className='introduction-details-sub-container'>
					<h3 className='introduction-details-header'>work description</h3>
					{work.work_type.map((item, index) => (
						<h2 key={index} className='introduction-details-content'>
							{WorkType[item]}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container'>
					<h3 className='introduction-details-header'>partners</h3>
					<h2 className='introduction-details-content'>{work.partners}</h2>
				</section>
				<section className='introduction-details-sub-container w-7/12'>
					<h3 className='introduction-details-header'>responsible</h3>
					<h2 className='introduction-details-content'>{work.responsible}</h2>
				</section>
				<section className='introduction-details-sub-container'>
					<h3 className='introduction-details-header'>technology stack</h3>
					{work.tech_stack.map((item, index) => (
						<h2 key={index} className='introduction-details-content'>
							{item}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container'>
					<h3 className='introduction-details-header'>production</h3>
					<h2 className='introduction-details-production'>
						<Link to={{ pathname: work.url }} target='_blank'>
							{work.url}
						</Link>
					</h2>
				</section>
			</article>
		</section>
	)
})

export default WorkDescription
