const WorkPictures = ({ url, alt }) => {
	return (
		<article className='work-picture'>
			<img src={url} alt={alt} className='object-cover' />
		</article>
	)
}

export default WorkPictures
