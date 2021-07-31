import { forwardRef } from 'react'

const PartnerTestimonialMobile = forwardRef(({ work, lang }, ref) => {
	return (
		<section
			className='partner-testimonial-container-mobile en-regular'
			ref={ref}
		>
			<article className='partner-testimonial-article-mobile'>
				<h2 className='partner-testimonial-title-mobile en-semibold'>
					partner's testimonial
				</h2>
				<p className='partner-testimonial-speech-mobile en-extralight'>
					{work.partners_testimonial}
				</p>
				<div className='partner-name-mobile-container'>
					<span className='partner-testimonial-name-mobile en-regular'>
						{work.partners_testimonial_name},{' '}
					</span>
					<span className='partner-testimonial-org-mobile en-regular'>
						{work.partners_org}
					</span>
				</div>
			</article>
		</section>
	)
})

export default PartnerTestimonialMobile
