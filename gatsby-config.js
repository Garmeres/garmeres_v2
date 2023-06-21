require('dotenv').config({
	path: `.env.${process.env.NODE_ENV || 'production'}`,
});

module.exports = {
	siteMetadata: {
		title: `Garmeres`,
		description: `Official website for Garmeres`,
		siteUrl: `https://www.garmeres.com`,
		image: ``,
		lang: 'en',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleAnalytics: {
					trackingId: process.env.GATSBY_GOOGLE_GTAG,
					// Setting this parameter is optional
					anonymize: true,
					cookieName: 'gatsby-gdpr-google-analytics',
				},
				// Defines the environments where the tracking should be available  - default is ["production"]
				environments: ['production', 'development'],
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'assets/garmeres-logo.svg',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-storyblok',
			options: {
				accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
				version: process.env.GATSBY_STORYBLOK_CONTENT_VERSION || 'published',
				localAssets: true,
				resolveLinks: 'story',
				includeLinks: true,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://garmeres.com',
				sitemap: 'https://garmeres.com/sitemap-index.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Quicksand`,
						file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@100;200;300;400;500;600;700&display=swap`,
					},
					{
						name: `Bellota Text`,
						file: `https://fonts.googleapis.com/css2?family=Bellota+Text:wght@100;200;300;400;500;600;700&display=swap`,
					},
					{
						name: `PT Sans`,
						file: `https://fonts.googleapis.com/css2?family=PT+Sans:wght@100;200;300;400;500;600;700&display=swap`,
					},
				],
			},
		},
	],
};
