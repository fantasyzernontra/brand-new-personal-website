import { useState, useRef, useEffect } from 'react'
import { useObserverWithUnObserve } from '../../../utils/useObserverWithUnObserver'
import { useOrientation } from '../../../utils/useOrientation'

import ClosedCurtain from '../../../components/animation/closed-full-curtain'
import BottomToTopCurtain from '../../../components/animation/bottom-to-top-curtain'
import HamburgerMenu from '../../../components/hamburger-menu'
import SideBar from '../../../components/sidebar'

// Desktop
import WorkBanner from '../../../components/work-details/ui/work-banner'
import WorkDescription from '../../../components/work-details/ui/work-description'
import WorkPictures from '../../../components/work-details/ui/work-picture'
import PainPointRelieving from '../../../components/work-details/ui/painpoint-relieving'
import PartnerTestimonial from '../../../components/work-details/ui/partner-testimonial'

// Mobile
import WorkBannerMobile from '../../../components/work-details/mobile-ui/work-banner-mobile'
import WorkDescriptionMobile from '../../../components/work-details/mobile-ui/work-desc-mobile'
import WorkPictureMobile from '../../../components/work-details/mobile-ui/work-picture-mobile'
import PainPointRelievingMobile from '../../../components/work-details/mobile-ui/painpoint-relieving-mobile'
import PartnerTestimonialMobile from '../../../components/work-details/mobile-ui/partner-testimonial-mobile'

import WorkInfo from '../../../data/works'

const WorkInDetails = ({ match }) => {
	const workName = match.params.workName
	const work = WorkInfo.find((item) => item.path_name === workName)
	const [isCloseCurtain, onCloseCurtain] = useState(true)
	const observer = useObserverWithUnObserve
	const workDescWrapper = useRef(null)
	const painPointWrapper = useRef(null)
	const partnetTestimonialWrapper = useRef(null)
	const isMobile = useOrientation()

	// Ref. Declaration
	useEffect(() => {
		observer(workDescWrapper.current, 'work-desc-appear')
		if (work.painpoint_relieving)
			observer(painPointWrapper.current, 'painpoint-appear')
		if (work.partners_testimonial)
			observer(partnetTestimonialWrapper.current, 'partner-testimonial-appear')
	}, [observer, work.painpoint_relieving, work.partners_testimonial, isMobile])

	return (
		<SideBar withOutAnimation={true} setIsOpenCurtain={onCloseCurtain}>
			{(!isMobile || !isCloseCurtain) && (
				<ClosedCurtain isClosed={isCloseCurtain} />
			)}
			{isMobile && <BottomToTopCurtain isOpen={isCloseCurtain} />}
			{isMobile && <HamburgerMenu setIsOpenCurtain={onCloseCurtain} />}
			{!isMobile && (
				<section className='work-details-container'>
					<WorkBanner work={work} />
					<WorkDescription work={work} ref={workDescWrapper} />
					<WorkPictures url={work.pictures[0].url} alt={work.pictures[0].alt} />
					{work.painpoint_relieving && (
						<PainPointRelieving work={work} ref={painPointWrapper} />
					)}
					<WorkPictures url={work.pictures[1].url} alt={work.pictures[1].alt} />
					{work.partners_testimonial && (
						<PartnerTestimonial work={work} ref={partnetTestimonialWrapper} />
					)}
				</section>
			)}
			{isMobile && (
				<section className='work-details-container'>
					<WorkBannerMobile work={work} />
					<WorkDescriptionMobile work={work} ref={workDescWrapper} />
					<WorkPictureMobile
						url={work.pictures[0].url}
						alt={work.pictures[0].alt}
					/>
					{work.painpoint_relieving && (
						<PainPointRelievingMobile work={work} ref={painPointWrapper} />
					)}
					<WorkPictureMobile
						url={work.pictures[1].url}
						alt={work.pictures[1].alt}
					/>
					{work.partners_testimonial && (
						<PartnerTestimonialMobile
							work={work}
							ref={partnetTestimonialWrapper}
						/>
					)}
				</section>
			)}
		</SideBar>
	)
}

export default WorkInDetails
