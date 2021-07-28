import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useOrientation } from '../../utils/useOrientation'

import SideBar from '../../components/sidebar'
import FullCurtain from '../../components/animation/full-curtain'
import HalfCurtain from '../../components/animation/half-curtain'
import WorkName from '../../components/works/desktop/work-name'
import DarkHamBurger from '../../components/dark-hamburger-button'
import HamburgerMenu from '../../components/hamburger-menu'

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
	const isMobile = useOrientation()

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
			{/* Desktop, Tablet Version */}
			{!isMobile && !isViewInDetails && <HalfCurtain isOpen={isOpenCurtain} />}
			{!isMobile && (
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
										if (
											!isChangeWork.current &&
											item.id !== hoverWork.current
										) {
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
						className={`right-container ${
							isLoaded ? '' : 'pointer-events-none'
						}`}
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
			)}
			{/* Mobile Version */}
			{isMobile && <FullCurtain isOpen={isOpenCurtain} />}
			{isMobile && <HamburgerMenu setIsOpenCurtain={onOpenCurtain} />}
			{isMobile && (
				<section className='works-container-mobile'>
					<article className='works-header-container-mobile'>
						<span className='work-title-mobile'>Works:</span>
						<DarkHamBurger />
					</article>
				</section>
			)}
		</SideBar>
	)
}

export default Works
