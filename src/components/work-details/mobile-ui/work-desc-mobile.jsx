import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import WorkType from '../../../data/work-type'

const WorkDescriptionMobile = forwardRef(({ t, work, lang }, ref) => {
	return (
		<section className='work-details-introduction-mobile' ref={ref}>
			<article className='work-explanation-mobile'>
				<section className='introduction-details-sub-container-mobile'>
					<h3
						className={`introduction-details-header-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work_details.work_desc.label1')}
					</h3>
					{work.work_type.map((item, index) => (
						<h2
							key={index}
							className={`introduction-details-content-mobile ${
								lang === 'en' ? ' en-semibol' : 'th-semibold'
							}`}
						>
							{WorkType[item]}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3
						className={`introduction-details-header-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work_details.work_desc.label2')}
					</h3>
					<h2
						className={`introduction-details-content-mobile  ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						{work.partners}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3
						className={`introduction-details-header-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work_details.work_desc.label3')}
					</h3>
					<h2
						className={`introduction-details-content-mobile  ${
							lang === 'en' ? 'en-semibold' : 'th-semibold'
						}`}
					>
						{work.responsible}
					</h2>
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3
						className={`introduction-details-header-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work_details.work_desc.label4')}
					</h3>
					{work.tech_stack.map((item, index) => (
						<h2
							key={index}
							className={`introduction-details-content-mobile ${
								lang === 'en' ? ' en-semibol' : 'th-semibold'
							}`}
						>
							{item}
						</h2>
					))}
				</section>
				<section className='introduction-details-sub-container-mobile'>
					<h3
						className={`introduction-details-header-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{t('work_details.work_desc.label5')}
					</h3>
					<h2
						className={`introduction-details-production-mobile ${
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

export default WorkDescriptionMobile
