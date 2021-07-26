import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
	const history = useHistory()
	const [isViewInDetails, setIsViewInDetails] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

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

	function onViewWorkDetails() {
		const work = WorkInfo.find((item) => item.id === hoverWork.current)
		setTimeout(() => history.push(`/works/${work.path_name}`), 2000)
	}

	useEffect(() => {
		setTimeout(() => setIsLoaded(true), 2700)
	}, [])

	useEffect(() => {
		if (isViewInDetails) onViewWorkDetails()
	})

	return (
		<SideBar setIsOpenCurtain={onOpenCurtain}>
			{!isViewInDetails && <HalfCurtain isOpen={isOpenCurtain} />}
			<section className='works-container'>
				<div
					className='left-container'
					id={isViewInDetails ? 'view-in-details' : null}
				>
					<article className='work-list-container'>
						{WorkInfo.map((item, index) => (
							<WorkName
								key={index}
								short_work_name={item.short_work_name}
								short_desc={item.short_desc}
								workId={item.id}
								setHoverWork={() => {
									if (!isChangeWork.current && item.id !== hoverWork.current) {
										setHoverWork(item.id)
										onChangeWork()
									}
								}}
								isHover={hoverWork.current === item.id}
							/>
						))}
					</article>
				</div>
				<div
					className={`right-container ${isLoaded ? '' : 'pointer-events-none'}`}
					id={isViewInDetails ? 'view-in-details' : null}
				>
					<article
						className='work-banner-container'
						style={{
							backgroundImage: `url(${banner.url})`,
							backgroundSize: 'cover',
						}}
						onClick={() => setIsViewInDetails(true)}
					>
						<div className='hover-banner'>
							<div className='hover-border'>
								<div className='hover-banner-button'>View In Details</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		</SideBar>
	)
}

export default Works
