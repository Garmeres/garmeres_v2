const { resolveSeoTwitterTitle } = require("./resolve-seo-title.js");
const {
    resolveSeoTwitterDescription,
} = require("./resolve-seo-description.js");

const resolveSeoTwitterMetaTags = (source, seoNode) => [
    {
        name: "twitter:title",
        content: resolveSeoTwitterTitle(source, seoNode),
    },
    {
        name: "twitter:description",
        content: resolveSeoTwitterDescription(source, seoNode),
    },
];

module.exports = { resolveSeoTwitterMetaTags };
