import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import WorkType from '../../../data/work-type'

const WorkDescription = forwardRef(({ t, work, lang }, ref) => {
	return (
		<section
			className='work-details-introduction'
			id='work-introduction'
			ref={ref}
		>
			<article className='work-introduction-container'>
				<div className='flex flex-row'>
					<h2
						className={`introduction-title ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						{t('work-details.work-desc.title')}
					</h2>
					<span
						className={`text-hard_pink text-4xl ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						.
					</span>
				</div>
				<p
					className={`introduction-desc ${
						lang === 'en' ? 'en-extralight' : 'th-extralight'
					}`}
				>
					{work.description}
				</p>
			</article>
			<article className='work-explanation'>
				<section className='introduction-details-sub-container'>
					<h3
						className={`introduction-details-header ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work-details.work-desc.label1')}
					</h3>
					{work.work_type.map((item, index) => (
						<h2
							key={index}
							className={`introduction-details-content ${
								lang === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{WorkType[item]}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container'>
					<h3
						className={`introduction-details-header ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work-details.work-desc.label2')}
					</h3>
					<h2
						className={`introduction-details-content ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						{work.partners}
					</h2>
				</section>
				<section className='introduction-details-sub-container w-7/12'>
					<h3
						className={`introduction-details-header ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work-details.work-desc.label3')}
					</h3>
					<h2
						className={`introduction-details-content ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						{work.responsible}
					</h2>
				</section>
				<section className='introduction-details-sub-container'>
					<h3
						className={`introduction-details-header ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work-details.work-desc.label4')}
					</h3>
					{work.tech_stack.map((item, index) => (
						<h2
							key={index}
							className={`introduction-details-content ${
								lang === 'en' ? 'en-semibold' : 'th-semibold'
							}`}
						>
							{item}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container'>
					<h3
						className={`introduction-details-header ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work-details.work-desc.label5')}
					</h3>
					<h2
						className={`introduction-details-production ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
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
