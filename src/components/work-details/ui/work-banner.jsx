import VisitingLabel from '../visiting-label'
import ScrollToDiscover from '../../scroll-to-discover'

const WorkBanner = ({ work, lang }) => {
	return (
		<section
			className='work-details-banner en-regular'
			id='banner'
			style={{
				backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.75)
        ), url(${work.banner.url})`,
			}}
		>
			<h1
				className={`work-detail-title ${
					lang === 'en' ? 'en-semibold' : 'th-semibold'
				}`}
			>
				{work.work_name}
			</h1>
			<p
				className={`work-detail-short-desc ${
					lang === 'en' ? 'en-extralight' : 'th-extralight'
				}`}
			>
				{work.short_desc}
			</p>
			{work.label && (
				<VisitingLabel label={work.label} url={work.url} lang={lang} />
			)}
			<ScrollToDiscover lang={lang} />
		</section>
	)
}

export default WorkBanner
