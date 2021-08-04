import { forwardRef } from 'react'

const PainPointRelieving = forwardRef(({ t, work, lang }, ref) => {
	return (
		<section
			className={`painpoint-relieving-container ${
				lang === 'en' ? 'en-regular' : 'th-regular'
			}`}
			ref={ref}
		>
			<article className='painpoint-relieving-article'>
				<h2
					className={`painpoint-relieving-title ${
						lang === 'en' ? 'en-semibold' : 'th-semibold'
					}`}
				>
					{t('work-details.painpoint.title')}
				</h2>
				<p
					className={`painpoint-relieving-desc ${
						lang === 'en' ? 'en-extralight' : 'th-extralight'
					}`}
				>
					{work.painpoint_relieving}
				</p>
			</article>
		</section>
	)
})

export default PainPointRelieving
