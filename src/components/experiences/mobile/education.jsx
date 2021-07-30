import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const EducationMobile = forwardRef(({ educations }, ref) => {
	return (
		<section className='exp-education-mobile-container' ref={ref}></section>
	)
})

export default EducationMobile
