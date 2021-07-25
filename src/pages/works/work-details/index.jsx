import { useState } from 'react'

import ClosedCurtain from '../../../components/animation/ closed-full-curtain'
import VisitingLabel from '../../../components/work-details/visiting-label'
import SideBar from '../../../components/sidebar'
import ScrollToDiscover from '../../../components/work-details/scroll-to-discover'

import WorkInfo from '../../../data/works'

const WorkInDetails = ({ match }) => {
	const workName = match.params.workName
	const work = WorkInfo.find((item) => item.path_name === workName)
	const [isCloseCurtain, onCloseCurtain] = useState(true)

	return (
		<SideBar withOutAnimation={true} setIsOpenCurtain={onCloseCurtain}>
			<ClosedCurtain isClosed={isCloseCurtain} />
			<div className='work-details-container'>
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
				<section
					className='work-details-introduction'
					id='work-introduction'
				></section>
			</div>
		</SideBar>
	)
}

export default WorkInDetails
