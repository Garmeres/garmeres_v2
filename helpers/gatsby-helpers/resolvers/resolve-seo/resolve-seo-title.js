const getNodeTitle = (source, seoNode) =>
    `${
        source.lang === "default" ||
        source.translated_slugs.find((item) => item.lang === source.lang)
            .name == null
            ? source.name
            : source.translated_slugs.find((item) => item.lang === source.lang)
                  .name
    } | ${JSON.parse(seoNode.content).seo.title}`;

const getPageTitle = (source, seoNode) =>
    source.slug === "index"
        ? JSON.parse(seoNode.content).seo.title
        : getNodeTitle(source, seoNode);

const seoTitleResolvers = {
    page: (source, seoNode) => getPageTitle(source, seoNode),
    default: (source, seoNode) => getNodeTitle(source, seoNode),
};

const seoOgTitleResolvers = {
    page: (source, seoNode) => getPageTitle(source, seoNode),
    default: (source, seoNode) => getNodeTitle(source, seoNode),
};

const seoTwitterTitleResolvers = {
    page: (source, seoNode) => getPageTitle(source, seoNode),
    default: (source, seoNode) => getNodeTitle(source, seoNode),
};

const resolveSeoTitle = (source, seoNode) =>
    seoTitleResolvers[source.field_component] != null
        ? seoTitleResolvers[source.field_component](source, seoNode)
        : seoTitleResolvers.default(source, seoNode);

const resolveSeoOgTitle = (source, seoNode) =>
    seoOgTitleResolvers[source.field_component] != null
        ? seoOgTitleResolvers[source.field_component](source, seoNode)
        : seoOgTitleResolvers.default(source, seoNode);

const resolveSeoTwitterTitle = (source, seoNode) =>
    seoTwitterTitleResolvers[source.field_component] != null
        ? seoTwitterTitleResolvers[source.field_component](source, seoNode)
        : seoTwitterTitleResolvers.default(source, seoNode);

module.exports = {
    resolveSeoTitle,
    resolveSeoOgTitle,
    resolveSeoTwitterTitle,
};
