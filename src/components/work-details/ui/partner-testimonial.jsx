import { forwardRef } from 'react'

const PartnerTestimonial = forwardRef(({ work }, ref) => {
	return (
		<section className='partner-testimonial-container' ref={ref}>
			<article className='partner-testimonial-article'>
				<h2 className='partner-testimonial-title'>partner's testimonial</h2>
				<p className='partner-testimonial-speech'>
					{work.partners_testimonial}
				</p>
				<div className='flex flex-row justify-end gap-x-2 w-full'>
					<span className='partner-testimonial-name'>
						{work.partners_testimonial_name},{' '}
					</span>
					<span className='partner-testimonial-org'>{work.partners_org}</span>
				</div>
			</article>
		</section>
	)
})

export default PartnerTestimonial
