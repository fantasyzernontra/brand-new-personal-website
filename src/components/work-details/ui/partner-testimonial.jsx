import { forwardRef } from 'react'

const PartnerTestimonial = forwardRef(({ work, lang }, ref) => {
	return (
		<section className='partner-testimonial-container en-regular' ref={ref}>
			<article className='partner-testimonial-article'>
				<h2 className='partner-testimonial-title en-semibold'>
					partner's testimonial
				</h2>
				<p className='partner-testimonial-speech en-extralight'>
					{work.partners_testimonial}
				</p>
				<div className='flex flex-row justify-end gap-x-2 w-full'>
					<span className='partner-testimonial-name en-regular'>
						{work.partners_testimonial_name},{' '}
					</span>
					<span className='partner-testimonial-org en-regular'>
						{work.partners_org}
					</span>
				</div>
			</article>
		</section>
	)
})

export default PartnerTestimonial
