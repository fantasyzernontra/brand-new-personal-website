import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const InternshipMobile = forwardRef(({ internships }, ref) => {
	return (
		<section className='exp-internship-mobile-container' ref={ref}></section>
	)
})

export default InternshipMobile
