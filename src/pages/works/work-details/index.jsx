import { useState, useRef, useEffect } from 'react'
import { useObserverWithUnObserve } from '../../../utils/useObserverWithUnObserver'

import ClosedCurtain from '../../../components/animation/ closed-full-curtain'
import SideBar from '../../../components/sidebar'

import WorkBanner from '../../../components/work-details/ui/work-banner'
import WorkDescription from '../../../components/work-details/ui/work-description'
import WorkPictures from '../../../components/work-details/ui/work-picture'
import PainPointRelieving from '../../../components/work-details/ui/painpoint-relieving'
import PartnerTestimonial from '../../../components/work-details/ui/partner-testimonial'

import WorkInfo from '../../../data/works'

const WorkInDetails = ({ match }) => {
	const workName = match.params.workName
	const work = WorkInfo.find((item) => item.path_name === workName)
	const [isCloseCurtain, onCloseCurtain] = useState(true)
	const observer = useObserverWithUnObserve
	const workDescWrapper = useRef(null)
	const painPointWrapper = useRef(null)
	const partnetTestimonialWrapper = useRef(null)

	useEffect(() => {
		observer(workDescWrapper.current, 'work-desc-appear')
		if (work.painpoint_relieving)
			observer(painPointWrapper.current, 'painpoint-appear')
		if (work.partners_testimonial)
			observer(partnetTestimonialWrapper.current, 'partner-testimonial-appear')
	}, [observer, work.painpoint_relieving, work.partners_testimonial])

	return (
		<SideBar withOutAnimation={true} setIsOpenCurtain={onCloseCurtain}>
			<ClosedCurtain isClosed={isCloseCurtain} />
			<div className='work-details-container'>
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
			</div>
		</SideBar>
	)
}

export default WorkInDetails
