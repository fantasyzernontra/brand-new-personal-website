const HamBurger = () => {
	function navToggle() {
		const btn = document.getElementById('menuBtn')
		const menu = document.getElementById('menu')
		btn.classList.toggle('open')
		menu.classList.add('active')
		menu.classList.remove('inactive')
		setTimeout(() => {
			menu.classList.toggle('animated')
		}, 1200)
	}

	return (
		<div>
			<button
				id='menuBtn'
				className='hamburger block lg:hidden focus:outline-none tracking-widest'
				type='button'
				onClick={navToggle}
			>
				<span className='hamburger-topbun'></span>
				<span className='hamburger-bottombun'></span>
			</button>
		</div>
	)
}

export default HamBurger
