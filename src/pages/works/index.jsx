import React, { useState, useRef } from 'react'

import SideBar from '../../components/sidebar'
import HalfCurtain from '../../components/animation/half-curtain'
import WorkName from '../../components/works/work-name'

import WorkInfo from '../../data/works'

const Works = () => {
	const isChangeWork = useRef(false)
	const [isOpenCurtain, onOpenCurtain] = useState(true)
	const hoverWork = useRef(1)
	const [banner, setBanner] = useState({
		url: WorkInfo[0].banner.url,
		alt: WorkInfo[0].banner.alt,
	})

	function setHoverWork(workId) {
		hoverWork.current = workId
	}

	function onChangeWork() {
		isChangeWork.current = true
		onOpenCurtain(false)
		setTimeout(() => {
			setBanner({
				url: WorkInfo[hoverWork.current - 1].banner.url,
				alt: WorkInfo[hoverWork.current - 1].banner.alt,
			})
			onOpenCurtain(true)
			isChangeWork.current = false
		}, 1500)
	}

	return (
		<SideBar setIsOpenCurtain={onOpenCurtain}>
			<HalfCurtain isOpen={isOpenCurtain} />
			<div className='works-container'>
				<div className='left-container'>
					<article className='work-list-container'>
						{WorkInfo.map((item, index) => (
							<WorkName
								key={index}
								short_work_name={item.short_work_name}
								short_desc={item.short_desc}
								workId={item.id}
								setHoverWork={() => {
									if (!isChangeWork.current) {
										setHoverWork(item.id)
										onChangeWork()
									}
								}}
								isHover={hoverWork.current === item.id}
							/>
						))}
					</article>
				</div>
				<div className='right-container'>
					<section
						className='work-banner-container'
						style={{
							backgroundImage: `url(${banner.url})`,
							backgroundSize: 'cover',
						}}
					>
						<div className='hover-banner'>
							<div className='hover-border'>
								<div className='hover-banner-button'>In Details</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</SideBar>
	)
}

export default Works
