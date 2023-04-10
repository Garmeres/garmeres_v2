const getLanguageCodes = async (context) => {
    const { entries } = await context.nodeModel.findAll({
        type: "StoryblokEntry",
        query: {
            filter: {
                field_component: {
                    eq: "settings",
                },
            },
        },
    });
    const languageSettings = Array.from(entries);
    return languageSettings.map((languageSettingsNode) => {
        return {
            lang: languageSettingsNode.lang,
            language_code: JSON.parse(languageSettingsNode.content)
                .language_code,
        };
    });
};

const getSeoNode = (lang, context) =>
    context.nodeModel.findOne({
        type: "StoryblokEntry",
        query: {
            filter: {
                field_component: {
                    eq: "site_seo",
                },
                lang: {
                    eq: lang,
                },
            },
        },
    });

const resolveSeoLanguageCode = (source, languageCodes) =>
    languageCodes.find((item) => item.lang === source.lang).language_code;

const { resolveSeoTitle } = require("./resolve-seo-title.js");
const {
    resolveSeoDescriptionMetaTags,
} = require("./resolve-seo-description.js");
const { resolveSeoOgMetaTags } = require("./resolve-seo-og-meta-tags.js");
const {
    resolveSeoTwitterMetaTags,
} = require("./resolve-seo-twitter-meta-tags");
const { resolveSeoLinks } = require("./resolve-seo-links.js");
const { resolveSeoMetaTags } = require("./resolve-seo-meta-tags");

const resolveNodeSeo = async (source, args, context, info) => {
    const languageCodes = await getLanguageCodes(context);
    const seoNode = await getSeoNode(source.lang, context);

    return {
        title: resolveSeoTitle(source, seoNode),
        links: resolveSeoLinks(source, seoNode, languageCodes),
        lang: resolveSeoLanguageCode(source, languageCodes),
        meta: resolveSeoMetaTags(source, seoNode, languageCodes).concat(
            resolveSeoDescriptionMetaTags(source, seoNode),
            resolveSeoOgMetaTags(source, seoNode),
            resolveSeoTwitterMetaTags(source, seoNode)
        ),
    };
};

module.exports = { resolveNodeSeo };
