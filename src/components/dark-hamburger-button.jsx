const DarkHamBurger = () => {
	function navToggle() {
		const btnDark = document.getElementById('menuBtn-dark')
		const btnLight = document.getElementById('menuBtn-light')
		const menu = document.getElementById('menu')
		if (btnDark) btnDark.classList.toggle('open')
		if (btnLight) btnLight.classList.toggle('open')
		menu.classList.add('active')
		menu.classList.remove('inactive')
		setTimeout(() => {
			menu.classList.toggle('animated')
		}, 1200)
	}

	return (
		<div>
			<button
				id='menuBtn-dark'
				className='dark-hamburger block lg:hidden focus:outline-none tracking-widest'
				type='button'
				onClick={navToggle}
			>
				<span className='dark-hamburger-topbun'></span>
				<span className='dark-hamburger-bottombun'></span>
			</button>
		</div>
	)
}

export default DarkHamBurger
