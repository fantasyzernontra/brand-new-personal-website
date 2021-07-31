const WorkName = ({
	short_work_name,
	short_desc,
	isHover,
	setHoverWork,
	lang,
}) => {
	return (
		<div
			className='work-name-container'
			onClick={setHoverWork}
			id={isHover ? 'hovered' : ''}
		>
			<hr className='work-line' id={isHover ? 'expanding' : ''} />
			<span className='work-name en-regular'>{short_work_name}</span>
			<span className='work-short-desc en-extralight'>{short_desc}</span>
		</div>
	)
}

export default WorkName
