/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				lightpinkish: "#F9BDA1",
				darkpinkish: "#FF6766",
				lightbeige: "#F1E4CD",
				brickred: "#c5352c",
				lightblueish: "#39d0df",
			},
			screens: {
				sm: "320px",

				md: "750px",

				lg: "1440px",
			},
		},
	},
	plugins: [],
};
