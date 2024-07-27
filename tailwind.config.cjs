/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}',
	'./node_modules/flowbite/**/*.js'],
	safelist: [
		'blue1',
		'blue2',
		'blue3',
		'purple1',
		'purple2',
		'purple3',
		'green1',
		'green2',
		'green3',
		'orange1',
		'orange2',
		'orange3',
		'red1',
		'red2',
		'red3',
		'yellow1',
		'yellow2',
		'yellow3',
		'cyan1',
		'cyan2',
		'cyan3',
		'lime1',
		'lime2',
		'lime3',
	  ],
	theme: {
		extend: {},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}
