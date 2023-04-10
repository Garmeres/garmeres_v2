const { blokToText } = require("../../../storyblok-helpers/blok-to-text.js");

const trimToLength = (text, length) =>
    text != null
        ? text.length > length
            ? `${text.substring(0, length)}...`
            : text
        : "null";

const seoDescriptionResolvers = {
    "blog-post": (source, seoNode) =>
        trimToLength(blokToText(source, "field_component"), 155),
    default: (seoNode) => JSON.parse(seoNode.content).seo.description,
};

const seoOgDescriptionResolvers = {
    "blog-post": (source, seoNode) =>
        trimToLength(blokToText(source, "field_component"), 200),
    default: (seoNode) => JSON.parse(seoNode.content).seo.og_description,
};

const seoTwitterDescriptionResolvers = {
    "blog-post": (source, seoNode) =>
        trimToLength(blokToText(source, "field_component"), 200),
    default: (seoNode) => JSON.parse(seoNode.content).seo.twitter_description,
};

const resolveSeoDescription = (source, seoNode) =>
    seoDescriptionResolvers[source.field_component] != null
        ? seoDescriptionResolvers[source.field_component](source, seoNode)
        : seoDescriptionResolvers.default(seoNode);

const resolveSeoOgDescription = (source, seoNode) =>
    seoOgDescriptionResolvers[source.field_component] != null
        ? seoOgDescriptionResolvers[source.field_component](source, seoNode)
        : seoOgDescriptionResolvers.default(seoNode);

const resolveSeoTwitterDescription = (source, seoNode) =>
    seoTwitterDescriptionResolvers[source.field_component] != null
        ? seoTwitterDescriptionResolvers[source.field_component](
              source,
              seoNode
          )
        : seoTwitterDescriptionResolvers.default(seoNode);

const resolveSeoDescriptionMetaTags = (source, seoNode) => [
    {
        name: "description",
        content: resolveSeoDescription(source, seoNode),
    },
];

module.exports = {
    resolveSeoDescription,
    resolveSeoOgDescription,
    resolveSeoTwitterDescription,
    resolveSeoDescriptionMetaTags,
};
