require("dotenv").config();

module.exports = {
	async redirects() {
		return [
			{
				source: "/about",
				destination: "/about/detail",
				permanent: true,
			},
		];
	},
	env: {
		STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
	},
	images: {
		domains: ["a.storyblok.com"],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};
