import { forwardRef } from 'react'

const PartnerTestimonialMobile = forwardRef(({ t, work, lang }, ref) => {
	return (
		<section
			className={`partner-testimonial-container-mobile ${
				lang === 'en' ? 'en-regular' : 'th-regular'
			}`}
			ref={ref}
		>
			<article className='partner-testimonial-article-mobile'>
				<h2
					className={`partner-testimonial-title-mobile ${
						lang === 'en' ? 'en-semibold' : 'th-semibold'
					}`}
				>
					{t('work_details.partner_testimonial.title')}
				</h2>
				<p
					className={`partner-testimonial-speech-mobile ${
						lang === 'en' ? 'en-extralight' : 'th-extralight'
					}`}
				>
					{work.partners_testimonial}
				</p>
				<div className='partner-name-mobile-container'>
					<span
						className={`partner-testimonial-name-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{work.partners_testimonial_name},{' '}
					</span>
					<span
						className={`partner-testimonial-org-mobile ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{work.partners_org}
					</span>
				</div>
			</article>
		</section>
	)
})

export default PartnerTestimonialMobile
