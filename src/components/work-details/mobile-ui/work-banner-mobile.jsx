import LightHamburgerButton from '../../light-hamburger-button'
import VisitingLabelMobile from '../visiting-label-mobile'

const WorkBannerMobile = ({ work, lang }) => {
	return (
		<section
			className='work-details-banner-mobile en-regular'
			id='banner'
			style={{
				backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.75)
    ), url(${work.banner.url})`,
			}}
		>
			<div className='absolute top-5 right-10'>
				<LightHamburgerButton />
			</div>
			<h1 className='work-banner-title-mobile en-semibold'>{work.work_name}</h1>
			<p className='work-banner-short-desc-mobile en-extralight'>
				{work.short_desc}
			</p>
			{work.label && <VisitingLabelMobile url={work.url} label={work.label} />}
		</section>
	)
}

export default WorkBannerMobile
