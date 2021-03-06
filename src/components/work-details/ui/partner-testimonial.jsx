import { forwardRef } from 'react'

const PartnerTestimonial = forwardRef(({ t, work, lang }, ref) => {
	return (
		<section
			className={`partner-testimonial-container ${
				lang === 'en' ? 'en-regular' : 'th-regular'
			}`}
			ref={ref}
		>
			<article className='partner-testimonial-article'>
				<h2
					className={`partner-testimonial-title ${
						lang === 'en' ? 'en-semibold' : 'th-semibold'
					}`}
				>
					{t('work-details.partner-testimonial.title')}
				</h2>
				<p
					className={`partner-testimonial-speech ${
						lang === 'en' ? 'en-extralight' : 'th-extralight'
					}`}
				>
					{work.partners_testimonial}
				</p>
				<div className='flex flex-row justify-end gap-x-2 w-full'>
					<span
						className={`partner-testimonial-name ${
							lang === 'en' ? 'en-regular' : 'th-regular'
						}`}
					>
						{work.partners_testimonial_name},{' '}
					</span>
					<span
						className={`partner-testimonial-org ${
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

export default PartnerTestimonial
