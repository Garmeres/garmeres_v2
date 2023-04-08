const { blokToText } = require("../storyblok-helpers/blok-to-text.js");

const getTitle = (node) =>
    node.lang === "default"
        ? node.name
        : node.translated_slugs.find((item) => item.lang === node.lang).name;

const getLang = (node) => (node.lang === "default" ? "en" : node.lang);

const resolveBlogPostSeo = (node, actions) => {
    return {
        title: `${getTitle(node)} | Garmeres`,
        description: blokToText(JSON.parse(node.content)),
        lang: getLang(node),
    };
};

const resolvePageSeo = (node, actions) => {
    return "Hello page";
};

module.exports = { resolveBlogPostSeo, resolvePageSeo };
