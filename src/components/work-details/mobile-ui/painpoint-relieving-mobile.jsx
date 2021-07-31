import { forwardRef } from 'react'

const PainPointRelievingMobile = forwardRef(({ work, lang }, ref) => {
	return (
		<section className='painpoint-relieving-container-mobile' ref={ref}>
			<article className='painpoint-relieving-article-mobile'>
				<h2 className='painpoint-relieving-title-mobile en-semibold'>
					pain point relieving
				</h2>
				<p className='painpoint-relieving-desc-mobile en-extralight'>
					{work.painpoint_relieving}
				</p>
			</article>
		</section>
	)
})

export default PainPointRelievingMobile
