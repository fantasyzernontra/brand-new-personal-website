import { useState, useRef, useEffect } from 'react'
import { useObserverWithUnObserve } from '../../../utils/useObserverWithUnObserver'
import { useOrientation } from '../../../utils/useOrientation'
import { useTranslation } from 'react-i18next'

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
	const [work, setWork] = useState({})
	const [isCloseCurtain, onCloseCurtain] = useState(true)
	const observer = useObserverWithUnObserve
	const workDescWrapper = useRef(null)
	const painPointWrapper = useRef(null)
	const partnetTestimonialWrapper = useRef(null)
	const isMobile = useOrientation()
	const [isLoaded, setIsLoaded] = useState(false)
	const { i18n } = useTranslation()
	const currentLanguage = i18n.language

	useEffect(() => {
		if (currentLanguage) {
			const tempWork = WorkInfo.find((item) => {
				if (currentLanguage === 'en') return item.en.path_name === workName
				else if (currentLanguage === 'th') return item.th.path_name === workName

				return null
			})
			setWork(currentLanguage === 'en' ? tempWork.en : tempWork.th)
			if (tempWork) setIsLoaded(true)
		}
	}, [currentLanguage, workName])

	// Ref. Declaration
	useEffect(() => {
		if (isLoaded) {
			observer(workDescWrapper.current, 'work-desc-appear')
			if (work.painpoint_relieving)
				observer(painPointWrapper.current, 'painpoint-appear')
			if (work.partners_testimonial)
				observer(
					partnetTestimonialWrapper.current,
					'partner-testimonial-appear'
				)
		}
	}, [
		observer,
		work.painpoint_relieving,
		work.partners_testimonial,
		isMobile,
		isLoaded,
	])

	return (
		isLoaded && (
			<SideBar withOutAnimation={true} setIsOpenCurtain={onCloseCurtain}>
				{(!isMobile || !isCloseCurtain) && (
					<ClosedCurtain isClosed={isCloseCurtain} />
				)}
				{isMobile && <BottomToTopCurtain isOpen={isCloseCurtain} />}
				{isMobile && <HamburgerMenu setIsOpenCurtain={onCloseCurtain} />}
				{!isMobile && (
					<section className='work-details-container'>
						<WorkBanner work={work} lang={currentLanguage} />
						<WorkDescription
							work={work}
							ref={workDescWrapper}
							lang={currentLanguage}
						/>
						<WorkPictures
							url={work.pictures[0].url}
							alt={work.pictures[0].alt}
						/>
						{work.painpoint_relieving && (
							<PainPointRelieving
								work={work}
								ref={painPointWrapper}
								lang={currentLanguage}
							/>
						)}
						<WorkPictures
							url={work.pictures[1].url}
							alt={work.pictures[1].alt}
						/>
						{work.partners_testimonial && (
							<PartnerTestimonial
								work={work}
								ref={partnetTestimonialWrapper}
								lang={currentLanguage}
							/>
						)}
					</section>
				)}
				{isMobile && (
					<section className='work-details-container'>
						<WorkBannerMobile work={work} lang={currentLanguage} />
						<WorkDescriptionMobile
							work={work}
							ref={workDescWrapper}
							lang={currentLanguage}
						/>
						<WorkPictureMobile
							url={work.pictures[0].url}
							alt={work.pictures[0].alt}
						/>
						{work.painpoint_relieving && (
							<PainPointRelievingMobile
								work={work}
								ref={painPointWrapper}
								lang={currentLanguage}
							/>
						)}
						<WorkPictureMobile
							url={work.pictures[1].url}
							alt={work.pictures[1].alt}
						/>
						{work.partners_testimonial && (
							<PartnerTestimonialMobile
								work={work}
								ref={partnetTestimonialWrapper}
								lang={currentLanguage}
							/>
						)}
					</section>
				)}
			</SideBar>
		)
	)
}

export default WorkInDetails
