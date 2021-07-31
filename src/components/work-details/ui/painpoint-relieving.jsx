import { forwardRef } from 'react'

const PainPointRelieving = forwardRef(({ work, lang }, ref) => {
	return (
		<section className='painpoint-relieving-container en-regular' ref={ref}>
			<article className='painpoint-relieving-article'>
				<h2 className='painpoint-relieving-title en-semibold'>
					pain point Relieving
				</h2>
				<p className='painpoint-relieving-desc en-extralight'>
					{work.painpoint_relieving}
				</p>
			</article>
		</section>
	)
})

export default PainPointRelieving
