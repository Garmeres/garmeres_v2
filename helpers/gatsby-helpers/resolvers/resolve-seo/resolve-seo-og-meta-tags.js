const { resolveSeoOgTitle } = require("./resolve-seo-title.js");
const { resolveSeoOgDescription } = require("./resolve-seo-description.js");
const { resolveSeoOgImageMetaTags } = require("./resolve-seo-image");

const resolveCanonicalUrl = (source, seoNode) =>
    source.slug === "index"
        ? JSON.parse(seoNode.content).site_url
        : `${JSON.parse(seoNode.content).site_url}/${source.full_slug}`;

const ogTypeMetaTagsResolvers = {
    "blog-post": (source, seoNode) => {
        let tags = [
            {
                property: "og:type",
                content: "article",
            },
            {
                property: "article:published_time",
                content: source.first_published_at,
            },
            {
                property: "article:modified_time",
                content: source.published_at,
            },
        ];
        const content = JSON.parse(source.content);
        if (content.author != null) {
            tags.push({
                property: "article:author",
                content: content.author,
            });
        }
        return tags;
    },
    page: (source, seoNode) => [
        {
            property: "og:type",
            content: "website",
        },
    ],
    default: (source, seoNode) => [],
};

const resolveOgTypeMetaTags = (source, seoNode) =>
    ogTypeMetaTagsResolvers[source.field_component] != null
        ? ogTypeMetaTagsResolvers[source.field_component](source, seoNode)
        : ogTypeMetaTagsResolvers.default(source, seoNode);

const resolveSeoOgMetaTags = (source, seoNode) =>
    [
        {
            property: "og:title",
            content: resolveSeoOgTitle(source, seoNode),
        },
        {
            property: "og:description",
            content: resolveSeoOgDescription(source, seoNode),
        },
        {
            property: "og:url",
            content: resolveCanonicalUrl(source, seoNode),
        },
        {
            property: "og:site_name",
            content: JSON.parse(seoNode.content).seo.og_title,
        },
    ].concat(
        resolveOgTypeMetaTags(source, seoNode),
        resolveSeoOgImageMetaTags(source, seoNode)
    );

module.exports = { resolveSeoOgMetaTags };
