require("dotenv").config();

module.exports = {
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
