/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					darkCyan: "hsl(158, 36%, 37%)",
					cream: "hsl(30, 38%, 92%)",
				},
				neutral: {
					veryDarkBlue: "hsl(212, 21%, 14%)",
					darkGrayishBlue: "hsl(228, 12%, 48%)",
				},
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
				Frances: ["Fraunces", "serif"],
			},
		},
	},
	plugins: [],
};
