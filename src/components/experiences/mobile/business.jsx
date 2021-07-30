import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const BusinessMobile = forwardRef(({ business }, ref) => {
	return <section className='exp-business-mobile-container' ref={ref}></section>
})

export default BusinessMobile
