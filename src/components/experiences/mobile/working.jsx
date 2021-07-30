import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const WorkingMobile = forwardRef(({ works }, ref) => {
	return <section className='exp-works-mobile-container' ref={ref}></section>
})

export default WorkingMobile
