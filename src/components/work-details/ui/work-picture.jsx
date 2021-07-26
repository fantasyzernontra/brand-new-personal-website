const WorkPictures = ({ url, alt }) => {
	return (
		<article className='work-picture'>
			<img src={url} alt={alt} />
		</article>
	)
}

export default WorkPictures
