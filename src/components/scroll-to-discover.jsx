const ScrollToDiscover = ({ lang }) => {
	return (
		<p
			className={`scroll-to-discover ${
				lang === 'en' ? 'en-extralight' : 'th-extralight'
			}`}
		>
			{lang === 'en' ? 'scroll to discover' : 'เลื่อนเพื่อดูเพิ่มเติม'}
		</p>
	)
}

export default ScrollToDiscover
