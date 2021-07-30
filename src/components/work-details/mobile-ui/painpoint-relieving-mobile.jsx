import { forwardRef } from 'react'

const PainPointRelievingMobile = forwardRef(({ work }, ref) => {
	return (
		<section className='painpoint-relieving-container-mobile' ref={ref}>
			<article className='painpoint-relieving-article-mobile'>
				<h2 className='painpoint-relieving-title-mobile'>
					pain point relieving
				</h2>
				<p className='painpoint-relieving-desc-mobile'>
					{work.painpoint_relieving}
				</p>
			</article>
		</section>
	)
})

export default PainPointRelievingMobile
