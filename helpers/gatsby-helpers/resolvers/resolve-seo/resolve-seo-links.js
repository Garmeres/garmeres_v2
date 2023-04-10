const linksResolvers = {
    default: (source, seoNode, languageCodes) => {
        const site_url = JSON.parse(seoNode.content).site_url;
        return [
            {
                rel: "canonical",
                href: `${site_url}/${source.full_slug}`,
            },
            {
                rel: "alternative",
                href: `${site_url}/${source.default_full_slug}`,
                hrefLang: languageCodes.find((item) => item.lang === "default")
                    .language_code,
            },
        ].concat(
            source.translated_slugs.map((translated_slug) => {
                return {
                    rel: "alternative",
                    href: `${site_url}/${translated_slug.lang}/${translated_slug.path}`,
                    hrefLang: languageCodes.find(
                        (item) => item.lang === translated_slug.lang
                    ).language_code,
                };
            })
        );
    },
};

const resolveSeoLinks = (source, seoNode, languageCodes) =>
    linksResolvers[source.field_component] != null
        ? linksResolvers[source.field_component](source, seoNode, languageCodes)
        : linksResolvers.default(source, seoNode, languageCodes);

module.exports = { resolveSeoLinks };
