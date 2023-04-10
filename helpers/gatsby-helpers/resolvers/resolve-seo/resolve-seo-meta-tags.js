const resolveSeoMetaTags = (source, seoNode, languageCodes) => [
    {
        charSet: "UTF-8",
    },
    {
        name: "copyright",
        content: "Garmeres - Norsk seksjon",
    },
    {
        name: "owner",
        content: "Garmeres - Norsk seksjon",
    },
    {
        name: "language",
        content: languageCodes.find((item) => item.lang === source.lang)
            .language_code,
    },
];

module.exports = { resolveSeoMetaTags };
