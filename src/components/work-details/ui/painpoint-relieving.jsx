import { forwardRef } from 'react'

const PainPointRelieving = forwardRef(({ work }, ref) => {
	return (
		<section className='painpoint-relieving-container' ref={ref}>
			<article className='painpoint-relieving-article'>
				<h2 className='painpoint-relieving-title'>pain point Relieving</h2>
				<p className='painpoint-relieving-desc'>{work.painpoint_relieving}</p>
			</article>
		</section>
	)
})

export default PainPointRelieving
