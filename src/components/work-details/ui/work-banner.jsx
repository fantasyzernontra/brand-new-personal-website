import VisitingLabel from '../visiting-label'
import ScrollToDiscover from '../../scroll-to-discover'

const WorkBanner = ({ work }) => {
	return (
		<section
			className='work-details-banner'
			id='banner'
			style={{
				backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.75)
        ), url(${work.banner.url})`,
			}}
		>
			<h1 className='work-detail-title'>{work.work_name}</h1>
			<p className='work-detail-short-desc'>{work.short_desc}</p>
			{work.label && <VisitingLabel label={work.label} url={work.url} />}
			<ScrollToDiscover />
		</section>
	)
}

export default WorkBanner
