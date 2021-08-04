import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

const PainPointRelievingMobile = forwardRef(({ work, lang }, ref) => {
	const { t } = useTranslation()

	return (
		<section className='painpoint-relieving-container-mobile' ref={ref}>
			<article className='painpoint-relieving-article-mobile'>
				<h2
					className={`painpoint-relieving-title-mobile ${
						lang === 'en' ? 'en-semibold' : 'th-semibold'
					}`}
				>
					{t('work_details.painpoint.title')}
				</h2>
				<p
					className={`painpoint-relieving-desc-mobile ${
						lang === 'en' ? 'en-extralight' : 'th-extralight'
					}`}
				>
					{work.painpoint_relieving}
				</p>
			</article>
		</section>
	)
})

export default PainPointRelievingMobile
