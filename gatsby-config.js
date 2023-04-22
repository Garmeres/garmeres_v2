/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: `Garmeres`,
        description: `Official website for Garmeres`,
        siteUrl: `https://www.garmeres.com`,
        image: ``,
        lang: "en",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                breakpoints: [300, 750, 1080, 1366, 1920]
            }
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-storyblok",
            options: {
                accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
                version: "published",
                localAssets: true,
                resolveLinks: "story",
                includeLinks: true,
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://garmeres.com",
                sitemap: "https://garmeres.com/sitemap-index.xml",
                policy: [{ userAgent: "*", allow: "/" }],
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
                        file: `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap`,
                    },
                ],
            },
        },
    ],
};
