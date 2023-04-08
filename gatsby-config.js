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
        "gatsby-plugin-sharp",
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
                accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
                version: "published",
                localAssets: true,
                resolveLinks: "story",
                includeLinks: true,
            },
        },
    ],
};
