/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: '"Raleway", sans-serif',
				redhat: '"Red Hat Mono", mono'
			}
		},
	},
	plugins: [],
}