/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [
		require("@tailwindcss/typography"),
	],
	theme: {
		extend: {
			colors: {
				"primary": "#111a21",
				"secondary": "#716b6d",
				"accent": "#a9081c",
				"neutral": "#d9d9d9",
				"info": "#a8dadc",
				"success": "#98c671",
				"warning": "#dc5f00",
				"error": "#f1465d",
			}
		}
	}
};

