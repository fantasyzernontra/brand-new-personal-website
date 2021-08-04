module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				hard_blue: '#132743',
				hard_pink: '#FF6187',
				soft_blue: '#FF6187',
				soft_pink: '#FF9BAA',
				white_text: '#E3ECFF',
			},
			fontFamily: {
				en: ['Source Sans Pro', 'sans-serif'],
				th: ['Kanit', 'sans-serif'],
			},
			width: {
				sidebar_pc: '5vw',
				sidebar_tablet: '10vw',
				content_pc: '95vw',
				content_tablet: '90vw',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
