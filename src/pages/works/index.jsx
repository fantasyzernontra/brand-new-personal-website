import React, {
	useState,
	useRef,
	createRef,
	useEffect,
	useCallback,
} from 'react'
import { useHistory } from 'react-router-dom'
import { useOrientation } from '../../utils/useOrientation'
import { useObserverWithUnObserve } from '../../utils/useObserverWithUnObserver'
import { useTranslation } from 'react-i18next'

import SideBar from '../../components/sidebar'
import FullCurtain from '../../components/animation/full-curtain'
import HalfCurtain from '../../components/animation/half-curtain'
import ClosedFullCurtain from '../../components/animation/closed-full-curtain'
import WorkName from '../../components/works/desktop/work-name'
import DarkHamBurger from '../../components/dark-hamburger-button'
import HamburgerMenu from '../../components/hamburger-menu'
import WorkCard from '../../components/works/mobile/work-card'

import WorkInfo from '../../data/works'

const Works = () => {
	const isChangeWork = useRef(false)
	const [isOpenCurtain, onOpenCurtain] = useState(true)
	const hoverWork = useRef(1)
	const [banner, setBanner] = useState({
		url: WorkInfo[0].en.banner.url,
		alt: WorkInfo[0].en.banner.alt,
	})
	const history = useHistory()
	const [isViewInDetails, setIsViewInDetails] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const [isClosedFull, setIsClosedFull] = useState(true)
	const isMobile = useOrientation()
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language

	// Observing Ref.
	const [workRef, setWorkRef] = useState([])
	const observer = useObserverWithUnObserve

	function setHoverWork(workId) {
		hoverWork.current = workId
	}

	function onChangeWork() {
		isChangeWork.current = true
		onOpenCurtain(false)
		setTimeout(() => {
			setBanner({
				url: WorkInfo[hoverWork.current - 1].en.banner.url,
				alt: WorkInfo[hoverWork.current - 1].en.banner.alt,
			})
			onOpenCurtain(true)
			isChangeWork.current = false
		}, 1500)
	}

	function onViewWorkDetails() {
		const work = WorkInfo.find((item) => item.en.id === hoverWork.current)
		setTimeout(() => history.push(`/works/${work.en.path_name}`), 2000)
	}

	const onLoadWorkRef = useCallback(() => {
		const refArr = []
		for (let i = 0; i < WorkInfo.length; i++) {
			const ref = createRef()
			refArr.push(ref)
		}

		setWorkRef(refArr)
		if (isMobile)
			workRef.map((item) => {
				return observer(item.current, 'workRef-active')
			})
		// eslint-disable-next-line
	}, [isMobile])

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true)
		}, 2700)
	})

	useEffect(() => onLoadWorkRef(), [onLoadWorkRef, isLoaded])

	useEffect(() => {
		if (isViewInDetails) onViewWorkDetails()
	})

	return (
		<SideBar setIsOpenCurtain={setIsClosedFull}>
			{/* Desktop, Tablet Version */}
			{!isMobile && !isViewInDetails && <HalfCurtain isOpen={isOpenCurtain} />}
			{!isMobile && <ClosedFullCurtain isClosed={isClosedFull} />}
			{!isMobile && (
				<section className='works-container'>
					<div
						className='left-container'
						id={isViewInDetails ? 'view-in-details' : null}
					>
						<article
							className={`work-list-container ${
								currentLanguage === 'en' ? 'w-8/12' : 'w-11/12'
							}`}
						>
							{WorkInfo.map((item, index) => (
								<WorkName
									key={index}
									short_work_name={
										currentLanguage === 'en'
											? item.en.short_work_name
											: item.th.short_work_name
									}
									short_desc={
										currentLanguage === 'en'
											? item.en.short_desc
											: item.th.short_desc
									}
									workId={item.en.id}
									setHoverWork={() => {
										if (
											!isChangeWork.current &&
											item.en.id !== hoverWork.current
										) {
											setHoverWork(item.en.id)
											onChangeWork()
										}
									}}
									isHover={hoverWork.current === item.en.id}
									lang={currentLanguage}
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
									<div
										className={`hover-banner-button ${
											currentLanguage === 'en' ? 'en-semibold' : 'th-semibold'
										}`}
									>
										{t('work.view_in_details')}
									</div>
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
						<span
							className={`work-title-mobile ${
								currentLanguage === 'en' ? 'en-regular' : 'th-regular'
							}`}
						>
							{t('work.header')}:
						</span>
						<DarkHamBurger />
					</article>
					<article className='works-list-container-mobile'>
						{WorkInfo.map((item, index) => (
							<WorkCard
								key={index}
								img={item.en.banner}
								work_name={
									currentLanguage === 'en'
										? item.en.short_work_name
										: item.th.short_work_name
								}
								work_desc={
									currentLanguage === 'en'
										? item.en.short_desc
										: item.th.short_desc
								}
								work_type_mobile={
									currentLanguage === 'en'
										? item.en.hook_sentence
										: item.th.hook_sentence
								}
								onClick={() => {
									onOpenCurtain(false)
									setHoverWork(item.en.id)
									setIsViewInDetails(true)
								}}
								ref={workRef[index]}
								lang={currentLanguage}
							/>
						))}
					</article>
				</section>
			)}
		</SideBar>
	)
}

export default Works
