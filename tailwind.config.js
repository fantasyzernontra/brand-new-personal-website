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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
