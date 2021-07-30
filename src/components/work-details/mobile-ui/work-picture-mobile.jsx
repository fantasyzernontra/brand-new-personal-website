const WorkPictureMobile = ({ url, alt }) => {
	return (
		<article className='work-picture-mobile'>
			<img src={url} alt={alt} className='w-full h-full object-contain' />
		</article>
	)
}

export default WorkPictureMobile
